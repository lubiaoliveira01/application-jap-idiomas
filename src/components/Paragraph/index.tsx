import React from "react";
import * as S from './styles'

export interface IParagraphProps {
    size?: 'small' | 'medium' | 'large'
    colorType?: 'primary' | 'secondary' | 'white'
    alignment?: 'left' | 'center' | 'right'
    weight?: 'normal' | 'light' | 'semibold' | 'bold'
    children: React.ReactNode
}

const Paragraph = ({
    size = 'medium',
    colorType = 'primary',
    alignment = 'left',
    weight = 'normal',
    children,
    ...props
  }: IParagraphProps) => {
    return <S.Text
    size={size}
    color={colorType}
    alignment={alignment}
    weight={weight}
    {...props}
  >
    {children}
  </S.Text>
}

export default Paragraph