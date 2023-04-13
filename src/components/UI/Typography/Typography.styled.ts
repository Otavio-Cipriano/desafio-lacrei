import { FONT } from '@/styles/Variables'
import { createElement } from 'react'
import styled, {css} from 'styled-components'
import { ITypography } from './Typography';


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
