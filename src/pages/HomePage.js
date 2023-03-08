import React, {useState} from "react";
import { Navigate } from "react-router-dom";
import compounds from '../compounds.json'


export default function HomePage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [GoToReactions, setGoToReactions] = useState(false);

    if (GoToReactions) {
        return <Navigate to="/reactions" />
    }

    return (
        <div className="App">
            <h1> Organic Chemistry Retrosynthesis </h1>
            <div>
                <input type="text" placeholder="Search..."
                    onChange={(event) => { // Code for search filter
                        setSearchTerm(event.target.value);
                    }}
                />
                <button style={{ marginLeft: 6 }} onClick={() => { setGoToReactions(true) }}>search</button>
            </div>
            {compounds.filter((val) => { 
                if (searchTerm == "") {
                    return val
                }
                else if (val.Molecule.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val //only return val in the search if searchTerm is "" or if the specific value is included in the searchTerm
                }
            }).map((val, key) => {
                return (
                    <div className="user" key={key}>
                        <p>{val.Molecule}</p>
                    </div>);
            })}
        </div>
    )
}

