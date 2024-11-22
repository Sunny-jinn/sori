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
      <CardWrapper>
        {cards.map((card, index) => (
          <CardContainer key={index}>
            <CardTitle className={index === 0 ? 'first-card' : ''}>
              {card.title}
            </CardTitle>
            <CardStar
              src={star}
              alt='star'
              className={index === 0 ? 'first-card' : ''}
            />
            <CardImage
              src={card.img}
              alt='card'
              className={index === 0 ? 'first-card' : ''}
            />
          </CardContainer>
        ))}
      </CardWrapper>
    </CardSection>
  )
}

const CardSection = styled.div`
  display: flex;
  margin-top: 80px;
  margin-left: auto;
  align-items: end;
  transform: translateX(4vw);
`

const CardWrapper = styled.div`
  display: flex;
  align-items: end;
  gap: 34px;
  margin-left: 150px;
`

const CardContainer = styled.div`
  transition: transform 0.3s ease;
`

const CardTitle = styled.span`
  font-size: 0.625vw;
  font-weight: 500;
  color: #cecac9;
  transition: all 0.3s ease;
  display: block;

  &.first-card {
    color: #fff;
  }
`

const CardStar = styled.img`
  margin-top: 9px;
  margin-bottom: 25px;
  filter: invert(15%) sepia(3%) saturate(245%) hue-rotate(325deg)
    brightness(91%) contrast(93%);
  transition: all 0.3s ease;
  width: 4.541vw;

  &.first-card {
    filter: none;
  }
`

const CardImage = styled.img`
  width: 15.156vw;
  height: 34.72vh;

  &.first-card {
    width: 18.646vw;
    height: 42.2vh;
  }
`
