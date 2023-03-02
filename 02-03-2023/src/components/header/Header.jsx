import "./index.css"
import Control from "../control";
import QuoteList from "../quoteList/QuoteList"

const Header = () => {
    return(
        <div className="Header">
            <img src="https://images.pexels.com/photos/372748/pexels-photo-372748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="header img" />
            <h2>Citazioni</h2>
            <Control listQuoteAuthor={QuoteList.author} />
        </div>
    )
}


export default Header;