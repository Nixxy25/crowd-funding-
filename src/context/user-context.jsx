import  { useState, createContext } from "react";

export const UserContext = createContext({
   loading: false,
   updateLoading: () => {},
   bookmark: false,
   setBookmarked: () => {},
   setError: () => {},
   clearError: () => {},
   clearText: () => {},
   bookmarkedText: "hello",
   changeText: () => {},
   fundsNumber: "89,914",
   updateFunds: () => {},
});

export const UserProvider = ({children}) => {
    const [currentReward, setCurrentReward] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [thankyou, setThankyou] = useState(false);
    const [textform, setTextForm] = useState("");
    const [formError, setFormError] = useState("");
    const [count, setCount] = useState(64);
    const [loading, setLoading] = useState(false);
    const [bookmark, setBookmark] = useState(false);
    const [fundsNumber, setFundsNumber] = useState("89914");
    const [bookmarkedText, setBookmarkedText] = useState('Bookmark')

    const changeText = () =>{
        if (bookmarkedText === "Bookmark"){
            setBookmarkedText("Bookmarked");
            } else{
            setBookmarkedText("Bookmark");
        }
    }

    
    const setBookmarked = () => {
        setBookmark((prevBook) => !prevBook);
    }
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



    const updateText = (userText, value) => {
        setTextForm({...textform, [userText]: value});
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
        bookmark,
        setBookmarked,
        changeText,
        bookmarkedText,
        fundsNumber,
        setFundsNumber,

    }
    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}
