import React, { useState } from 'react';
import styled from 'styled-components';
import { Menu, X } from 'react-feather';

import theme from './../../styles/theme';

const { colors, spacing } = theme;
interface HamburguerProps {
  open: boolean;
  setOpen: (v: boolean) => void;
}

const StyledHamburguer = styled.button<{ open: boolean }>`
  position: fixed;
  right: ${spacing[5]};
  top: ${spacing[3]};
  padding: 0;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  z-index: 3;
`;

export const Hamburguer = ({ open, setOpen }: HamburguerProps) => {
  return (
    <StyledHamburguer open={open} onClick={() => setOpen(!open)}>
      {open ? <X size={32} color={colors.light} /> : <Menu size={32} color={colors.light} />}
    </StyledHamburguer>
  );
};
