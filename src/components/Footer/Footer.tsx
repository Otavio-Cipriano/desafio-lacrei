import FacebookLogo from '@/miscellaneous/icons/FacebookLogo'
import style from './Footer.styled'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Container, Typography } from '../UI'
import InstagramLogo from '@/miscellaneous/icons/InstagramLogo'
import LinkedinLogo from '@/miscellaneous/icons/LinkedinLogo'

interface IFooter {
  children?: React.ReactNode
}

export default function Footer({ children }: IFooter) {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState<string>(router.pathname)

  useEffect(() => {
    setCurrentPage(router.pathname)
  }, [router])

  return (
    <Container>
      <style.Footer>
        <style.FooterNav>
          <style.FooterLink href={'/'} $isActive={currentPage == '/'}>Home</style.FooterLink>
          <style.FooterLink href={'/pessoa-usuaria'} $isActive={currentPage == '/pessoa-usuaria'}>Pessoa Usuária</style.FooterLink>
          <style.FooterLink href={'/pessoa-profissional'} $isActive={currentPage == '/pessoa-profissional'}>Profissional</style.FooterLink>
        </style.FooterNav>
        <style.FooterLogos>
          <style.FooterLogo><InstagramLogo /></style.FooterLogo>
          <style.FooterLogo><FacebookLogo /></style.FooterLogo>
          <style.FooterLogo><LinkedinLogo /></style.FooterLogo>
        </style.FooterLogos>
        <Typography size='small'>Desafio Front-end Lacrei</Typography>
        <Typography size='small'>Built By Otavio Cipriano, 2023</Typography>
      </style.Footer>
    </Container>
  )
}
