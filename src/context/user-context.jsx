import  { useState, createContext } from "react";

export const UserContext = createContext({
   loading: false,
   updateLoading: () => {},

   setError: () => {},
   clearError: () => {},
   clearText: () => {},
});

export const UserProvider = ({children}) => {
    const [currentReward, setCurrentReward] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [thankyou, setThankyou] = useState(false);
    const [textform, setTextForm] = useState('');
    const [formError, setFormError] = useState('');
    const [count, setCount] = useState(64);
    const [loading, setLoading] = useState(false);

    const setError = (message) => {
        setFormError(message);
    }

    const clearError = () => {
        setFormError('');
    }
    const updateLoading = () => {
        setLoading();
    }

    const updateCount = () =>{
        setCount((prevCount) => prevCount - 1);
    };



    const updateText = (userText) => {
        setTextForm(userText);
    }

    const clearText = () => {
        setTextForm('');
    }

    const toggleCheck = () => {
        setIsChecked((prevChecked) => !prevChecked);
    }

    const openPopup = () => {
        setCurrentReward(true);
    };

    const closePopup = () => {
        setCurrentReward(false);
    }

    const openThankyou = () =>{
        setCurrentReward(false);
        setTimeout(() => {
            setThankyou(true);
        }, 1000);
      
    }

    const closeThankyou = () => {
        setThankyou(false);
    }

    const value = {
        currentReward,
        closePopup,
        openPopup,
        isChecked,
        toggleCheck, 
        openThankyou,
        closeThankyou,
        thankyou,
        updateText,
        textform,
        formError,
        count,
        updateCount,
        loading,
        updateLoading,
        setError,
        clearError,
        clearText,
    }
    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}
