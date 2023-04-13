import Section from "@/components/Section/Section";
import { Button, Container, Typography } from "@/components/UI";
import NextImage from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <Container>
          <Section>
            <div className="row">
              <div>
                <Typography tag="h2" size="xxlarge">Boas Vindas a Lacrei Saúde</Typography>
                <Typography tag="p" size="large" color="darkGray">Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</Typography>
                <div className="button-group">
                  <Button variant="primary">Pessoa Usuária</Button>
                  <Button variant="secondary">Profissional</Button>
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
