import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/PopUps/PopBrowse/PopBrowse";
import PopExit from "./components/PopUps/PopExit/PopExit";
import PopNewCard from "./components/PopUps/PopNewCard/PopNewCard";

function App() {
  return (
    <>
      <div className="wrapper">
        {/* pop-up start */}
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        {/* pop-up end */}
        <Header />
        <Main />
      </div>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
