import styled from '@emotion/styled'
import { Section } from './Section'
import bg_third from '../assets/images/img_edm_background.png'
import logo from '../assets/images/icon_main.svg'
import { MusicSection } from './MusicSection'
import { musicContents } from '../constants/musicContent.data'
import star from '../assets/images/icon_music_star.svg'
import img_edm_first from '../assets/images/img_edm_main.png'
import img_edm_second from '../assets/images/img_edm_second.png'
import img_edm_third from '../assets/images/img_edm_third.png'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${bg_third});
  background-size: cover;
  background-position: center;
  padding-top: 2.5vh;
  padding-left: 3.125vw;
  color: #fff;
`

const Logo = styled.img`
  width: 2.083vw;
  aspect-ratio: 1 / 1;
`

const ContentWrapper = styled.div`
  display: flex;
  padding-top: 20.65vh;
`
const CardSection = styled.div`
  display: flex;
  margin-top: 125px;
  margin-left: 20%;

  width: 30vw;
`

const CardContainer = styled.div`
  transition: transform 0.3s ease;

  & + & {
    margin-left: 20px;
  }

  .card-section:hover & ~ & {
    transform: translateX(60px);
  }
`

const CardTitle = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #cecac9;
  transition: all 0.3s ease;
  display: block;

  .card-section:hover div:first-of-type & {
    color: #fff;
    transform: translateY(-70px);
  }
`

const CardStar = styled.img`
  margin-top: 9px;
  margin-bottom: 25px;
  filter: invert(15%) sepia(3%) saturate(245%) hue-rotate(325deg)
    brightness(91%) contrast(93%);
  transition: all 0.3s ease;

  .card-section:hover div:first-of-type & {
    filter: none;
    transform: translateY(-70px);
  }
`

const CardImage = styled.img`
  max-width: 291px;
  height: 375px;
  transition: transform 0.3s ease;
  transform-origin: left bottom;

  .card-section:hover div:first-of-type & {
    transform: scale(1.2);
  }
`

export const ThirdPage = () => {
  const { title, name, content, buttonText } = musicContents.edm

  return (
    <Section>
      <Wrapper>
        <Logo src={logo} alt='third' />
        <ContentWrapper>
          <MusicSection
            title={title}
            name={name}
            content={content}
            buttonText={buttonText}
          />
          <CardSection className='card-section'>
            <CardContainer>
              <CardTitle>Beautiful Now</CardTitle>
              <CardStar src={star} alt='star' />
              <CardImage src={img_edm_first} alt='card' />
            </CardContainer>

            <CardContainer>
              <CardTitle>Solace</CardTitle>
              <CardStar src={star} alt='star' />
              <CardImage src={img_edm_second} alt='card' />
            </CardContainer>
            <CardContainer>
              <CardTitle>Worlds Remix Album</CardTitle>
              <CardStar src={star} alt='star' />
              <CardImage src={img_edm_third} alt='card' />
            </CardContainer>
          </CardSection>
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
