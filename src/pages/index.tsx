import { Button, Container, Typography } from "@/components/UI";
import NextImage from "next/image";

import styled from 'styled-components'

export default function Home() {
  return (
    <>
      <main>
        <Container>
          <Row>
            <div>
              <Typography tag="h2" size="xxlarge">Boas Vindas a Lacrei Saúde</Typography>
              <Typography tag="p" size="large" color="darkGray">Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</Typography>
              <Button variant="primary">Pessoa Usuária</Button>
              <Button variant="secondary">Profissional</Button>
            </div>
            <div style={{position: 'relative'}}>
              <NextImage src={'/rafiki1.svg'} alt="Doutora Acenando"  fill/>
            </div>
          </Row>
        </Container>
      </main>
    </>
  )
}

const Row = styled.div`
  display: flex;

  div{
    flex: 1;
  }
`