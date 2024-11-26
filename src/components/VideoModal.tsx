import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from '@emotion/styled'
import icon_delete from '../assets/images/icon_delete.svg'
import { musicVideos } from '../constants/musicVideos.data'

interface VideoModalProps {
  title: string
  onClose: () => void
}

const Wrapper = styled.div<{ isTechno: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  background-color: ${({ isTechno }) => (isTechno ? '#fff' : '#000')};
`

const Button = styled.button<{ isTechno: boolean }>`
  position: absolute;
  top: 7.97vh;
  right: 3.125vw;
  filter: ${({ isTechno }) => (isTechno ? 'brightness(0)' : 'none')};
`

const Video = styled.video`
  width: 100vw;
  height: 100vh;
`

export const VideoModal = ({ title, onClose }: VideoModalProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!mounted) return null

  return ReactDOM.createPortal(
    <Wrapper isTechno={title === 'TECHNO'}>
      <Video autoPlay loop playsInline>
        <source src={musicVideos[title].video} type='video/mp4' />
      </Video>
      <Button isTechno={title === 'TECHNO'} onClick={onClose}>
        <img src={icon_delete} alt='Close' />
      </Button>
    </Wrapper>,
    document.body
  )
}
