import React from "react";
import '../Footer/Footer.scss';


const FooterItems = [
    {
        name: 'Home',
        icon: 'fa-brands fa-facebook',
        href: "/facebook"
    },

    {
        name: 'About',
        icon: "fa-brands fa-twitter",
        href: "/twitter"
    },

    {
        name: 'Performer',
        icon: "fa-brands fa-youtube",
        href: "/youtube"
    },

    {
        name: 'Contact',
        icon: "fa-brands fa-invision",
        href: "/invision"
    },

    {
        name: 'Blog',
        icon: "fa-brands fa-instagram",
        href: "/instagram"
        
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
                            <a  key={index} href={item.href} class={item?.icon}></a>
                        )
                    }
                </div>
               
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quibusdam magni error, aut enim rerum?</p>
    
       </section>
    )
}

export default Footer