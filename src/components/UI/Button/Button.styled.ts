import { colors } from "@/styles/Variables"
import styled, { css } from "styled-components"

const variants = {
    primary: css`
        color: ${colors.white};
        background-color: ${colors.green};
        border: none;
    `,
    secondary: css`
        color: ${colors.green};
        background-color: ${colors.white};
        border: 2px ${colors.green} solid;
    `
}

const disabled = css`
    cursor: not-allowed;
    background: #d4d4d4;
    color: #f5f5f5;
`


const Button = styled.button<{ $variant?: 'primary' | 'secondary', $disabled?: boolean }>`
    border-radius: 8px;
    padding-inline: 2rem;
    padding-block: 0.8rem;
    font-weight: 600;
    font-size: 1rem;
    ${props => props.$variant && variants[props.$variant]}
    ${props => props.$disabled && disabled}
`;


export default {Button}