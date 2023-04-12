import style from "./Container.styled"

interface IContainer{
    children: React.ReactNode
}

export default function Container({children}:IContainer){
  return (
    <style.Container>{children}</style.Container>
  )
}
