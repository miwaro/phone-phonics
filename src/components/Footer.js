import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="header-container">
                <div className="about-images">
                    <h3><span className="footer-copyright">&copy; 2020</span></h3>
                    <a  rel="noopener noreferrer" href="https://soundcloud.com/mikerooze" target="_blank" >
                        <img className="soundcloud" src="./img/soundcloud.png"  alt="soundcloud"/>
                    </a>
                    <a rel="noopener noreferrer" href="https://www.presonus.com/products/Studio-One" target="_blank">
                        <img className="studio" src="./img/studioOne.png" alt="soundcloud"/>
                    </a>
                </div>
            </div>
        </footer>
    )
}
