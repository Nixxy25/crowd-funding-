import HeaderPage from "./components/headerpage/headerpage"
import MainPage from "./components/mainpage/mainpage";
import ProjectPage from "./components/projectpage/projectpage";
import ThankYouPage from "./components/thankyoupage/thankyoupage";
import Loadingpage from "./components/loadingpage/loadingpage";
import './App.css';

const App = () => {
    return(
        <div>
            <HeaderPage />
            <MainPage />
            <ProjectPage />
            <ThankYouPage />
            <Loadingpage />
        </div>
    )
}

export default App;