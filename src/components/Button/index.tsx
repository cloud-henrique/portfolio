import React from 'react'
import Link from 'next/link'

import { ButtonSizes } from '../../constants/ButtonSizes'
import { Container } from './styles'

interface ButtonProps {
  children: React.ReactNode
  external?: boolean
  href?: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  outline?: boolean
  rounded?: boolean
  size?: ButtonSizes
  desktopSize?: ButtonSizes
}

const Button: React.FC<ButtonProps> = ({
  children = 'Default Button',
  external = false,
  href = '',
  onClick,
  outline = false,
  rounded = false,
  size = ButtonSizes.base,
  desktopSize = ButtonSizes.md,
  ...rest
}: ButtonProps) => {
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

export default Button
