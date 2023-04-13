import {Menu} from '@styled-icons/boxicons-regular/Menu'
import style from './Navbar.styled'

interface ButtonProps {
  onClick?: (event: React.MouseEvent) => void;
}

export default function NavbarToggle({onClick}: ButtonProps) {
  return (
    <style.NavToggle onClick={onClick}>
        <Menu/>
    </style.NavToggle>
  )
}
