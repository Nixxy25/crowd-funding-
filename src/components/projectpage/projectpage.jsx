import  { useContext, useState} from 'react'
import { UserContext } from '../../context/user-context';
import './projectpage.css';

const ProjectPage = () => {
    const {
        currentReward, isChecked, 
        toggleCheck, closePopup, 
        openThankyou,updateText,
       count,
        updateCount,
        setError,
        clearError,
        clearText,
        formError,
        userText,
        setUserText,
        updateFunds,
        setTextForm,
        textForm,
        addNumber,
        updateBackers,
        
    } = useContext(UserContext);
    
   
    const displayedText = '25';
    const handleButtonClick = () => {
     
        const number = parseFloat(textForm);
       
        if(Number(textForm) > displayedText) {
            addNumber(number)
            updateBackers();
            updateText('')
            openThankyou();
            updateCount();
            toggleCheck();
            clearText();
        }else{
            setError("error");
        }
    };

   

    const handleChange = (event) => {
        
        // const onlyNumbers = value.replace(/[^0-9]/g, '');
        // updateText(event.target.value);
        setTextForm({
            ...textForm,
            [event.target.name]: event.target.value,
        });
        // console.log(value)
        // clearError();

    }
    

    const handleClose = () => {
        closePopup();
    }

    const handleCheck = () => {
        toggleCheck();
    }
  return (
    <div>
    {
        currentReward && (
            <div className= "pop-up-container">
    <div className='popup-body'>    
    <div className='pop-up'>
        <div className='project-heading-container'>
            <div className='project-heading'>
                <div>Back this project</div>
                <div onClick={handleClose}>
                    <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z"/><path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z"/></g></svg>
                </div>
            </div>
            <div className='project-heading-text'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</div>
        </div>

        <div className='project-box'>
            <div className='project-container'>
            <div className='project-check-container'>
                <div className='project-check-one'>
                    <div className='radio-btn'>
                        <input type='radio' checked={isChecked} onClick={handleCheck}></input>
                    </div>
                    
                    <span>Pledge with no reward  </span>
                </div>

                <div>
                    Choose to support without a reward if you simply believe in our project.As a 
                    backer,you will be signed up to recieve product updates via email.
                </div>

                <div>
                {isChecked && (
                    <div className='project-span-input'>
                        <div>Enter your pledge </div>

                        <div className='input'>
                            <div className='input-page'>
                                <input className="user-input"
                                id='field1'
                                type='text' 
                                onChange={handleChange}
                                value={textForm.field1}
                                name="field1"
                                
                                ></input>

                            </div>
                            
                            
                            <div className='input-button'>
                                <button type='button' onClick={handleButtonClick}>Price</button>
                            </div>
                            
                        </div>
                    </div>
                    
                    )
                }
                
            </div>
            </div>
  
            </div>

            <div className='project-container'>
            <div className='project-check-box'>

                <div>
                <div className='project-check-container'>
                    <div className='project-check'>
                        <div className='check'>

                            <div className='radio-btn'>
                                <input type='radio'  checked={isChecked} onClick={handleCheck}></input>
                                <div>Bamboo Stand</div>
                            </div> 
                
                            <div>Plede 25 or more</div>
                        </div>

                        <div className='project-count'>{count} <span>left</span></div>
                    </div> 
                    
                    <div>You get an ergonomic stand made of natural bamboo. 
                    You've helped us launch our promotional campaign,
                    and you'll be added to a special Backer member list.
                    </div>
                </div>


                <div>
                    {isChecked && (
                        <div className='project-span-input'>
                            <div>Enter your pledge</div>

                            <div className='input'>
                                <div className='input-page'>
                                    <input className={`user-input ${formError ? "red" : "white"}`}
                                    type='text' 
                                    onChange={handleChange}
                                    value={textForm.field2}
                                    name="field2"
                                    ></input>

                                </div>
                                
                                
                                <div className='input-button'>
                                    <button type='button' onClick={handleButtonClick}>Price</button>
                                </div>
                                
                            </div>
                        </div>
                        
                        )
                    }
                    
                </div>
                </div>
            </div>

    
        </div>
        

        <div className='project-container'>
        <div className='project-check-box'>

            <div>
            <div className='project-check-container'>
                <div className='project-check'>
                    <div className='check'>

                        <div className='radio-btn'>
                            <input type='radio'  checked={isChecked} onClick={handleCheck}></input>
                            <div>Black Edition Stand</div>
                        </div> 
            
                        <div>Plede $75 or more</div>
                    </div>

                    <div className='project-count'>{count} <span>left</span></div>
                </div> 
                
                <div>You get an ergonomic stand made of natural bamboo. 
                You've helped us launch our promotional campaign,
                and you'll be added to a special Backer member list.
                </div>
            </div>


            <div>
                {isChecked && (
                    <div className='project-span-input'>
                        <div>Enter your pledge</div>

                        <div className='input'>
                            <div className='input-page'>
                                <input className={`user-input ${formError ? "red" : "white"}`}
                                type='text' 
                                onChange={handleChange}
                                value={textForm.field3}
                                name="field3"
                                ></input>

                            </div>
                            
                            
                            <div className='input-button'>
                                <button type='button' onClick={handleButtonClick}>Price</button>
                            </div>
                            
                        </div>
                    </div>
                    
                    )
                }
                
            </div>
            </div>
        </div>


    </div>
    

    <div className='project-container'>
    <div className='project-check-box'>

 
        <div className='project-check-container'>
            <div className='project-check'>
                <div className='check'>

                    <div className='radio-btn'>
                        <input type='radio'  checked={isChecked} onClick={handleCheck}></input>
                        <div>Mahogany Special Editon</div>
                    </div> 
        
                    <div>Plede $200 or more</div>
                </div>

                <div className='project-count'>{count} <span>left</span></div>
            </div> 
            
            <div>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be 
              added to Our Backer member list. Shipping is included.
            </div>
        </div>


        <div>
            {isChecked && (
                <div className='project-span-input'>
                    <div>Enter your pledge</div>

                    <div className='input'>
                        <div className='input-page'>
                            <input className={`user-input ${formError ? "red" : "white"}`}
                            type='text' 
                            onChange={handleChange}
                            value={textForm.field4}
                            name="field4"
                            ></input>

                        </div>
                        
                        
                        <div className='input-button'>
                            <button type='button' onClick={handleButtonClick}>Price</button>
                        </div>
                        
                    </div>
                </div>
                
                )
            }
            
        </div>
        </div>
    </div>


</div>





         
        </div>
        </div>
        </div>
        )
    }
    
    </div>
  )
}

export default ProjectPage;


