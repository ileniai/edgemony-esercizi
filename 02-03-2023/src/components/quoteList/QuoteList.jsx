import QuoteCard from "../quoteCard"
import {quoteList} from "../../mocks/quoteList"
import "./index.css"

const QuoteList = ({setSingleQuoteModal}) =>{
    return(<div className="QuotesList">
            {quoteList.map((quote)=>(
                <QuoteCard quoteData={quote} 
                setSingleQuoteModal = {setSingleQuoteModal}key ={quote.id}/>
            ))}
        </div>
    )
}

export default QuoteList