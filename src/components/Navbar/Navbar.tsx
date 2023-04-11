import React, { useEffect, useState } from 'react'
import styled from './Navbar.styled'
import { useRouter } from 'next/router'

export default function Navbar() {
    const router = useRouter() 
    const [currentPage, setCurrentPage] = useState(router.pathname)

    useEffect(() =>{
        setCurrentPage(router.pathname)
    }, [router])

    return (
        <styled.Navbar>
            <styled.NavBrand >
                <styled.NavLink href={`/`}>
                    Lacrei
                </styled.NavLink>
            </styled.NavBrand>
            <styled.Nav>
                <styled.NavItem>
                    <styled.NavLink href={'/'} $isActive={currentPage == '/'}>Home</styled.NavLink>
                </styled.NavItem>
                <styled.NavItem>
                    <styled.NavLink  href={'/pessoa-usuaria'} $isActive={currentPage == '/pessoa-usuaria'}>Pessoa Usuária</styled.NavLink>
                </styled.NavItem>
                <styled.NavItem>
                    <styled.NavLink href={'/pessoa-profissional'} $isActive={currentPage == '/pessoa-profissional'}>Profissional</styled.NavLink>
                </styled.NavItem>
            </styled.Nav>
        </styled.Navbar>
    )
}
