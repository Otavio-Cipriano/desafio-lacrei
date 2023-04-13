import Section from '@/components/Section/Section'
import { Container, Typography } from '@/components/UI'
import NextImage from "next/image";

export default function Professional() {
  return (
    <Container>
      <Section>
        <div className="row">
          <div>
            <Typography tag='h2' size='xxlarge'>
              Profissional
            </Typography>
            <Typography size='large' color='darkGray'>
              Buscamos recrutar pessoas profissionais da saúde que entendam 
              as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+
            </Typography>
          </div>
          <div >
            <NextImage
              src={'/profissional.svg'}
              alt="Pessoas Olhando o celular"
              width={555}
              height={421}
            />
          </div>
        </div>
      </Section>
    </Container>
  )
}
