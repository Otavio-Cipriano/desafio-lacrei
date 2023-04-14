import Section from '@/components/Section/Section'
import { Container, Typography } from '@/components/UI'
import Head from 'next/head';
import NextImage from "next/image";

export default function User() {
  return (
    <>
      <Head>
        <title>Pessoa Usuária | Desafio Lacrei</title>
      </Head>
      <Container>
        <Section>
          <div className="row">
            <div>
              <Typography tag='h2' size='xxlarge'>
                Pessoa Usuária
              </Typography>
              <Typography size='large' color='darkGray'>
                A Lacrei garante que pessoas LGBTQIAPN + recebam
                atendimento realizado por profissionais de qualidade
                e que atendam às suas necessidades de forma segura e acolhedora.
              </Typography>
            </div>
            <div >
              <NextImage
                src={'/rafiki.svg'}
                alt="Pessoas Olhando o celular"
                width={555}
                height={421}
              />
            </div>
          </div>
        </Section>
      </Container>
    </>
  )
}
