import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServicesDetails from '../ServicesDetails/ServicesDetails';

const Services = () => {
    const servicesData=[
        {
            name:'Fluoride Treatment',
            pic:fluoride,
            description:'Fluoride is a natural mineral that builds strong teeth and prevents cavities. It’s been an essential oral health treatment for decades. Fluoride supports healthy tooth enamel and fights the bacteria that harm teeth and gums. '
        },
        {
            name:'Cavity Felling',
            pic:cavity,
            description:'Dental caries (tooth decay) is one of the most common diseases, with approximately 80% of the population in developed countries having experienced the condition. If decay has not been prevented cavities develop. '
        },
        {
            name:'Teath Whitening',
            pic:whitening,
            description:'Tooth whitening can be a very effective way of lightening the natural colour of your teeth without removing any of the tooth surface. It cannot make a complete colour change, but it may lighten the existing shade.'
        }
    ]
    return (
        <section className='services-container pt-5 mt-5'>
            <div className='text-center'>
                <h4 style={{color:'#1CC7C1',fontWeight:'700'}}>OUR SERVICES</h4>
                <h2 style={{fontWeight:'700',color:'#3A4256',marginTop:'15px'}}>Services With Provide</h2>
            </div>
            <div className='d-flex justify-content-center'>
            <div className='row w-75 mt-5 p-2'>
                {
                    servicesData.map(service=><ServicesDetails service={service}></ServicesDetails>)
                }
            </div>
            </div>
            
        </section>
    );
};

export default Services;