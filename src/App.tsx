import { useRef, useState, useEffect } from 'react'
import { FirstPage } from './components/FirstPage'
import { SecondPage } from './components/SecondPage'
import { ThirdPage } from './components/ThirdPage'
import { FourthPage } from './components/FourthPage'
import ReactPageScroller from 'react-page-scroller'
import { PageIndicator } from './components/PageIndicator'

import './App.css'
import './styles/fonts.css'
import { FifthPage } from './components/FifthPage'
import { SixthPage } from './components/SixthPage'
import { CurrentPageIndicator } from './components/CurrentPageIndicator'

function App() {
  const [renderedPage, setRenderedPage] = useState(0)
  const currentPageRef = useRef(0)
  const indicatorRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (indicatorRef.current) {
      if (currentPageRef.current >= 2 && currentPageRef.current < 5) {
        indicatorRef.current.style.display = 'block'
      } else if (currentPageRef.current === 1 || currentPageRef.current === 5) {
        indicatorRef.current.style.display = 'none'
      }
    }
  }, [renderedPage])

  const handleBeforePageScroll = (nextPage: number) => {
    currentPageRef.current = nextPage

    if (indicatorRef.current) {
      if (nextPage === 2 || nextPage === 4) {
        setTimeout(() => {
          indicatorRef.current!.style.display = 'block'
        }, 650)
      } else if (nextPage === 1 || nextPage === 5) {
        setTimeout(() => {
          indicatorRef.current!.style.display = 'none'
        }, 300)
      }
    }
  }

  const handlePageChange = (nextPage: number) => {
    setRenderedPage(nextPage)
  }

  return (
    <div>
      <div
        ref={indicatorRef}
        style={{ display: renderedPage === 2 ? 'block' : 'none' }}
      >
        <PageIndicator currentPage={renderedPage} />
        <CurrentPageIndicator currentPage={renderedPage} />
      </div>
      <ReactPageScroller
        onBeforePageScroll={handleBeforePageScroll}
        pageOnChange={handlePageChange}
      >
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <FourthPage />
        <FifthPage />
        <SixthPage />
      </ReactPageScroller>
    </div>
  )
}

export default App
