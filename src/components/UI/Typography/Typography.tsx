import { FONT } from '@/styles/Variables'
import * as style from './Typography.styled'

// type TagVariants = 

export interface ITypography {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span',
  size?: keyof typeof FONT.sizes,
  color?: keyof typeof FONT.colors,
  children: React.ReactNode
}

export default function Typography({ children, tag = 'p', size, color, ...props }: ITypography) {
  return (
    <style.Typography tag={tag} size={size} color={color}>
      {children}
    </style.Typography>
  )
}
