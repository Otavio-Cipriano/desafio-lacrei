import Section from "@/components/Section/Section";
import { Button, Container, Typography, Link } from "@/components/UI";
import Head from "next/head";
import NextImage from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Desafio Lacrei</title>
      </Head>
      <main>
        <Container>
          <Section>
            <div className="row">
              <div>
                <Typography tag="h2" size="xxlarge">Boas Vindas a Lacrei Saúde</Typography>
                <Typography tag="p" size="large" color="darkGray">Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</Typography>
                <div className="button-group">
                  <Link href="/pessoa-usuaria"><Button variant="primary">Pessoa Usuária</Button></Link>
                  <Link href="/pessoa-profissional"><Button variant="secondary">Profissional</Button></Link>
                </div>
              </div>
              <div >
                <NextImage
                  src={'/rafiki1.svg'}
                  alt="Doutora Acenando"
                  width={555}
                  height={421}
                   />
              </div>
            </div>
          </Section>
        </Container>
      </main>
    </>
  )
}
