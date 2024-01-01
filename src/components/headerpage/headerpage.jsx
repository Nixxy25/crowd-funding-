import image from  '../../assets/image-hero-desktop.jpg'
import './headerpage.css';

const HeaderPage = () => {
    return(
        <div style={{
            backgroundImage: `url(${image})`,
            height: '300px',

            backgroundRepeat: 'no repeat',
        
        }}>

        <div className='crowdfund-nav'>
            <div className='crowdfund'>crowdFund</div>

            <div className='crowdfund-list-nav'>
                <p>About</p>
                <p>Discover</p>
                <p>Get Started</p>
            </div>
        </div>
            
        </div>
    )
}

export default HeaderPage;