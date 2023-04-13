import style from './Link.styled'

interface ILink {
    children?: React.ReactNode,
    href: string
}

export default function Link({children, href}: ILink) {
  return (
    <style.Link href={href}>{children}</style.Link>
  )
}
