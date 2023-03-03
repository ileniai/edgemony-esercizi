import {useState, useEffect} from "react"
import QuoteCard from "../quoteCard"
//import {quoteList} from "../../mocks/quoteList"
import "./index.css"

const QuoteList = ({setSingleQuoteModal}) =>{

    const [listData, setListData] = useState([])

    useEffect (()=>{
        fetch("https://dummyjson.com/quotes")
        .then((res)=> res.json())
        .then((data)=> setListData(data.quotes))
    },[])

    return(<div className="QuotesList">
            {listData 
            
            .map((quote)=>(                
                <QuoteCard 
                quoteData={quote} 
                setSingleQuoteModal = {setSingleQuoteModal}
                key ={quote.id}/>
            ))}
        </div>
    )
}

export default QuoteList