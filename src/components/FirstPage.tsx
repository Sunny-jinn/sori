import { Section } from './Section'
import styled from '@emotion/styled'
import video from '../assets/videos/video_main.mp4'
import logo from '../assets/images/icon_main.svg'

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`

const Title = styled.span`
  font-size: 2.6vw;
  font-weight: 700;
  color: white;
`

const Wrapper = styled.div`
  padding-top: 303px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 43px;
  gap: 14px;
`

const ContentTitle = styled.span`
  font-size: 3.38vw;
  font-weight: 700;
  color: white;
`

const ContentSubTitle = styled.span`
  font-size: 1.82vw;
  font-weight: 400;
  color: white;
`

const Logo = styled.img`
  width: 2.083vw;
  aspect-ratio: 1 / 1;
`

export const FirstPage = () => {
  return (
    <Section>
      <VideoBackground autoPlay muted loop playsInline>
        <source src={video} type='video/mp4' />
      </VideoBackground>
      <Wrapper>
        <TitleContainer>
          <Logo src={logo} alt='logo' />
          <Title>SORI:</Title>
        </TitleContainer>
        <ContentContainer>
          <ContentTitle>To Visualize Intangible Music</ContentTitle>
          <ContentSubTitle>
            청각장애인을 위한 시각적 음악 제공 서비스
          </ContentSubTitle>
        </ContentContainer>
      </Wrapper>
    </Section>
  )
}
