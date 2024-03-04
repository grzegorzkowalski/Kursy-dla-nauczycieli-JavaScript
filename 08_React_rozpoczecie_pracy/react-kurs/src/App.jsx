import './App.css'
import Search from "./components/Chapter04/Search";
import LikeBox from "./components/Chapter04/LikeBox";
import Menu from "./components/Chapter04/Menu";
import Hello from "./components/Chapter05/Hello";
import Sum from "./components/Chapter05/Sum";
import menuData from "./data/menuData.js";

function App() {
    return (
    <>
        <Menu data={menuData} />
        <Search />
        <LikeBox />
        <Hello name="Grzegorz" surname="Kowalski" age={38} />
        <Sum numbers={[1,2,3,4]} />
    </>
  )
}

export default App
