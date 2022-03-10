import React, { useState } from "react";
import CustomButton from "../../components/Custom-button/custom-button.component";

import { LaunchFormContainer } from "./launchForm.styles";


const LaunchForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        console.log('form submitted:');
        console.log('______________');
        console.log(`
        ${firstName}
        ${lastName}
        ${address1}
        ${address2}
        ${city}
        ${state}
        ${zipCode}
        ${email}=
        `)
    }

    const handleFirstNameChange = event => {
        const { value } = event.target;
        setFirstName(value);
    };
    const handleLastNameChange = event => {
        const { value } = event.target;
        setLastName(value);
    };
    const handleAddress1Change = event => {
        const { value } = event.target;
        setAddress1(value)
    };
    const handleAddress2Change = event => {
        const { value } = event.target;
        setAddress2(value);
    };
    const handleCityChange = event => {
        const { value } = event.target;
        setCity(value);
    };
    const handleStateChange = event => {
        const { value } = event.target;
        setState(value);

    };
    const handleZipCodeChange = event => {
        const { value } = event.target;
        setZipCode(value);
    };
    const handleEmailChange = event => {
        const { value } = event.target;
        setEmail(value);
    };



    return (
        <LaunchFormContainer>
            <form onSubmit={handleSubmit}>
                <div><span>First Name</span>
                    <input required type='text' onChange={handleFirstNameChange} label='First name' placeholder="first name" name='firstname' value={firstName} />
                </div>
                <div><span>Last Name</span>
                    <input required type='text' onChange={handleLastNameChange} placeholder='last name' label='Last name' name='lastname' value={lastName} />
                </div>
                <div><span>Address 1</span>
                    <input required type='text' onChange={handleAddress1Change} label='Address 1' name='address1' placeholder="address 1" value={address1} />
                </div>
                <div><span>Address 2</span>
                    <input  type='text' onChange={handleAddress2Change} label='Adress 2' placeholder="address 2" name='address2' value={address2} />
                </div>
                <div><span>City</span>
                    <input required type='text' label='City' onChange={handleCityChange} placeholder='city' name='city' value={city} />
                </div>
                <div><span>State</span>
                    <input required type='text' label='State' onChange={handleStateChange} placeholder='state' name='state' value={state} />
                </div>
                <div><span>Zip Code</span>
                    <input required type='number' label='zipcode' onChange={handleZipCodeChange} placeholder='zip code' name='zipcode' value={zipCode} />
                </div>

                <div><span>Email</span>
                    <input type='email' required label='Email' onChange={handleEmailChange} placeholder='email' value={email} />
                </div>

                <CustomButton type='submit' > UPLOAD PHOTO </CustomButton>
                <CustomButton onSubmit={() => { console.log(firstName, lastName, address1, address2, city, state, zipCode, email) }} type='submit'  > NEXT </CustomButton>
\            </form>
        </LaunchFormContainer>
    )
}

export default LaunchForm;