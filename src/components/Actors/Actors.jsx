import { useEffect, useState } from "react";
import Actor from "./Actor";

const Actors = ({selectHandleClick}) => {
    const [actors, setActors] = useState([]);

    useEffect(() => {
        fetch('player.json')
        .then(res=> res.json())
        .then(data=> setActors(data))
    }, []);

    return (
        <div>
            {
                actors.map(actor=> <Actor key={actors.id} actor={actor} selectHandleClick={selectHandleClick}/>)
            }
        </div>
    );
};

export default Actors;