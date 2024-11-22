import styled from '@emotion/styled'

interface ImageCardProps {
  width: string
  height: string
  dark?: boolean
}

export const ImageCard = styled.img<ImageCardProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  filter: brightness(${(props) => (props.dark ? '35%' : '100%')});
`
