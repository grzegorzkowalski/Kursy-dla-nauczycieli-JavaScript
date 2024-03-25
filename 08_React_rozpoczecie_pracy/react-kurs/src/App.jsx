import './App.css'
import Search from "./components/Chapter04/Search";
import LikeBox from "./components/Chapter04/LikeBox";
import Menu from "./components/Chapter04/Menu";
//import Hello from "./components/Chapter05/Hello";
import Sum from "./components/Chapter05/Sum";
import menuData from "./data/menuData.js";
import CurrencyConverter from "./components/Chapter05/CurrencyConverter";
import ParentComponent from "./components/Chapter06/ParentComponent";
import ChildComponent from "./components/Chapter06/ChildComponent";
import GrandchildComponent from "./components/Chapter06/GrandchildComponent";
import ShopItem from "./components/Chapter06/ShopItem";
import Box from "./components/Chapter07/Box.jsx";
import HelloWorld from "./components/Chapter07/HelloWorld.jsx";
import StrobeLight from "./components/Chapter07/StrobeLight.jsx";
import Clock from "./components/Chapter07/Clock.jsx";
import Modal from "./components/Chapter07/Modal.jsx";
import Buttons from "./components/Chapter08/Buttons.jsx";
import ShowUserFunc from "./components/Chapter08/ShowUserFunc.jsx";
import ButtonCounter from "./components/Chapter09/ButtonCounter.jsx";
import NumberInfo from "./components/Chapter10/NumberInfo.jsx";
import Hello from "./components/Chapter11/Hello.jsx";
import AddTwoNumbers from "./components/Chapter11/AddTwoNumbers.jsx";
import BookInfo from "./components/Chapter12/BookInfo.jsx";

function App() {
    const numbers = [1,2,5,7,10,16];
    const computer = {
        title: "MacBook Pro",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-24-no-id-blue-selection-hero-202310",
        description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
        price: 9999
    };
    return (
    <>
        {/*<Box />*/}
        {/*<HelloWorld />*/}
        {/*<Clock />*/}
        {/*<Modal heading="Zapisz się do newslettera"/>*/}
        {/*<Buttons />*/}
        {/*<ShowUserFunc name="Grzegorz" surname="Kowalski" />*/}
        {/*<ButtonCounter />*/}
        {/*<NumberInfo number={1} />*/}
        {/*<NumberInfo number={2} />*/}
        {/*<NumberInfo number={5} />*/}
        {/*<NumberInfo number={7} />*/}
        {/*<NumberInfo number={10} />*/}
        {/*<NumberInfo number={16} />*/}
        {/*{*/}
        {/*    numbers.map(el => <NumberInfo key={el} number={el} />)*/}
        {/*}*/}
        {/*<Hello />*/}
        {/*<AddTwoNumbers />*/}
        <BookInfo isbn="0747532699" />

        {/*<StrobeLight color="yellow" frequency={500} />*/}
        {/*<StrobeLight color="deeppink" frequency={200} />*/}
        {/*<StrobeLight color="silver" frequency={50} />*/}
        {/*<Menu data={menuData} />*/}
        {/*<Search />*/}
        {/*<LikeBox />*/}
        {/*<Hello name="Grzegorz" surname="Kowalski" age={38} />*/}
        {/*<Sum numbers={[1,2,3,4]} />*/}
        {/*<CurrencyConverter from="EUR" to="USD" value={200} rate={1.12275} />*/}
        {/*<CurrencyConverter from="EUR" to="PLN" value={200} rate={4.5} />*/}
        {/*<CurrencyConverter from="EUR" to="KWD" value={200} rate={0.34} />*/}
        {/*<ParentComponent>*/}
        {/*    <ChildComponent>*/}
        {/*        <GrandchildComponent>*/}
        {/*            <h4>Tutaj koniec</h4>*/}
        {/*        </GrandchildComponent>*/}
        {/*    </ChildComponent>*/}
        {/*</ParentComponent>*/}
        {/*<ShopItem computer={computer} />*/}
    </>
  )
}

export default App
