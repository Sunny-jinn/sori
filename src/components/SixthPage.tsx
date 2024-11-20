import styled from '@emotion/styled'
import icon from '../assets/images/icon_main.svg'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #000;
  color: #fff;
  justify-content: center;
  align-items: center;
  gap: 13px;
`

const Logo = styled.img`
  width: 2.083vw;
  min-width: 40px;
  aspect-ratio: 1 / 1;
`

const Text = styled.span`
  font-size: clamp(41px, 2.14vw, 60px);
  font-weight: 800;
  line-height: 48.93px;
`

export const SixthPage = () => {
  return (
    <Wrapper>
      <Logo src={icon} alt='x' />
      <Text>SORI:</Text>
    </Wrapper>
  )
}
