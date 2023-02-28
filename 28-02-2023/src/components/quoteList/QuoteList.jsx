import QuoteCard from "../quoteCard"
import {quoteList} from "../../mocks/quoteList"
import "./index.css"

const QuoteList = () =>{
    return(<div className="QuotesList">
            {quoteList.map((quote)=>(
                <QuoteCard quoteData={quote} />
            ))}
        </div>
    )
}

export default QuoteList