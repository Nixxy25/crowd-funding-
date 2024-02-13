import  { useContext, useState} from 'react'
import { UserContext } from '../../context/user-context';
import './projectpage.css';

const ProjectPage = () => {
    const {
        currentReward, 
        toggleCheck, closePopup, 
        openThankyou,updateText,
       count,
       setCount,
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
        fundsNumber,
        thankyou,
        setFundsNumber,
        updateBackers,
        
    } = useContext(UserContext);
    
   
 


    const [data, setData] = useState(
        [
            {
                id: 1,
                title: "Pledge with no reward",
                details:"Choose to support without a reward if you simply believe in our project.As a backer,you will be signed up to recieve product updates via email.",
            },
    
            {
                id: 2,
                title:"Plede 25 or more",
                name:"Bamboo Stand",
                price: 25,
                count:"101 left",
                details:" You get an ergonomic stand made of natural bamboo.You've helped us launch our promotional campaign,and you'll be added to a special Backer member list.",
            },
    
            {
                id: 3,
                title:"Plede $75 or more",
                name:"Black Edition Stand",
                price:75,
                count:"64 left",
                details:"You get an ergonomic stand made of natural bamboo.You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
            },
    
            {
                id:4,
                title:"Plede $200 or more",
                name:"Mahogany Special Edition",
                price:200,
                count:"0",
                details:"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to Our Backer member list. Shipping is included.",
            },
        ]
    )
    

   
    const [isChecked, setIsChecked] = useState(new Array(data.length).fill(false));
    const [formField, setFormField] = useState(
        data.map((item) => ({
            ...item,
            formFieldValue:"",
        }))
    )
    const [isLoading, setIsLoading] = useState(false);
    
  
    const handleInputChange = (index, newValue)=> {
        setFormField((prevState) => {
            const updatedForm = [...prevState];
            updatedForm[index].formFieldValue = newValue;
            return updatedForm
        })
    }

    const clearField = () => {
        setFormField(
            data.map((item) => ({
                ...item,
                formFieldValue: "",
            }))
        )
    }
   
    const unCheck= () => {
        setIsChecked(
            new Array(data.length).fill(false)
        );
    }

    const handleButtonClick = (index) => {  
      
        const number = parseFloat(formField);   
        const {formFieldValue} = formField[index];
        if(index === 0 && formFieldValue > 0){
            setIsLoading(true);
            setTimeout(() => {
                openThankyou();
                clearField();
                unCheck();
                setIsLoading(false);
               }, 4000);
            setFundsNumber(prevState => prevState + parseInt(formField[index].formFieldValue))
            updateBackers();
            
            setCount((prevState) => {
                const updatedCounts = [...prevState];
                updatedCounts[index] = Math.max(0, prevState[index] - 1)
                return updatedCounts;
            })
                
            
            
            
            
           
        } else if(index === 1 && formFieldValue > 25){
            setFundsNumber(prevState => prevState + parseInt(formField[index].formFieldValue))
            setIsLoading(true);
            setTimeout(() => {
                openThankyou();
                clearField();
                unCheck();
                setIsLoading(false);
               }, 4000);
           
            setCount((prevState) => {
                const updatedCounts = [...prevState];
                updatedCounts[index] = Math.max(0, prevState[index] - 1)
                return updatedCounts;
            })
            
         
        }else if(index === 2 && formFieldValue > 75){
            setIsLoading(true);
            setTimeout(() => {
                openThankyou();
                clearField();
                unCheck();
                setIsLoading(false);
               }, 4000);
            setFundsNumber(prevState => prevState + parseInt(formField[index].formFieldValue))
            updateBackers();
            openThankyou();
            setCount((prevState) => {
                const updatedCounts = [...prevState];
                updatedCounts[index] = Math.max(0, prevState[index] - 1)
                return updatedCounts;
            })
          
            // updateCount();
            clearField();
            unCheck();
        }else if(index === 3 && formFieldValue > 200){
            setFundsNumber(prevState => prevState + parseInt(formField[index].formFieldValue))
            setIsLoading(true);
            setTimeout(() => {
                openThankyou();
                clearField();
                unCheck();
                setIsLoading(false);
               }, 4000);
            setCount((prevState) => {
                const updatedCounts = [...prevState];
                updatedCounts[index] = Math.max(0, prevState[index] - 1)
                return updatedCounts;
            })
            
        }else{
           setError('error')
        }
      
    
    };

    

    const handleClose = () => {
        closePopup();
    }

    const handleCheck = (position) => {
        const updateIsChecked = isChecked.map((item, index) =>
        index === position ? true : false);

        setIsChecked(updateIsChecked);
    }

   
    return (
        <div>
            {
                currentReward && (
                    <div className='pop-up-container'>
                        <div className='popup-body'>
                            <div className='pop-up'>
                            <div className='project-heading-container'>
                                      <div className='project-heading'>
                                          <div className='project-heading-name'>Back this project</div>
                                          <div onClick={handleClose}>
                                              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="blackr" fill-rule="evenodd"><path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z"/><path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z"/></g></svg>
                                          </div>
                                     </div>
                                      <div className='project-heading-text'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</div>
                                  </div>
                                
                                {
                                    data.map((project, index) => {
                                        return(
                                            <div className={`projects ${isChecked[index] ? "reds" : ""}`}>
                                            <div className='project-check-container' key={index}>
                                                <div className='project-check'>
                                                    <div className='check'>

                                                        <div className='radio-btn'>

                                                        <input 
                                                        type='radio'
                                                        id={`radio-check-${index}`}
                                                        name={project.title}
                                                        value={project.title}
                                                        checked={isChecked[index]}
                                                        onChange={() => handleCheck(index)}
                                                        ></input>

                                                        </div>
                                                        <div className='mobile-page'>
                                                            <div className='project-name'>{project.name}</div>
                                                        
                                                            <div className='project-title'>{project.title}</div>
                                                        </div>
                                                        
                                                    </div>

                                                    <div className='project-count'>{project.count}</div>
                                                </div>

                                                <div className='project-details'>
                                                    {project.details}
                                                </div>
                                            </div>
                                                {isChecked[index] && (
                                                        <div className='project-span-input'>
                                                            <div className='pledge'>Enter your pledge</div>
    
                                                        <div className='input'>
                                                            <div className='input-page'>
                                                                <input className={`user-input ${formError ? "red" : "black"}`}
                                                                type='text'
                                                                value={formField[index].formFieldValue}
                                                                placeholder='$'
                                                                onChange={(event) => handleInputChange(index, event.target.value)}
                                                                ></input>
                                                            </div>
                            
                                                            <div className='input-button-container'>
                                                                <div className='input-button'>
                                                                    <button onClick={() =>handleButtonClick(index)}>Continue</button>
                                                                </div>

                                                                <div>
                                                                    {isLoading  ? 
                                                                        
                                                                    <svg className='spin' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"/></svg>
                                                                    : ""}
                                                                </div>


                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                
                                                                                                                                 
                                                            </div>
                                                        </div>
                                                    </div>
                                                    )
                                                }
                                               
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                )
            }
        
        </div>
//     <div>
//     {
//         currentReward && (
//             <div className= "pop-up-container">
//     <div className='popup-body'>    
//     <div className='pop-up'>
//         <div className='project-heading-container'>
//             <div className='project-heading'>
//                 <div>Back this project</div>
//                 <div onClick={handleClose}>
//                     <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="blackr" fill-rule="evenodd"><path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z"/><path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z"/></g></svg>
//                 </div>
//             </div>
//             <div className='project-heading-text'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</div>
//         </div>

//         <div className='project-box'>
//             <div className='project-container'>
//             <div className='project-check-container'>
//                 <div className='project-check-one'>
//                     <div className='radio-btn'>
//                         <input 
//                         type='radio' 
//                         id="radio1"
//                         name="check"
//                         value="radio1"
//                         checked={isChecked === "radio1"} 
//                         onChange={() => toggleCheck('radio1')}></input>
//                     </div>
                    
//                     <span>Pledge with no reward  </span>
//                 </div>

//                 <div>
//                     Choose to support without a reward if you simply believe in our project.As a 
//                     backer,you will be signed up to recieve product updates via email.
//                 </div>

//                 <div>
//                 {isChecked === "radio1" && (
//                     <div className='project-span-input'>
//                         <div>Enter your pledge </div>

//                         <div className='input'>
//                             <div className='input-page'>
//                                 <input className="user-input"
//                                 // id='field1'
//                                 id="field1"
//                                 type='text' 
//                                 onChange={handleChange}
//                                 value={textForm.field1}
//                                 name="field1">
//                                 </input>
//                             </div>
                            
                            
//                             <div className='input-button'>
//                                 <button type='button' onClick={() => handleButtonClick('field1')}>Price</button>
//                             </div>
                            
//                         </div>
//                     </div>
//                     )
//                 }   
//             </div>
//             </div>
  
//             </div>

//             <div className='project-container'>
//             <div className='project-check-box'>

//                 <div>
//                 <div className='project-check-container'>
//                     <div className='project-check'>
//                         <div className='check'>

//                             <div className='radio-btn'>
//                                 <input type='radio'
//                                 id='radio2'
//                                 name='check'
//                                 value='radio2'  
//                                 checked={isChecked === "radio2"} 
//                                 onChange={() => toggleCheck('radio2')}></input>
//                                 <div>Bamboo Stand</div>
//                             </div> 
                
//                             <div>Plede 25 or more</div>
//                         </div>

//                         <div className='project-count'>{count} <span>left</span></div>
//                     </div> 
                    
//                     <div>You get an ergonomic stand made of natural bamboo. 
//                     You've helped us launch our promotional campaign,
//                     and you'll be added to a special Backer member list.
//                     </div>
//                 </div>


//                 <div>
//                     {isChecked === "radio2" && (
//                         <div className='project-span-input'>
//                             <div>Enter your pledge</div>

//                             <div className='input'>
//                                 <div className='input-page'>
//                                     <input className={`user-input ${formError ? "red" : "white"}`}
//                                     type='text' 
//                                     onChange={handleChange}
//                                     value={textForm.field2}
//                                     name="field2"
//                                     id='field2'
//                                     ></input>

//                                 </div>
                                
                                
//                                 <div className='input-button'>
//                                     <button type='button' onClick={handleButtonClick}>Price</button>
//                                 </div>
                                
//                             </div>
//                         </div>
                        
//                         )
//                     }
                    
//                 </div>
//                 </div>
//             </div>

    
//         </div>
        

//         <div className='project-container'>
//         <div className='project-check-box'>

//             <div>
//             <div className='project-check-container'>
//                 <div className='project-check'>
//                     <div className='check'>

//                         <div className='radio-btn'>
//                             <input 
//                             type='radio'  
//                             name='check'
//                             value='radio3'
//                             id='radio3'
//                             checked={isChecked === "radio3" } 
//                             onChange={() => toggleCheck("radio3")}></input>
//                             <div>Black Edition Stand</div>
//                         </div> 
            
//                         <div>Plede $75 or more</div>
//                     </div>

//                     <div className='project-count'>{count} <span>left</span></div>
//                 </div> 
                
//                 <div>You get an ergonomic stand made of natural bamboo. 
//                 You've helped us launch our promotional campaign,
//                 and you'll be added to a special Backer member list.
//                 </div>
//             </div>


//             <div>
//                 {isChecked === "radio3" && (
//                     <div className='project-span-input'>
//                         <div>Enter your pledge</div>

//                         <div className='input'>
//                             <div className='input-page'>
//                                 <input className={`user-input ${formError ? "red" : "white"}`}
//                                 type='text' 
//                                 onChange={handleChange}
//                                 value={textForm.field3}
//                                 name="field3"
//                                 id='field3'
//                                 ></input>

//                             </div>
                            
                            
//                             <div className='input-button'>
//                                 <button type='button' onClick={handleButtonClick}>Price</button>
//                             </div>
                            
//                         </div>
//                     </div>
                    
//                     )
//                 }
                
//             </div>
//             </div>
//         </div>


//     </div>
    

//     <div className='project-container'>
//     <div className='project-check-box'>

 
//         <div className='project-check-container'>
//             <div className='project-check'>
//                 <div className='check'>

//                     <div className='radio-btn'>
//                         <input 
//                         type='radio'
//                         value='radio4'
//                         name='check'
//                         id='radio4'  
//                         checked={isChecked === "radio4"} 
//                         onChange={() => toggleCheck("radio4")}></input>
//                         <div>Mahogany Special Editon</div>
//                     </div> 
        
//                     <div>Plede $200 or more</div>
//                 </div>

//                 <div className='project-count'>{count} <span>left</span></div>
//             </div> 
            
//             <div>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be 
//               added to Our Backer member list. Shipping is included.
//             </div>
//         </div>


//         <div>
//             {isChecked === "radio4" && (
//                 <div className='project-span-input'>
//                     <div>Enter your pledge</div>

//                     <div className='input'>
//                         <div className='input-page'>
//                             <input className={`user-input ${formError ? "red" : "white"}`}
//                             type='text' 
//                             onChange={handleChange}
//                             value={textForm.field4}
//                             name="field4"
//                             id='field4'
//                             ></input>

//                         </div>
                        
                        
//                         <div className='input-button'>
//                             <button type='button' onClick={handleButtonClick}>Price</button>
//                         </div>
                        
//                     </div>
//                 </div>
                
//                 )
//             }
            
//         </div>
//         </div>
//     </div>


// </div>





         
//         </div>
//         </div>
//         </div>
//         )
//     }
    
//     </div>
    )
}

export default ProjectPage;


