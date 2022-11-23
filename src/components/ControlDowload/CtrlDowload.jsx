import React from "react";
import '../ControlDowload/CtrlDowload.scss';
import '../images/AppStore.png';

function CtrlDowloadItems({
    title,
    title_span,
    desc,
    img_AppStore,
    img_GooglePlay
}) {
    return (
        React.createElement('section', {className: "CtrlDowload"},

            React.createElement('div', {className: 'heading'}, title,
                React.createElement('span', null, title_span)
            ),
            
            React.createElement('p', {className: 'text-title'}, desc),
        
            React.createElement('div', {className: 'images-Ctrl'},
                React.createElement('img', {src: img_AppStore}),
                React.createElement('img', {src:  img_GooglePlay}),
            )
        )
    )
}

function CtrlDowload() {
    return(
        <CtrlDowloadItems 
            title = 'Dowload The Best Music'
            title_span = 'App Now !'
            desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quibusdam magni error, aut enim rerum?'
            img_AppStore = {require('../images/AppStore.png')}
            img_GooglePlay = {require('../images/AppStore.png')}
        />
    )
}

export default CtrlDowload