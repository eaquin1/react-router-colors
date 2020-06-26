import React, {useState} from "react"
import {useHistory} from "react-router-dom"

const NewColorForm = ({addColor}) => {

    const history = useHistory()
    const [form, updateForm] = useState({name: "", hex: "#ffffff"});

    const handleChange = (e) => {
        e.persist()
        updateForm(f =>({ ...f, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addColor({[form.name]: form.hex})
        history.push("/colors")
    }

    const {hex, name} = form;

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Color</label>
            <div>
            <input 
                id="name"
                type="text"
                name="name"
                placeholder="Enter Color Name"
                value={name}
                onChange={handleChange}
            />
            </div>
            <div>
                <label htmlFor="hex">Color value</label>
                <input 
                type="color"
                name="hex"
                id="hex"
                onChange={handleChange}
                value={hex}
            />
            </div>
            <button>Add Color</button>
        </form>
    )
}


export default NewColorForm
