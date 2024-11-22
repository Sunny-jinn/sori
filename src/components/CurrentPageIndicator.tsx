import styled from '@emotion/styled'

const Wrapper = styled.div`
  position: fixed;
  right: 6.7vw;
  bottom: 10.37vh;
  z-index: 9999;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

const CurrentPage = styled.div`
  color: #fff;
  font-size: max(0.625vw, 12px);
  font-weight: 600;
`

const Divider = styled.div`
  border-top: 1px solid rgba(256, 256, 256, 0.5);
  width: 64px;
`

const TotalPage = styled.div`
  color: rgba(256, 256, 256, 0.5);
  font-size: max(0.625vw, 12px);
  font-weight: 600;
`

interface CurrentPageIndicatorProps {
  currentPage: number
}

export const CurrentPageIndicator = ({
  currentPage,
}: CurrentPageIndicatorProps) => {
  return (
    <Wrapper>
      <Container>
        <CurrentPage>0{currentPage - 1}</CurrentPage>
        <Divider />
        <TotalPage>03</TotalPage>
      </Container>
    </Wrapper>
  )
}
