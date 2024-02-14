import './mainpage.css';
import { useContext } from 'react';
import { UserContext } from '../../context/user-context';

const MainPage = () => {
    // const [bookmarkText, setBookmarkText] = useState('Bookmark');
    const {openPopup, count, bookmark, 
        setBookmarked, bookmarkedText, 
        changeText, fundsNumber, backers} = useContext(UserContext);
    

    const handleOpen = () => {
        openPopup();
    }

    const handleBookmark = () => {
        // 
        setBookmarked();
        changeText();
    }

  return (   
    <div className={`container ${handleOpen ? "scroll" : "no-scroll"}`}>
            <div className='main-logo'>
    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#000" cx="28" cy="28" r="28"/><g fill-rule="nonzero"><path d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z" fill="#444"/><path d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z" fill="#FFF"/></g></g></svg>
    </div>

    <div className='main-container'>
        <div className='first-main-container'>  
            <div className='main-context'>
           <div className='main-text1'>Mastercraft Bamboo Monitor Riser</div>
           
           <div className='main-text2'>A beautifully handcrafted monitor stand to reduce neck and eye strain.</div>
        </div>


        <div className='main-button'>
        <div className='btn1'><button  type='button' >Back this project</button></div>
        
        <div className='btn2'>
            <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle className={`${bookmark ? "svg-btn-true" : "svg-btn-false"}`} onClick={handleBookmark} fill="#727473" cx="28" cy="28" r="28"/><path fill="#fff" d="M23 19v18l5-5.058L33 37V19z"/></g></svg> 
        <button className={`${bookmark ? "bookmark-true" : "bookmark-false"}`}  onClick={handleBookmark} type='button'>
            <span className='span-btn2'>{bookmarkedText}</span> 
        </button> </div>

       </div>
       </div>

       <div className='second-main-container'>
        <div className='main-info'>
            <div className='main-info-numbers'>
                <div className='main-numbers'>${fundsNumber} </div>
                <span className='span-info'>of $100,000 backed</span>
            </div>

            <div className='main-info-numbers'>
                <div className='main-numbers'>{backers}</div>
                <span className='span-info'>total backers</span>
            </div>

            <div className='main-info-numbers-diff'>
                <div className='main-numbers'>56</div>
                <span className='span-info'>days left</span>
            </div>
        </div>

        <div class="progress-bar">
            <div class="progress"></div>
        </div>

        </div>

        

        <div className='third-main-container'>
            <div className='main-text'>
                <h3>About this project</h3>
                <p>  The Mastercraft Bamboo Monitor Riser is a sturdy and 
                stylish platform that elevates your screen to a more 
                comfortable viewing heigth. Placing your monitor at eye 
                level has the potential to improve your posture and make 
                you more comfortable while at work, helping 
                you stay focused on the task at hand.</p>
                
                <h4>
                Featuring artisan craftsmanship, the simplicity of design creates extra 
                desk space below your computer to allow notepads, pens, 
                and USB sticks to be stored under the stand.</h4>
            </div>

            <div className='about-details-container'>
                <div className='details-container'>
                    <div className='details'>
                        <h3 className='details-name'>Bamboo Stand</h3>
                        <h3 className='pledge'>Pledge 25$ or more</h3>
                    </div>

                    <div className='details-info'>
                    You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign,
                    and you'll be added to a special Backer member list.
                    </div>

                    <div className='details-price'>
                        <div className='price'>{count[1]} <span>left</span></div>
                        <button onClick={handleOpen} type='button'>Select Reward</button>
                    </div>


                </div>
               
                <div className='details-container'>
                    <div className='details'>
                        <h3 className='details-name'>Black Edition Stand</h3>
                        <h3 className='pledge'>Pledge 75$ or more</h3>
                    </div>

                    <div className='details-info'>
                        You get a Black Special Edition computer stand and a personal thank you. You'll be added 
                        to our Backer member list. Shipping is included.
                    </div>

                    <div className='details-price'>
                        <div className='price'>{count[2]} <span>left</span></div>
                        <button onClick={handleOpen} type='button'>Select Reward</button>
                    </div>
                </div>

                <div className='details-container'>       
                    <div className='details'>
                        <h3 className='details-name'>Mahogany Special Edition</h3>
                        <h3 className='pledge'>Pledge 200$ or more</h3>
                    </div>

                    <div className='details-info'>
                    You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be 
                    added to Our Backer member list. Shipping is included.
                    </div>

                    <div className='details-price'>
                        <div className='price'>{count[3]} <span>left</span></div>
                        <button onClick={handleOpen} type='button'>Select Reward</button>
                    </div>


                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default MainPage;