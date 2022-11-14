import React from "react";
import '../Feature/Feature.scss'

function Feature() {
    return (
        React.createElement('section', {className: 'feature'}, 
        
        // Headding
        React.createElement('div', {className:'heading'}, 'An amazing app can change your daily life ',
            React.createElement('span',null, 'Music Experience')
        ),

        // box-container
        React.createElement('div', {className:'box-container'},
            React.createElement('div', {className: 'box'}, 
                React.createElement('img', {src: require('../images/musicicon.png')}),
                React.createElement('div', {className:'content'},
                    React.createElement('h3',null,'For live Music'),
                    React.createElement('p', null, 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!'),
                    React.createElement('a', {href:'#link-feature', className:'link-feature'}, 'Learn more'),
                )
            ),

            React.createElement('div', {className: 'box'}, 
                React.createElement('img', {src: require('../images/musicicon2.png')}),
                React.createElement('div', {className:'content'},
                    React.createElement('h3',null,'For Daily Music'),
                    React.createElement('p', null, 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!'),
                    React.createElement('a', {href:'#link-feature', className:'link-feature'}, 'Learn more'),
                )
            ),

            React.createElement('div', {className: 'box'}, 
                React.createElement('img', {src: require('../images/musicicon3.png')}),
                React.createElement('div', {className:'content'},
                    React.createElement('h3',null,'For artists Music'),
                    React.createElement('p', null, 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!'),
                    React.createElement('a', {href:'#link-feature', className:'link-feature'}, 'Learn more'),
                )
            ),
        )
        
        
        
        )
    )
}

export default Feature