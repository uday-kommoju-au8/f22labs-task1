import React from 'react';
import "../Styles/Header.css"
import img from '../Utils/rectangle.jpg'
import img1 from '../Utils/two.jpg'
import imgw from '../Utils/one.jpg'
import brag from '../Utils/brag.png'
import covet from '../Utils/covet.png'
import drager from '../Utils/drager.png'
function Header(){
    return(
        <div>
            <div className='Rectangle'><h1 className='covet'>
                covet
                </h1></div>
            <h1 className="web">Web app for Covet</h1>
            <p className='details'>
                Create custom landing pages with Omega that converts 
                more visitors than any website
            </p>
            <img alt="img" src={img} className="img"></img>
            <h2 className="h2">Client Brief
                <p className='p1'>
                A Senior Data Engineer provides technical and delivery leadership for a team of developers working on data integration and processing projects. This role will work with stakeholders and other developers to design and implement technical data solutions for the business in a way that balances quality, cost, time and maintainability.

                </p>
            </h2>
            <h2 className="h2">Problems
                <p className='p1'>
                A Senior Data Engineer provides technical and delivery leadership for a team of developers working on data integration and processing projects. This role will work with stakeholders and other developers to design and implement technical data solutions for the business in a way that balances quality, cost, time and maintainability.

                </p>
            </h2>
            <div className="container">
                
                <img alt="img"src={img1} className="imgcontainer" ></img>
                    <img alt="img" src={imgw} className="imgcontainer"></img>
                
                   

             
            </div>
            <div>
                <h1>Solutions</h1>
                <p>
                A Senior Data Engineer provides technical and delivery leadership for a team of developers working on data integration and processing projects. This role will work with stakeholders and other developers to design and implement.

                This role will work with stakeholders and other developers to design and implement.

                Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding.

                You might be surprised to know that not only do we run some of the biggest websites in the world; we’re also growing really fast! We have close to 600 staff and contractors worldwide, adding more than 100 people to the business, which grows year on year, since 2017.
                </p>
            </div>

            <div>
                <h1>Learnings</h1>
                <p>
                You might be surprised to know that not only do we run some of the biggest websites in the world; we’re also growing really fast! We have close to 600 staff and contractors worldwide, adding more than 100 people to the business, which grows year on year, since 2017.
                </p>
            </div>
            <button className="BG"> Check live website</button>


            <div>
                <h1> More Case studies</h1>
            </div>
            <div className="main">
                <div className="main_one">
                <img alt="img" src={brag}>
                </img>
                <div>
                    <h3>
                        Brag Mobile App

                    </h3>
                    <p>
                    Throwing consider dwelling bachelor joy her proposal laughter. Raptures returned disposed one entirely her men ham. 
                    </p>

                </div>
                </div>
                <div className="main_two">
                <img alt="img" src={covet}>
                </img>
                <div>
                <h3>
                    Web App for covet

</h3>
<p>
Throwing consider dwelling bachelor joy her proposal laughter. Raptures returned disposed one entirely her men ham. 
</p>

                </div>
                </div>
                <div className="main_three">
                <img  alt="img" src={drager}/>
                
                <div>
                <h3>
                    Office Solution for Drager

</h3>
<p>
Throwing consider dwelling bachelor joy her proposal laughter. Raptures returned disposed one entirely her men ham. 
</p>

                </div>
                </div>
                
            </div>
        </div>

    )
}

export default Header;