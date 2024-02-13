import HeaderPage from "./components/headerpage/headerpage"
import MainPage from "./components/mainpage/mainpage";
import ProjectPage from "./components/projectpage/projectpage";
import ThankYouPage from "./components/thankyoupage/thankyoupage";
import './App.css';

const App = () => {
    return(
        <div>
            <HeaderPage />
            <MainPage />
            <ProjectPage />
            <ThankYouPage />
        </div>
    )
}

export default App;