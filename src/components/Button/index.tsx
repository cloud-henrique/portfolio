import React, { ReactNode, MouseEventHandler } from 'react'
import Link from 'next/link'

import { theme } from 'styles/theme'

import { Container } from './styles'

const { buttonSizes } = theme

interface ButtonProps {
  children: ReactNode
  external?: boolean
  href?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
  outline?: boolean
  rounded?: boolean
  size?: number
  desktopSize?: number
}

export function Button({
  children = 'Default Button',
  external = false,
  href = '',
  onClick,
  outline = false,
  rounded = false,
  size = buttonSizes.base,
  desktopSize = buttonSizes.md,
  ...rest
}: ButtonProps) {
  return (
    <>
      {href && (
        <Link href={href} passHref>
          <Container
            desktopSize={desktopSize}
            href={href}
            outline={outline}
            rel='noopener noreferrer nofollow'
            rounded={rounded}
            size={size}
            target={external ? '_blank' : '_self'}
            {...rest}
          >
            {children}
          </Container>
        </Link>
      )}
      {onClick && (
        <Container outline={outline} size={size} type='button' rounded={rounded} onClick={onClick} {...rest}>
          {children}
        </Container>
      )}
    </>
  )
}
