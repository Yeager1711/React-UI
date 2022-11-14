import React from "react";
import '../SearchMusic/SearchMusic.scss'

function SearchMusic() {
    return (
        React.createElement('section', {className:'searchMusic'},
        
            React.createElement('div', {className:'img-banner'},

                // Wrapper Images
                React.createElement('div', {className: 'wrap-img'},
                    React.createElement('img', {src: require('../images/backgraphics.png')}),

                    React.createElement('div', {className:'img-phone'},
                        React.createElement('img', {src: require('../images/d1.png')})
                    ),

                    React.createElement('div', {className:'img-song'},
                        React.createElement('img', {src: require('../images/d4.png')})
                    ),

                    React.createElement('div', {className:'img-listdouble'},
                        React.createElement('img', {src: require('../images/d3.png')})
                    ),

                    React.createElement('div', {className:'img-listmusic'},
                        React.createElement('img', {src: require('../images/d2.png')})
                    )
                ),
            ),
        
            React.createElement('div', {className:'banner-search'},
             // Box search
                React.createElement('div', {className:'wrapper-Boxsearch'},
                    React.createElement('div', {className:'box-search'},
                        <input type="text" placeholder="Enter keyword or URL" />,
                        <i class="fa-solid fa-magnifying-glass"></i> 
                    ),

                    React.createElement('div', {className: 'wrapText'},
                        React.createElement('h3', null, 
                        'Search Music by ',
                        React.createElement('span', null, 'Name or Direct URL'),
                        ),

                        React.createElement('p', null, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus atque fuga delectus numquam consequatur velit autem distinctio possimus culpa.'),

                        React.createElement('img', {src: require('../images/btnSong.png')})
                    )
                )
            )
        )
    )
}

export default SearchMusic