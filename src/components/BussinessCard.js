import React from 'react';
import About from './About';
import Interest from './Interest';
import Name from './Name';
import SocialConnect from './SocialConnect';
import Photo from './Photo';
function formatName(profile){
    return profile.firstName+' '+ profile.lastName;

}
const profile={
    firstName:'Manikandan',
    lastName:'R',
    desigination:'Frontend Developer',
    dummy:'DUMMY',
    email:'hhjgf',
    linkedIn:'vfyjvg'

}
function BussinessCard(props) {
    
    
        return(
            <div className="bussiness-card">
                <div className="profile-photo">
                     <Photo /> 
                </div>
                <div className='profileContent'>
                    <Name name={formatName(profile)}/>
                     <h5>{profile.desigination}</h5>
                    <h5>{profile.dummy}</h5> 
                </div>
                <div className='contact'>
                    <button className='email'>Email</button>
                    <button className='linkedIn'>LinkedIn</button>
                </div>
                <div>
                    <About/>
                    <Interest/>
                </div>
                <div className='socialMedia'>
                    <SocialConnect />
                </div>
            </div>
        )

}
export default BussinessCard;