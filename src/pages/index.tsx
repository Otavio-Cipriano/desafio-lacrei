import { Button, Container, Typography } from "@/components/UI";
import NextImage from "next/image";

import styled from 'styled-components'

export default function Home() {
  return (
    <>
      <main>
        <Container>
          <div>
            <div>
              <Typography tag="h2" size="xxlarge">Boas Vindas a Lacrei Saúde</Typography>
              <p>
                Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+
              </p>
              <Button variant="primary">Pessoa Usuária</Button>
              <Button variant="secondary">Profissional</Button>
            </div>
            <div>
              <NextImage src={'/rafiki1.svg'} alt="Doutora Acenando"  fill/>
            </div>
          </div>
        </Container>
      </main>
    </>
  )
}

const Row = styled.div`
  display: flex;
`