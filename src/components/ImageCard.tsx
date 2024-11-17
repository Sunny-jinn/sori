import styled from '@emotion/styled'

interface ImageCardProps {
  width: string
  height: string
  dark?: boolean
}

export const ImageCard = styled.img<ImageCardProps>`
  width: ${(props) => props.width};
  max-width: 467px;
  height: ${(props) => props.height};
  max-height: 595px;
  filter: brightness(${(props) => (props.dark ? '35%' : '100%')});
`
