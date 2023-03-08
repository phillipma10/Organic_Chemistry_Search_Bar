import React, {useState} from "react";
import { Navigate } from "react-router-dom";

function Reactions() {
    const [GoToReactions, setGoToReactions] = useState(false);

    if (GoToReactions) {
        return <Navigate to= "/" />
    }

    return (
        <div>
            <h1>SIKE! THAT'S THE WRONG REACTION!</h1>
            <button style={{ marginLeft: 6 }} onClick={() => { setGoToReactions(true) }}>return</button>
        </div>
    )
}

export default Reactions;





