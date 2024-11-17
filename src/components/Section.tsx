import styled from '@emotion/styled'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
}

export const Section = styled.section<SectionProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: transparent;
`
