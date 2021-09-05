import styled from 'styled-components';

import theme from './../theme';

const { colors, font, spacing, breakpoints } = theme;

export const Container = styled.main`
  width: 100vw;
  height: calc(100vh - ${spacing[14]});

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 ${spacing[4]};

  @media screen and (min-width: ${breakpoints.md}) {
    width: 100vw;
    height: calc(100vh - ${spacing[20]});
    padding: 0 calc((100vw - 1266px) / 2);
  }
`;

export const Hero = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: ${spacing[32]};

  @media screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
    align-items: center;
    height: calc(100vh - ${spacing[20]});
  }
`;

export const HeroLeft = styled.article`
  @media screen and (min-width: ${breakpoints.md}) {
    width: 50%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    justify-content: flex-start;
    gap: ${spacing[24]};
  }
`;

export const TitleContainer = styled.article`
  padding: ${spacing[16]} ${spacing[12]} ${spacing[20]} ${spacing[12]};
  display: flex;
  flex-direction: column;
  gap: ${spacing[6]};

  h1 {
    font-size: ${font[32]};
    color: ${colors.primary};
    font-weight: 700;

    @media screen and (min-width: ${breakpoints.md}) {
      font-size: ${font[64]};
    }
  }

  h2 {
    font-size: ${font[20]};
    font-weight: 400;

    @media screen and (min-width: ${breakpoints.md}) {
      font-size: ${font[24]};
    }
  }

  @media screen and (min-width: ${breakpoints.md}) {
    text-align: left;
    display: flex;
    justify-content: flex-start;
    padding: 0;
  }
`;

export const CTAContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: ${spacing[8]};

  @media screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
  }
`;

export const HeroRight = styled.article`
  display: none;

  @media screen and (min-width: ${breakpoints.md}) {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
