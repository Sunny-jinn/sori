import React from 'react'
import styled from '@emotion/styled'
import star from '../assets/images/icon_music_star.svg'

interface Card {
  title: string
  img: string
}

interface CardSectionsProps {
  cards: Card[]
}

export const CardSections: React.FC<CardSectionsProps> = ({ cards }) => {
  return (
    <CardSection className='card-section'>
      {cards.map((card, index) => (
        <CardContainer key={index}>
          <CardTitle>{card.title}</CardTitle>
          <CardStar src={star} alt='star' />
          <CardImage src={card.img} alt='card' />
        </CardContainer>
      ))}
    </CardSection>
  )
}

const CardSection = styled.div`
  display: flex;
  margin-top: 125px;
  margin-left: auto;
  width: 30vw;
`
const CardContainer = styled.div`
  transition: transform 0.3s ease;

  & + & {
    margin-left: 20px;
  }

  .card-section:hover & ~ & {
    transform: translateX(60px);
  }
`

const CardTitle = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #cecac9;
  transition: all 0.3s ease;
  display: block;

  .card-section:hover div:first-of-type & {
    color: #fff;
    transform: translateY(-70px);
  }
`

const CardStar = styled.img`
  margin-top: 9px;
  margin-bottom: 25px;
  filter: invert(15%) sepia(3%) saturate(245%) hue-rotate(325deg)
    brightness(91%) contrast(93%);
  transition: all 0.3s ease;

  .card-section:hover div:first-of-type & {
    filter: none;
    transform: translateY(-70px);
  }
`

const CardImage = styled.img`
  max-width: 291px;
  height: 375px;
  transition: transform 0.3s ease;
  transform-origin: left bottom;

  .card-section:hover div:first-of-type & {
    transform: scale(1.2);
  }
`
