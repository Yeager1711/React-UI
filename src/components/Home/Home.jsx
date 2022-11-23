import React from "react";
import './Home.scss'
function HomeItems({
    title,
    title_span,
    desc,
    dwl_title,
    dwl_imgAS,
    dwl_imgGP,
}) {
    return(
        React.createElement('section',
            {
                className: 'Home'
            },
       
        // box-container
            React.createElement('div',{className: 'box-container'}, 
            
                React.createElement('div', {className:'box-title'}, 
                    React.createElement('h2', null,  title, 
                        React.createElement('span', null, title_span)),
                    React.createElement('p', {className:'text-title'}, desc), 
                
                
                    React.createElement('div', {className:'Dowload-store'}, 
                        
                        React.createElement('p', null, dwl_title),
                    
                        React.createElement('div', {className:'img-Dowload'},
                            React.createElement('img', {src: dwl_imgAS}),
                            React.createElement('img', {src: dwl_imgGP})
                        )
                    )
                ),

                React.createElement('div', {className:'image-home'},
                    React.createElement('img', {src: (require('../images/p1.png'))}),
                    React.createElement('div', 
                        {className:'abs-imgHome1'},

                        React.createElement('img',{src: (require('../images/p2.png'))})
                    ),
                )

            )
        )
    )
}

function Home() {
    return(
        <HomeItems 
        title= 'Experience'
        title_span = 'The Best Quality Music'
        desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus atque fuga delectus numquam consequatur velit autem distinctio possimus culpa!'
        
        dwl_title = 'Dowload now on IOS and Android'
        dwl_imgAS = {require('../images/AppStore.png')}
        dwl_imgGP = {require('../images/GooglePlay.png')}


        />
    )
}

export default Home