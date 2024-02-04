import  { useState, createContext } from "react";
import ProjectPage from "../components/projectpage/projectpage";

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
   addNumber: () => {},
});

export const UserProvider = ({children}) => {
    const [currentReward, setCurrentReward] = useState(false);
    // const [isChecked, setIsChecked] = useState(new Array(projectsPage.length).fill(false));
    const [thankyou, setThankyou] = useState(false);
    const [textForm, setTextForm] = useState({
        field1: '',
        field2: '',
        field3:'',
        field4:'',
    });
    const [formError, setFormError] = useState("");
    const [count, setCount] = useState(64);
    const [loading, setLoading] = useState(false);
    const [bookmark, setBookmark] = useState(false);
    const [fundsNumber, setFundsNumber] = useState(89914);
    const [backers, setBackers] = useState(5007);
    const [bookmarkedText, setBookmarkedText] = useState('Bookmark')

    const changeText = () =>{
        if (bookmarkedText === "Bookmark"){
            setBookmarkedText("Bookmarked");
            } else{
            setBookmarkedText("Bookmark");
        }
    }

    const updateBackers = () => {
        setBackers(prevBackers => prevBackers + 1)
    }

    const addNumber = (number) => {
        setFundsNumber(fundsNumber + number);
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



   

    const clearText = () => {
        setTextForm('');
    }

    // const toggleCheck = () => {
    //     setIsChecked(!isChecked);
    // }
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
        
        openThankyou,
        closeThankyou,
        thankyou,
        textForm,
        setTextForm,
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
     
        addNumber,
        updateBackers,
        backers,

    }
    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}
