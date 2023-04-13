import style from './Section.styled';

interface ISection {
    children?: React.ReactNode
}

export default function Section({children}: ISection) {
  return (
    <style.Section>{children}</style.Section>
  )
}


