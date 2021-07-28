import React from 'react'
import {Project} from './Project'

export const Projects = () => {
    return (
        <>
           
           <div className='container'>
        <div class="text-divider"><h3 className='text-center mb-4' id='projectpage' style={{border:"1px solid silver",padding:'15px'}}>Projects</h3></div>
            <div className='row'>
          
        <Project 
        image={`https://res.cloudinary.com/drpwuzvax/image/upload/v1627462275/test/e-shopping_ih1grm.png`}
        title={'E Store'}
        about={'This app contains multiple features like authentication where we can register a user and be able to shop and test dummy payment via paypal sandbox account'}
        skills={'React.js, Redux, Node.js, Express.js, MongoDB '}
        live={`https://e-shoppings.netlify.app/`}
        />
        <br/>
        <Project 
        image={`https://res.cloudinary.com/drpwuzvax/image/upload/v1627462230/test/maxbros_gq7gzw.png`}
        title={'MaxBrothers'}
        about={'This website is used to display movie posters and logo which was created by maxbrother company for marketting purpose. It has authentication with an admin panel.'}
        skills={'React.js, Redux, Node.js, Express.js, MongoDB '}
        live={`https://goofy-kare-2ac447.netlify.app/`}
        />
        <Project 
        image={`https://res.cloudinary.com/drpwuzvax/image/upload/v1627461967/test/github1_nh1mgl.png`}
        title={'Github Clone'}
        about={'In this clone we can display respositories of the entered username and their profile,We can even search users form the search bar in the header .'}
        skills={'Javascript, Boostrap, Github Developer API, Html5, Css3'}
        live={`https://ragul-github.netlify.app`}
        code={`https://github.com/Ragul333/gitclone`}
        />


        <Project
        image={`https://res.cloudinary.com/drpwuzvax/image/upload/v1627462127/test/url_p5g0np.png`}
        title={'URL Shortener'}
        about={'Here we can be able to generate short url in place of a lengthy url . Urls will be saved to database so that we can view anytime the history of short urls.'}
        skills={'React.js, Redux, Node.js, Express.js, MongoDB '}
        live={`https://url-shorteners.netlify.app/`}
        code={`https://github.com/Ragul333/url-backend`}
        />
        <Project
        image={`https://res.cloudinary.com/drpwuzvax/image/upload/v1627466793/test/portfolio_z6onah.png`}
        title={'Ragul Portfolio'}
        about={'This is my portfolio website where i  showcase my skill sets and my finished and ongoing projects. Here i also added my tech stacks which i  use to grind on my daily basis.'}
        skills={'React.js, Bootstrap, Html5, Css3, NPM packages '}
        live={`https://url-shorteners.netlify.app/`}
        />
                </div>
        </div>
       
        </>
    )
}
