import styled from '@emotion/styled'

interface PageIndicatorProps {
  currentPage: number
}

const PageIndicatorContainer = styled.div`
  position: fixed;
  color: white;
  z-index: 1;
  top: 26.76vh;
  left: 4.1vw;
  height: calc(100vh - 26.76vh - 8vh);
  width: 2px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Dot = styled.div<{
  isActive: boolean
  marginTop: string
  marginBottom: string
}>`
  width: ${(props) => (props.isActive ? '26px' : '10px')};
  height: ${(props) => (props.isActive ? '26px' : '10px')};
  background-color: white;
  border-radius: 50%;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
`

export const PageIndicator = ({ currentPage }: PageIndicatorProps) => {
  currentPage = currentPage < 2 ? 2 : currentPage
  const dots = [0, 1, 2, 3, 4]

  return (
    <PageIndicatorContainer>
      {dots.map((index) => {
        let marginTop = '0px'
        let marginBottom = '0px'

        if (index < currentPage) {
          marginBottom = '0px'
        } else if (index > currentPage) {
          marginTop = '100px'
        }

        return (
          <Dot
            key={index}
            isActive={currentPage === index}
            marginTop={marginTop}
            marginBottom={marginBottom}
          />
        )
      })}
    </PageIndicatorContainer>
  )
}
