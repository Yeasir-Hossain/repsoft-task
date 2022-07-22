import React from 'react';

const FeatureCard = ({img,cardtitle,cardtext}) => {
    return (
        <div class="card body-font">
            <figure>
                <img src={img} alt="Shoes" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="text-2xl font-semibold uppercase">{cardtitle}</h2>
                <p>{cardtext}</p>
            </div>
        </div>
    );
};

export default FeatureCard;