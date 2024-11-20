import video_edm from '../assets/videos/video_edm.mp4'
import video_techno from '../assets/videos/video_techno.mp4'
import video_jazz from '../assets/videos/video_jazz.mp4'

interface MusicVideos {
  title: string
  video: string
}

export const musicVideos: Record<string, MusicVideos> = {
  EDM: {
    title: 'EDM',
    video: video_edm,
  },
  TECHNO: {
    title: 'TECHNO',
    video: video_techno,
  },
  JAZZ: {
    title: 'JAZZ',
    video: video_jazz,
  },
}
