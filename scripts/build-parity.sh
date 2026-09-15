#!/usr/bin/env bash
#
# build-parity.sh — captura e compara a saída construída do site.
#
# Existe para provar que um upgrade de framework não alterou o que o visitante
# recebe. Compara os cinco valores que uma regressão silenciosa atingiria
# primeiro — canonical, og:url, og:image, sitemap.xml e robots.txt — mais a
# lista de rotas estáticas geradas.
#
#   scripts/build-parity.sh capture <arquivo>   grava a referência
#   scripts/build-parity.sh compare <arquivo>   compara o build atual com ela
#
# Roda sobre .next/ depois de `npm run build`. Só shell e coreutils; sem
# dependência nova. O <lastmod> do sitemap é normalizado porque vem de
# new Date() e muda a cada build.

set -euo pipefail

readonly ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
readonly NEXT_DIR="$ROOT/.next"
readonly APP_DIR="$NEXT_DIR/server/app"

erro() {
  echo "erro: $*" >&2
  exit 1
}

# Localiza um arquivo da saída construída. Tenta o caminho conhecido e cai para
# uma busca, para não quebrar se o Next mudar o layout de .next/ entre versões.
localizar() {
  local nome="$1" caminho
  caminho="$APP_DIR/$nome"
  [[ -f "$caminho" ]] && { echo "$caminho"; return; }
  caminho="$(find "$NEXT_DIR/server" -type f -name "$nome" -print -quit 2>/dev/null || true)"
  [[ -n "$caminho" ]] || erro "não encontrei '$nome' em $NEXT_DIR/server — rode 'npm run build' antes"
  echo "$caminho"
}

# Extrai o href do <link rel="canonical">.
extrair_canonical() {
  grep -o '<link rel="canonical"[^>]*href="[^"]*"' "$1" \
    | sed -e 's/.*href="//' -e 's/"$//' \
    | head -1
}

# Extrai o content de uma meta property="og:*".
extrair_og() {
  local arquivo="$1" prop="$2"
  grep -o "property=\"$prop\" content=\"[^\"]*\"" "$arquivo" \
    | sed -e "s/.*content=\"//" -e 's/"$//' \
    | head -1
}

# Lista as rotas estáticas a partir dos arquivos que o build emitiu.
listar_rotas() {
  {
    find "$APP_DIR" -maxdepth 1 -name '*.html' -exec basename {} .html \; \
      | sed -e 's|^index$|/|' -e 's|^\([^/]\)|/\1|'
    find "$APP_DIR" -maxdepth 1 -name '*.body' -exec basename {} .body \; \
      | sed 's|^|/|'
  } | sort
}

gerar_snapshot() {
  local html robots sitemap
  html="$(localizar index.html)"
  robots="$(localizar robots.txt.body)"
  sitemap="$(localizar sitemap.xml.body)"

  local canonical og_url og_image
  canonical="$(extrair_canonical "$html")"
  og_url="$(extrair_og "$html" 'og:url')"
  og_image="$(extrair_og "$html" 'og:image')"

  [[ -n "$canonical" ]] || erro "canonical não encontrado em $html"
  [[ -n "$og_url" ]] || erro "og:url não encontrado em $html"
  [[ -n "$og_image" ]] || erro "og:image não encontrado em $html"

  echo "# build-parity v1"
  echo "canonical=$canonical"
  echo "og:url=$og_url"
  echo "og:image=$og_image"
  echo "--- rotas estaticas ---"
  listar_rotas
  echo "--- robots.txt ---"
  cat "$robots"
  echo
  echo "--- sitemap.xml (lastmod normalizado) ---"
  # <lastmod> vem de new Date() e muda a cada build: divergência esperada.
  sed 's|<lastmod>[^<]*</lastmod>|<lastmod>IGNORADO</lastmod>|g' "$sitemap"
  echo
}

# Valor real do lastmod, mostrado como informação — não entra na comparação.
lastmod_atual() {
  sed -n 's|.*<lastmod>\([^<]*\)</lastmod>.*|\1|p' "$(localizar sitemap.xml.body)" | head -1
}

comando="${1:-}"
arquivo="${2:-}"

case "$comando" in
  capture)
    [[ -n "$arquivo" ]] || erro "uso: $0 capture <arquivo>"
    gerar_snapshot > "$arquivo"
    echo "referência gravada em $arquivo"
    echo
    cat "$arquivo"
    ;;
  compare)
    [[ -n "$arquivo" ]] || erro "uso: $0 compare <arquivo>"
    [[ -f "$arquivo" ]] || erro "referência não encontrada: $arquivo"
    atual="$(mktemp)"
    trap 'rm -f "$atual"' EXIT
    gerar_snapshot > "$atual"
    if diff -u "$arquivo" "$atual" > /dev/null; then
      echo "PARIDADE OK — saída construída idêntica à referência"
      echo "(lastmod do sitemap ignorado; valor atual: $(lastmod_atual))"
      exit 0
    fi
    echo "DIVERGÊNCIA — a saída construída mudou em relação à referência:"
    echo
    diff -u "$arquivo" "$atual" || true
    exit 1
    ;;
  *)
    erro "uso: $0 {capture|compare} <arquivo>"
    ;;
esac
