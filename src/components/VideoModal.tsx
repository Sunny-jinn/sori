import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from '@emotion/styled'
import icon_delete from '../assets/images/icon_delete.svg'
import { musicVideos } from '../constants/musicVideos.data'

interface VideoModalProps {
  title: string
  onClose: () => void
}

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  z-index: 99999; /* 최상위로 보이게 설정 */
  background-color: #000;
`

const Button = styled.button`
  position: absolute;
  top: 7.97vh;
  right: 3.125vw;
`

const Video = styled.video`
  width: 100%;
  height: 100%;
`

export const VideoModal = ({ title, onClose }: VideoModalProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!mounted) return null

  console.log(title)

  return ReactDOM.createPortal(
    <Wrapper>
      <Video autoPlay muted loop playsInline>
        <source src={musicVideos[title].video} type='video/mp4' />
      </Video>
      <Button onClick={onClose}>
        <img src={icon_delete} alt='Close' />
      </Button>
    </Wrapper>,
    document.body
  )
}
