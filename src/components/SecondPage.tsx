import styled from '@emotion/styled'
import { Section } from './Section'
import img_edm from '../assets/images/img_edm_main.png'
import img_techno from '../assets/images/img_techno_main.png'
import img_jazz from '../assets/images/img_jazz_main.png'
import { ImageCard } from './ImageCard'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* padding-top: 10.27vh; */

  background-color: #000;
  color: white;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.7vh;
`

const Title = styled.span`
  font-size: 1.25vw;
  font-weight: 700;
`

const SubTitle = styled.span`
  font-size: 0.83vw;
  font-weight: 400;
  text-align: center;
  color: #d5d5d5;
`

const ImageWrapper = styled.div`
  display: flex;
  gap: 55px;
  margin-top: 7.6vh;
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const ImageText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.56vw;
  font-weight: 700;
`

export const SecondPage = () => {
  return (
    <Section>
      <Wrapper>
        <TitleContainer>
          <Title>The Mission of SORI:</Title>
          <SubTitle>
            We wanted to provide a means of providing a service where the deaf
            can enjoy music in their daily lives,
            <br /> and the sound appears visually, interacts with others, and
            communicates with the world.
          </SubTitle>
        </TitleContainer>
        <ImageWrapper>
          <ImageContainer>
            <ImageCard
              src={img_edm}
              alt='edm'
              width={'22.7vw'}
              height={'51.38vh'}
              dark
            />
            <ImageText>EDM</ImageText>
          </ImageContainer>
          <ImageContainer>
            <ImageCard
              src={img_techno}
              alt='techno'
              width={'22.7vw'}
              height={'51.38vh'}
              dark
            />
            <ImageText>TECHNO</ImageText>
          </ImageContainer>
          <ImageContainer>
            <ImageCard
              src={img_jazz}
              alt='jazz'
              width={'22.7vw'}
              height={'51.38vh'}
              dark
            />
            <ImageText>JAZZ</ImageText>
          </ImageContainer>
        </ImageWrapper>
      </Wrapper>
    </Section>
  )
}
