import { FONT } from '@/styles/Variables'
import { createElement } from 'react'
import styled, {css} from 'styled-components'

// TODO: Fix interfaces and types being repeated

interface ITypography {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span',
    size?: keyof typeof FONT.sizes,
    color?: keyof typeof FONT.colors
}

export const Typography = styled('p').attrs<ITypography>(({tag}) => ({
    as: `${tag}`
}))<ITypography>`
    ${({
        color = 'black',
        size = 'regular'
    }) => css`
        font-size: ${FONT.sizes[size]};
        color: ${FONT.colors[color]}
    `}
`;
