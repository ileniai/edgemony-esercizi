import QuoteCard from "../quoteCard"
import {quoteList} from "../../mocks/quoteList"
import "./index.css"

const QuoteList = () =>{
    return(<div className="QuotesList">
            {quoteList.map((quote)=>(
                <QuoteCard quoteData={quote} key ={quote.id}/>
            ))}
        </div>
    )
}

export default QuoteList