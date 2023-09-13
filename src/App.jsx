import { useState } from "react";
import Actors from "./components/Actors/Actors"
import Cart from "./components/carts/Cart"
import Header from "./components/header/Header"

function App() {
  const [selectedActrs, setSelectedActrs] = useState([]);
  const [cost, setCost] = useState(0);

  const selectHandleClick = (actor) => {
    const newSelectedActrs = [...selectedActrs, actor];
    setSelectedActrs(newSelectedActrs);
    setCost(actor.salary)
  }

  return (
    <>
      <Header />
      <div className="mx-10 my-10 flex flex-col md:flex-row justify-between">
        <Actors selectHandleClick={selectHandleClick} />
        <Cart selectedActrs={selectedActrs} cost={cost} />
      </div>
    </>
  )
}

export default App
