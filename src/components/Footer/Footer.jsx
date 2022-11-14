import React from "react";
import '../Footer/Footer.scss';


const FooterItems = [
    {
        name: 'Home',
        icon: 'fa-brands fa-facebook',
    },

    {
        name: 'About',
        icon: "fa-brands fa-twitter"
    },

    {
        name: 'Performer',
        icon: "fa-brands fa-youtube"
    },

    {
        name: 'Contact',
        icon: "fa-brands fa-invision" 
    },

    {
        name: 'Blog',
        icon: "fa-brands fa-instagram"
    },
]

function Footer() {
    return (
       <section className="Footer">
                <div className="navBox">
                    {
                        FooterItems.map((item, index) =>
                            <a key={index}> {item.name}</a>  
                        )
                    }
                </div>

                <div className="icons-contact">
                    {
                        FooterItems.map((item, index) =>
                            <a key={index} class={item?.icon}></a>
                        )
                    }
                </div>
               
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quibusdam magni error, aut enim rerum?</p>
    
       </section>
    )
}

export default Footer