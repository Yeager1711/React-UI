import React from "react";
import '../Feature/Feature.scss';

function FeatureItems({
    headding,
    headding_span,

    // box-container
    // box 1
    img_box1,
    title,
    decs,    
    link,

    // box 2
    img_box2,
    title2,
    decs2,

    // box 3
    img_box3,
    title3,
    decs3,
}){
    return (
        React.createElement('section', {className: 'feature'}, 
        
            // Headding
            React.createElement('div', {className:'heading'}, headding,
                React.createElement('span',null, headding_span)
            ),

            // box-container
            React.createElement('div', {className:'box-container'},
                React.createElement('div', {className: 'box'}, 
                    React.createElement('img', {src: img_box1}),
                    React.createElement('div', {className:'content'},
                        React.createElement('h3',null, title),
                        React.createElement('p', null, decs),
                        React.createElement('a', {href:'#link-feature', className:'link-feature'}, link),
                    )
                ),

                React.createElement('div', {className: 'box'}, 
                    React.createElement('img', {src: img_box2}),
                    React.createElement('div', {className:'content'},
                        React.createElement('h3',null, title2),
                        React.createElement('p', null, decs2),
                        React.createElement('a', {href:'#link-feature', className:'link-feature'}, link),
                    )
                ),

                React.createElement('div', {className: 'box'}, 
                    React.createElement('img', {src: img_box3}),
                    React.createElement('div', {className:'content'},
                        React.createElement('h3',null, title3),
                        React.createElement('p', null, decs3),
                        React.createElement('a', {href:'#link-feature', className:'link-feature'}, link),
                    )
                ),
            )
        )
    )
}

function Feature() {
    return (
        <FeatureItems 
            headding = 'An amazing app can change your daily life '
            headding_span = 'Music Experience'

            // box-container
            // box 1
            img_box1 = {require('../images/musicicon.png')}
            title = 'For live Music'
            decs = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!'
            link = 'Learn more'

            // box 2
            img_box2 = {require('../images/musicicon2.png')}
            title2 = 'For Daily Music'
            decs2 = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!'
            
            // box 3
            img_box3 = {require('../images/musicicon3.png')}
            title3 = 'For artists Music'
            decs3 = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!'
        />
    )
}

export default Feature