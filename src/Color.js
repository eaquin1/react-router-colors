import React from "react"
import { Link} from "react-router-dom"

const Color = ({hex, color, history}) => {
    if (!hex) {
        history.push("/colors")
    }
    return (
        <div className="Color" style={{backgroundColor:hex}}>
            <h1>This is {color}</h1>
            <h2>Isn't it beautiful?</h2>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default Color