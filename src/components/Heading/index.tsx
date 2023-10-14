import React, { HTMLProps } from "react";
import * as S from './styles'

export interface IHeadingProps extends Omit<HTMLProps<HTMLHeadingElement>, 'size'> {
    size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    colorType?: 'primary' | 'secondary' | 'white'
    alignment?: 'left' | 'center' | 'right'
    children: React.ReactNode
}

const Heading = ({ size = 'h1', colorType = 'primary', alignment = 'left', children}: IHeadingProps) => {
    return <S.Text size={size} color={colorType} alignment={alignment}>{children}</S.Text>
}

export default Heading
