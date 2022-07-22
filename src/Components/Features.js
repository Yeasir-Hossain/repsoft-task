import React from 'react';
import signup from '../Assets/signup vct.png'
import sword from '../Assets/sword.png'
import trophee from '../Assets/trophee.png'
import FeatureCard from './FeatureCard';
import './Features.css'

const Features = () => {
    return (
        <div>
            <div class="flex flex-col lg:flex-row w-full mt-11 items-center px-20">
                <FeatureCard img={signup} cardtitle="Sign Up" cardtext="Create your account"></FeatureCard>
                <hr className='div mb-28' />
                <FeatureCard img={sword} cardtitle="Compete" cardtext="Join Tournaments to compete with others"></FeatureCard>
                <hr className='div mb-28' />
                <FeatureCard img={trophee} cardtitle="Win & earn" cardtext="Win and earn in the form of crypto"></FeatureCard>
            </div>
        </div>
    );
};

export default Features;