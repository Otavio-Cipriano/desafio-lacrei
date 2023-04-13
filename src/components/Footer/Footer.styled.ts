import { breakpoints, medias } from "@/styles/Breakpoints";
import { colors } from "@/styles/Variables";
import NextLink from "next/link";
import styled from "styled-components";

const Footer = styled.div`
    margin: 0 4rem;
    padding: 2rem 0 0;
    border-top: 1px solid ${colors.lightGreen};

    p{
        margin: 1rem 0;
    }

    @media (${medias.md}){
        p{
            text-align: center;

        }
    }
`
const FooterNav = styled.nav`
    display: flex;
    gap: 2rem;

    @media (${medias.md}){
        justify-content: center;
    }

    @media (${medias.sm}){
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
`
const FooterLink = styled(NextLink)<{ $isActive?: boolean }>`
    text-decoration: none;
    font-weight: ${props => props.$isActive ? 700 : 500};;
    color: ${colors.black};
`

const FooterLogos = styled.div`
    display: flex;
    gap: 2.5rem;
    margin: 2rem 0 0;

    @media (${medias.md}){
        justify-content: center;
    }
`;
const FooterLogo = styled.div``;

export default { Footer, FooterNav, FooterLink, FooterLogos, FooterLogo }