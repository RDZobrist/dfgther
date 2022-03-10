import styled from 'styled-components';

export const LandingPageMainContainer = styled.div`
margin: 20px
`;

export const LandingPageImageLogoContainer = styled.div`
margin-top: 12.5%;
`;

export const Typography = styled.p`
color: #ffffff;
font-size: 36px
`;

export const CustomButtonContainer = styled.div`
padding: 20px;
`;

export const UserInputContaier = styled.div`
max-width: 50%;
margin-left: 50%;
margin-top: 12.5%;
margin-right: 40px;
`;

export const LogosContainer = styled.div`
padding: 20px;
`;

export const MicroPetsLogo = styled.img`
background-image: ${({ imageUrl }) => `url(${imageUrl})`};
width: 50%;
margin: 10px;
`;

export const CelestisLogo = styled.div`
background-image: ${({ imageUrl }) => `url(${imageUrl})`};
width: 50%;
margin: 10px;
`;

export const GraphicText = styled.div`
background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;
export const GraphicTextContainer = styled.div`
width: 100%;
`;
