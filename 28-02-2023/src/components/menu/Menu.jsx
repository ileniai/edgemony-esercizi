import "./index.css"

const Menu = ({type}) =>{
    return(
        <div className="Menu">
            <ul>
                <li>{type}</li>
            </ul>
        </div>
    )
}

export default Menu