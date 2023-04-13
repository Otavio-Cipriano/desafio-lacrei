import React, { useEffect, useState } from 'react'
import style from './Navbar.styled'
import { useRouter } from 'next/router'
import NavbarToggle from './NavbarToggle'

export default function Navbar() {
    const router = useRouter()
    const [currentPage, setCurrentPage] = useState<string>(router.pathname)

    useEffect(() => {
        setCurrentPage(router.pathname)
    }, [router])

    return (
        <style.Navbar>
            <style.NavBrand >
                <style.NavLink href={`/`}>
                    Lacrei
                </style.NavLink>
            </style.NavBrand>
            <style.Nav>
                <style.NavItem>
                    <style.NavLink href={'/'} $isActive={currentPage == '/'}>Home</style.NavLink>
                </style.NavItem>
                <style.NavItem>
                    <style.NavLink href={'/pessoa-usuaria'} $isActive={currentPage == '/pessoa-usuaria'}>Pessoa Usuária</style.NavLink>
                </style.NavItem>
                <style.NavItem>
                    <style.NavLink href={'/pessoa-profissional'} $isActive={currentPage == '/pessoa-profissional'}>Profissional</style.NavLink>
                </style.NavItem>
            </style.Nav>
        </style.Navbar>
    )
}
