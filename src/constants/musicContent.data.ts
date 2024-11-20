export interface MusicContent {
  title: string
  name: string
  content: string[]
  buttonText: string
}

export const musicContents: Record<string, MusicContent> = {
  edm: {
    title: 'Electronic dance music',
    name: 'EDM',
    content: [
      'EDM is a music genre created using computers',
      'and electronic instruments, characterized by',
      'strong beats and repetitive melodies.',
    ],
    buttonText: 'Enjoy Music',
  },
  jazz: {
    title: 'Classical music',
    name: 'JAZZ',
    content: [
      'Jazz is a music genre rooted in the blues and',
      'ragtime of African Americans, characterized',
      'by improvisation and free expression',
    ],
    buttonText: 'Enjoy Music',
  },
  techno: {
    title: 'Electronic musical Instrument',
    name: 'TECHNO',
    content: [
      'Techno is an electronic music genre characterized',
      'by repetitive rhythms, strong beats, and futuristic',
      'sounds, originating in Detroit, USA, in the early 1980s.',
    ],
    buttonText: 'Enjoy Music',
  },
}
