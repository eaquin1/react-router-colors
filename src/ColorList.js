import React from "react";
import { Link } from "react-router-dom";

const ColorList = ({ colors }) => {
    return (
        <div>
            <h1 className="ColorList-title">Welcome to the color factory.</h1>
            <h1>
                <Link to="/colors/new">Add a color</Link>
            </h1>
            <ul>
                {Object.keys(colors).map((c) => (
                    <li key={c}>
                        <Link to={`/colors/${c.toLowerCase()}`}>{c}</Link>{" "}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ColorList;
