import React from 'react'
import {features, extras} from '../Constants/features'
import '../Styles/feature.css'

export default function Feature() {
  return (
    <div className='feature'>
        <h1>Our <span>Features</span></h1>
        <p>This very extraordinary feature, can make learning activities more efficient</p>

        <div className='feature-head'>
            <div className='feature-head-img'>
                <img src="Images/comp1.png" alt="img" />
                <div id="circle-1"></div>
                <div id="circle-2"></div>
                <div id="circle-3"></div>
                <div id="circle-4"></div>
            </div>
            <div className='feature-head-text'>
                <h1>A <span>user interface</span> designed for the classroom</h1>
                <div>
                    <div><img src="Icons/feature_icon1.svg" alt="-" /></div>
                    <p>Teachers don't get lost in the grid view and have a dedicated Podium space.</p>
                    <div><img src="Icons/feature_icon2.svg" alt="-" /></div>
                    <p>TA's and presenters can be moved to the front of the class.</p>
                    <div><img src="Icons/feature_icon3.svg" alt="-" /></div>
                    <p>Teachers can easily see all students and class data at one time.</p>
                </div>
            </div>
        </div>
        <div className='feature-elements'>
                {
                    features.map(feature =>{
                        if( feature.id & 1 == 1 && window.innerWidth > 767){
                            return (
                                <div key={feature.id}>
                                    <div className='feature-elements-text'>
                                    <h1>
                                        {feature.title.split('<span>')[0]}
                                        <span>
                                            {feature.title.split('<span>')[1]}
                                        </span>
                                        {feature.title.split('<span>')[2]}
                                    </h1>
                                    <p>{feature.description}</p>
                                    </div>
                                    <div>
                                    <img src={feature.image} alt="img" />
                                    </div>
                                </div>
                            )
                        }else{
                            return(
                                <div key={feature.id}>
                                    <div>
                                    <img src={feature.image} alt="img" />
                                    </div>
                                    <div className='feature-elements-text'>
                                    <h1>
                                        {feature.title.split('<span>')[0]}
                                        <span>
                                            {feature.title.split('<span>')[1]}
                                        </span>
                                        {feature.title.split('<span>')[2]}
                                    </h1>
                                    <p>{feature.description}</p>
                                    </div>
                                </div>)
                        }
                    })
                }

            </div>

            <button>See more features</button>
            <div className='feature-elements'>
                {
                    extras.map(feature =>{
                        if( feature.id & 1 == 1 && window.innerWidth > 767){
                            return (
                                <div key={feature.id}>
                                    <div className='extras-img'>
                                    {
                                        feature.images.map(img => (
                                            <img key={img.key} src={img.img} alt="img" id={`extras-${img.key}`} />
                                        ))
                                    }
                                    </div>
                                    <div className='feature-elements-text'>
                                    <span>{feature.subject}</span>
                                    <h1>
                                        {feature.title.split('<span>')[0]}
                                        <span>
                                            {feature.title.split('<span>')[1]}
                                        </span>
                                        {feature.title.split('<span>')[2]}
                                    </h1>
                                    <p>{feature.description.at(0)}</p>
                                    <p>{feature.description.at(1)}</p>
                                    <p>{feature.description.at(2)}</p>
                                    <div><button>{feature.button}</button></div>
                                    </div>
                                </div>
                            )
                        }else{
                            return(
                                <div key={feature.id}>
                                    <div className='feature-elements-text'>
                                    <span>{feature.subject}</span>
                                    <h1>
                                        {feature.title.split('<span>')[0]}
                                        <span>
                                            {feature.title.split('<span>')[1]}
                                        </span>
                                        {feature.title.split('<span>')[2]}
                                    </h1>
                                    <p>{feature.description.at(0)}</p>
                                    <p>{feature.description.at(1)}</p>
                                    <p>{feature.description.at(2)}</p>
                                    <div><button>{feature.button}</button></div>
                                    </div>
                                    <div className='extras-img'>
                                    {
                                        feature.images.map(img => (
                                            <img key={img.key} src={img.img} alt="img" 
                                            id={ feature.images.length == 2 ?`extras-2-${img.key}` : `extras-${img.key}`} />
                                        ))
                                    }
                                    </div>
                                </div>)
                        }
                    })
                }

            </div>


    </div>
  )
}
