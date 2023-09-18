import React from 'react'
import styled from 'styled-components';

const Detail = () => {
  return (
    <Container>
      <Background>
        <img src='/images/bao-img1.jpg' />
      </Background>
      <Imagetitle>
        <img src='/images/Bao_logo.png' />
      </Imagetitle>
      <Control>
        <PlayButton>
          <img src='/images/play-icon-black.png' />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src='/images/play-icon-white.png' />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src='/images/group-icon.png' />
        </GroupWatchButton>
      </Control>
      <SubTitle>
        2018 7m Family, Fantasy, Kids, Animation
      </SubTitle>
      <Dricption>
      Domee Shi explains that her inspiration for her animated short film, “Bao,” came from three areas, but the biggest was her parents. In our recent chat (watch the video above), she reveals that it came from “my own life growing up as an only child to my super Chinese
      </Dricption>
    </Container>
  )
}

export default Detail

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const Imagetitle = styled.div`
height: 30vh;
width:35vw;
min-height: 170px;
min-width:200px;
margin-top: 60px;

img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
`

const Control = styled.div`
display: flex;
align-items: center;
`

const PlayButton = styled.button`
border-radius: 4px;
font-size: 15px;
padding: 0px 24px;
margin-right: 22px;
display: flex;
align-items: center;
height: 56px;
background: rgb(249, 249, 249);
border: none;
letter-spacing: 1.8px;
cursor: pointer;

&:hover {
  background: rgb(198, 198, 198)
}
`
const TrailerButton = styled(PlayButton)`
background: rgb(0, 0, 0, 0.3);
border: 1px solid rgb(249, 249, 249);
color: rgb(249, 249, 249)
`
const AddButton = styled.button`
margin-right: 16px;
width: 44px;
height: 44px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
border: 2px solid white;
background-color: rgba(0, 0, 0, 0.6);
cursor: pointer;
span {
  font-size: 30px;
  color: white;
}
`
const GroupWatchButton = styled(AddButton)`
background: rgb(0, 0, 0);
`
const SubTitle = styled.div`
color: rgb(249, 249, 249);
font-size: 15px;
min-height: 20px;
margin-top: 26px;

`
const Dricption = styled.div`
// line-height: 2px;
font-size: 20px;
margin-top: 16px;
color: rgb(249, 249, 249);
max-width: 760px;
`