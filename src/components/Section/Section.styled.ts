import { breakpoints, medias } from "@/styles/Breakpoints";
import styled from "styled-components";

const Section = styled.section`
    padding: 4rem 4rem 0;

    @media (${medias.md}){ padding: 0;}

    .row{
        justify-content: space-between;
        display: flex;

        @media (${medias.md}){ flex-direction: column; }

        >div{
            flex: 1 0;
            max-width: 540px;
            
            img{
                width: 100%;
            }

            @media (${medias.md}){
                margin: 1.5rem auto;
                text-align: center;

                h2{
                    font-size: 2rem;
                }
                p{
                    font-size: 1.2rem;
                    margin: 2rem 0;
                }
            }

            @media (${medias.sm}){
                h2{
                    font-size: 1.5rem;
                }
                p{
                    font-size: 1rem;
                }
            }
        }
    }

    .button-group{
        display: flex;
        width: 100%;
        gap: 3rem;

        button{
            flex: 1;
            max-width: 200px;
            width: 100%;
            font-size: 1.1rem;
        }

        @media (${medias.md}){justify-content: center; }
        @media (${medias.sm}){
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }
    }
`;

export default { Section }