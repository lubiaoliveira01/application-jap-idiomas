import styled from "styled-components";
import mediaQueries from "../../styles/mediaQueries";

export const Container = styled.div`
    background-color: #8f63ba;
    height: 5rem;
    display: flex;
    padding: 0.75rem 2rem;
    box-shadow: 0 0.4rem 0.8rem 0 rgba(0,0,0,0.40);

    ${mediaQueries.lessThan('lg')`
        height: 3rem;

        & > img {
            display: none;
        }
    `}
`

export const ItemMenu = styled.a`
    color: white;
    padding: 0 3rem;
    text-decoration: none;

    ${mediaQueries.lessThan('lg')`
        display: none;
    `}
`

export const SideIcon = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;

    ${mediaQueries.greaterThan('lg')`
        display: none;
    `}
`

export const SideMenu = styled.div`
    background-color: #8f63ba;
    position: absolute;
    width: 100%;
    box-shadow: inset 0px 16px 16px -2px rgba(46,46,46,0.67);

    ${mediaQueries.greaterThan('lg')`
        display: none;
    `}
`

export const SideItem = styled.a`
    color: white;
    padding: 1rem 3rem;
    text-decoration: none;
    display: flex;

`