import React from "react";
import * as S from './styles'
import Heading from "../Heading";
import Paragraph from "../Paragraph";

export interface ICardProps {
    level?: 'easy' | 'middle' | 'difficult'
    nameLevel?: string
    title?: string
    description?: string
    nameButton?: string
}

const Card = ({ level, nameLevel, title, description, nameButton }: ICardProps) => {
    return (
        <S.Container>
            <S.Level color={level}>
                <Heading colorType="white" size="h4">{nameLevel}</Heading>
            </S.Level>
            <S.Content>
                <Heading size="h3">{title}</Heading>
                <Paragraph>{description}</Paragraph>
            </S.Content>
            <S.Button color={level}>{nameButton}</S.Button>       
        </S.Container>
    )
}

export default Card;