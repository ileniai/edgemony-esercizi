import { useState, useEffect } from "react";
import MiniCard from "../miniCard";
import { GET } from "../../utils/http";
import "./index.css";


const MiniCardList = () =>{
    const [miniCards, setMiniCards] = useState([]);

    useEffect(() => {
        GET("/products").then((data) => setMiniCards(() => data.products));
      }, []);

    return (
        <div className="MiniCardList">
            <h2 className="MiniCardList_title">In primo piano</h2>
            <div className="MiniCardList_card">
        {miniCards.map((card) => (
          <MiniCard imgSrc={card.thumbnail} imgAlt={card.title} key={card.id} />
        ))}
      </div>
        </div>
    )
}

export default MiniCardList;