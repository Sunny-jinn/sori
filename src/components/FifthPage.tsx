import styled from '@emotion/styled'
import { Section } from './Section'
import bg_third from '../assets/images/img_jazz_background.png'
import logo from '../assets/images/icon_main.svg'
import { MusicSection } from './MusicSection'
import { musicContents } from '../constants/musicContent.data'
import { CardSections } from './CardSections'
import { musicImages } from '../constants/musicImages.data'

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

export const FifthPage = () => {
  const { title, name, content, buttonText } = musicContents.jazz

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
          <CardSections cards={musicImages.jazz} />
        </ContentWrapper>
      </Wrapper>
    </Section>
  )
}
