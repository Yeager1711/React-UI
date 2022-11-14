import React from "react";
import '../ControlDowload/CtrlDowload.scss';
import '../images/AppStore.png'
function CtrlDowload() {
    return(
       React.createElement('section', {className: "CtrlDowload"},

            React.createElement('div', {className: 'heading'}, 'Dowload The Best Music',
                React.createElement('span', null, 'App Now!')
            ),
            
            React.createElement('p', {className: 'text-title'}, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quibusdam magni error, aut enim rerum?'),
        
            React.createElement('div', {className: 'images-Ctrl'},
                React.createElement('img', {src:  require('../images/AppStore.png')}),
                React.createElement('img', {src:  require('../images/GooglePlay.png')}),
            )
        )
    )
}

export default CtrlDowload