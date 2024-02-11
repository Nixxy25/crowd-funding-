import { useState } from 'react';
import {image1} from "../../assets/image-hero-desktop.jpg"
import {image} from "../../assets/image-hero-mobile.jpg"
import './headerpage.css';

const HeaderPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    return(
        <div className='crowdfund-container'>


        <div className='crowdfund-nav'>
            <div className='crowdfund'>crowdFund</div>
                <div className='desktop-view'>
                    <p>About</p>
                    <p>Discover</p>
                    <p>Get Started</p>
                </div>
                

                {/*Mobile dropdown*/}
                <div className='md:hidden mobile-drop'>
                    <button onClick={handleClick}>
                        
                            {isOpen ? <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" fill="#000" fill-rule="evenodd" opacity=".4"/></svg> 
                            :   <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"/></g></svg>
                        }
                    </button>

                    

                    <div className={`mobile ${isOpen ? "block" : "hidden"}`}>
                        <p>About</p>
                        <p>Discover</p>
                        <p>Get Started</p>
                    </div>
                </div>

            </div>
        </div>

        
    )
}

export default HeaderPage;