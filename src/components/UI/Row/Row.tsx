import style from './Row.styled'

export interface IRow{
    children?: React.ReactNode,
    direction?: 'row' | 'row-reverse' | 'column' | 'colunm-reverse'
}

export default function Row({children, direction = 'row'}: IRow) {
  return (
    <style.Row direction={direction}>{children}</style.Row>
  )
}
