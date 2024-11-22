import styled from '@emotion/styled'
import icon_arrow from '../assets/images/icon_button_arrow.svg'
import { useState } from 'react'
import { VideoModal } from './VideoModal'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: calc(10.78vw - 3.125vw);
`

const Title = styled.span`
  font-size: 1.093vw;
  font-weight: 600;
`

const Name = styled.span`
  font-size: 4.167vw;
  font-weight: 800;
  margin-top: 12.96vh;
`

const Content = styled.span`
  font-size: 0.9375vw;
  font-weight: 400;
  margin-top: 3.24vh;
`

const Button = styled.button`
  margin-top: 8.8vh;
  width: 16.35vw;
  aspect-ratio: 3.738;
  background: linear-gradient(90deg, #20f10f 0%, #8c36cb 100%);
  border-radius: 2.1875vw;
  color: #fff;
  font-size: 1.146vw;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  img {
    width: 2.76vw;
  }
`

interface MusicSectionProps {
  title: string
  name: string
  content: string[] // 줄바꿈을 위해 배열로 받습니다
  buttonText: string
}

export const MusicSection = ({
  title,
  name,
  content,
  buttonText,
}: MusicSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <Container>
      <Title>{title}</Title>
      <Name>{name}</Name>
      <Content>
        {content.map((line, index) => (
          <>
            {line}
            {index !== content.length - 1 && <br />}
          </>
        ))}
      </Content>
      <Button onClick={() => setIsModalOpen(true)}>
        <span>{buttonText}</span>
        <img src={icon_arrow} alt='arrow' />
      </Button>

      {isModalOpen && (
        <VideoModal onClose={() => setIsModalOpen(false)} title={name} />
      )}
    </Container>
  )
}
