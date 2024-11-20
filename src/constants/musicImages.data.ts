import edmMain from '../assets/images/img_edm_main.png'
import edmSecond from '../assets/images/img_edm_second.png'
import edmThird from '../assets/images/img_edm_third.png'
import jazzMain from '../assets/images/img_jazz_main.png'
import jazzSecond from '../assets/images/img_jazz_second.png'
import jazzThird from '../assets/images/img_jazz_third.png'
import technoMain from '../assets/images/img_techno_main.png'
import technoSecond from '../assets/images/img_techno_second.png'
import technoThird from '../assets/images/img_techno_third.png'

interface MusicImage {
  title: string
  img: string
}

export const musicImages: Record<string, MusicImage[]> = {
  edm: [
    {
      title: 'Beautiful Now(Feat. Jon Bellion)',
      img: edmMain,
    },
    {
      title: 'Solace',
      img: edmSecond,
    },
    {
      title: 'Worlds Remix Album',
      img: edmThird,
    },
  ],
  jazz: [
    {
      title: 'Blue In Green',
      img: jazzMain,
    },
    {
      title: 'Chet Baker Sings',
      img: jazzSecond,
    },
    {
      title: 'Misty',
      img: jazzThird,
    },
  ],
  techno: [
    {
      title: 'Punch The Light',
      img: technoMain,
    },
    {
      title: 'BCD',
      img: technoSecond,
    },
    {
      title: 'Decks, EFX & 909',
      img: technoThird,
    },
  ],
}
