import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { GridLoader } from 'react-spinners';
import { PhotoUploadFormContainer } from './uploadPhotoForm.styles';

const PhotoUploadForm = () => {
    const [successfulTransaction, setSuccessfulTransaction] = useState(false);
    const navigate = useNavigate();



    return (
        <PhotoUploadFormContainer>
        {successfulTransaction?setSuccessfulTransaction(true):null}
        <h2>PHOTO UPLOAD COMING SOON...</h2>
        <GridLoader size={50} />
        <br/>
        <input type="file" accept="image/*" multiple = "false" />
        <br/>
        <button title='BACK' onClick={()=>{navigate('/')}}>BACK</button>
        </PhotoUploadFormContainer>
    )
};


export default PhotoUploadForm;