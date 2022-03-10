import React from "react";
import { useNavigate } from "react-router-dom";

import CustomButton from "../../components/Custom-button/custom-button.component";
import { 
         LandingPageMainContainer, 
         Typography, 
         UserInputContaier,
         CustomButtonContainer, 
        }
from "./LandingPage.styles";


export const LandingPage = () => {
    let navigate = useNavigate();
    return (
        <LandingPageMainContainer>
            <UserInputContaier>
                <Typography>
                    We are sending photographs and art out of the atmosphere and into space
                    -- and beyond. We'd love to have you join us on this journey into the cosmos. Click
                    the button below to get on board!
                </Typography>
                <CustomButtonContainer>
                    <CustomButton onClick={() => { navigate('/upload-photo-form') }} > UPLOAD PHOTO </CustomButton>
                    <CustomButton onClick={() => { navigate('/launch-form') }} > NEXT </CustomButton>
                </CustomButtonContainer>
            </UserInputContaier>
        </LandingPageMainContainer>
    )
}


