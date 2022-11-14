import React from "react";
import './Home.scss'
function Home() {
    return(
        React.createElement('section',
            {
                className: 'Home'
            },
       
        // box-container
            React.createElement('div',{className: 'box-container'}, 
            
                React.createElement('div', {className:'box-title'}, 
                    React.createElement('h2', null, 'Experience ', 
                        React.createElement('span', null,'The Best Quality Music')),
                    React.createElement('p', {className:'text-title'}, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus atque fuga delectus numquam consequatur velit autem distinctio possimus culpa!'), 
                
                
                    React.createElement('div', {className:'Dowload-store'}, 
                        
                        React.createElement('p', null, ' Dowload now on IOS and Android'),
                    
                        React.createElement('div', {className:'img-Dowload'},
                            React.createElement('img', {src: (require('../images/AppStore.png'))}),
                            React.createElement('img', {src: (require('../images/GooglePlay.png'))})
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

export default Home