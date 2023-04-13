import styled from 'styled-components'
import NextLink from 'next/link'
import { colors } from '@/styles/Variables'

const Link = styled(NextLink)`
    text-decoration: none;
    font-weight: 600;
    color: ${colors.black};
`

export default { Link }