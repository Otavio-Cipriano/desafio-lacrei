import styled, { css } from "styled-components";
import NextLink from 'next/link'
import { colors } from "@/styles/Variables";
import { breakpoints, medias } from "@/styles/Breakpoints";


const Navbar = styled.nav`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem;
    background-color: ${colors.gray};

    >div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    @media (${medias.sm}){
        >div{
            flex-direction: column;
            gap: 1rem;
        }
    }
`;

const NavBrand = styled.div`
    font-size: 2rem;
    font-weight: bolder;

    a{
        color: ${colors.green};
    }
`;

const Nav = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
`;

const NavItem = styled.li``;

const NavLink = styled(NextLink) <{ $isActive?: boolean }>`
    text-decoration: none;
    padding-inline: 1rem;
    font-weight: 700;
    color: ${props => props.$isActive ? colors.green : colors.black};

`;

export default { Nav, NavItem, Navbar, NavLink, NavBrand}