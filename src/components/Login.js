import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <Container>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" />
            <Signup>GET ALL THERE</Signup>
            <Description>
            Join Times Prime at ₹899 & watch Disney+ Hotstar with 15+ other premium subscriptions. Many more benefits from your favourite brands. Use coupon: Discount25 and get 25% off. 3 Months Discovery+ 100 GB of Google One. 6 Months SonyLIV. 1 Year of TOI+.
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>

    </Container>
  )
}

export default Login

const Container = styled.div`
position: relative;
height: calc(100vh - 70px);
display: flex;
align-items: top;
justify-content: center;


&:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(/images/login-background.jpg);
    content:"";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.7;
  }
`
const CTA = styled.div`
max-width: 650px;
padding: 80px 40px;
width: 90%;
display: flex;
flex-direction: column;
`
const CTALogoOne = styled.img`

`
const Signup = styled.a`
width: 100%;
background-color: #0063e5;
font-weight: bold;
padding: 17px 0px;
color: #f9f9f9;
border-radius: 4px;
text-align: center;
cursor:pointer;
font-size: 18px;
transition: all 250ms;
letter-spacing: 1.5px;
margin-top: 8px;
margin-bottom: 12px;

&:hover {
    background: #0483ee;
}
`
const Description = styled.p`
font-size: 11px;
letter-spacing: 1.5px;
text-align: center;
`
const CTALogoTwo = styled.img`

`