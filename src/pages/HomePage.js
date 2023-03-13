import React, {useState} from "react";
import { Link, useNavigate} from "react-router-dom";
import compounds from '../compounds.json';
import benzene from '../images/benzene_ring.png';
import styles from '../my-style.module.css';
import logo1 from '../images/logo1.jpg';
import 'animate.css';




function HomePage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [GoToReactions, setGoToReactions] = useState(false);
    const navigate = useNavigate();
    const [GoToAboutus, setGoToAboutus] = useState(false);

    if (GoToReactions) {
        return navigate("/Organic_Chemistry_Search_Bar/reactions", {state: searchTerm}
        );
    };

    if (GoToAboutus) {
        return navigate("/Organic_Chemistry_Search_Bar/aboutus");
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            navigate("/Organic_Chemistry_Search_Bar/reactions", {state: searchTerm}
        );
        };
      };
    

    return (
        <div className="App">
            <h1 padding="2"> Organic Chemistry Synthesizer </h1>
            <img src={logo1} width="500" alt=""></img>
            <div>
                <input type="text" placeholder="Search..."
                    onChange={(event) => { // Code for search filter
                        setSearchTerm(event.target.value);
                    }}
                    onKeyDown={handleKeyDown}
                />
                <button style={{ marginLeft: 6 }} onClick={() => { 
                    if (searchTerm !== "")
                        setGoToReactions(true) }}>search</button>
            </div>
            <p><i>A Phamily of Reactions!</i></p>
            {compounds.filter((val) => { 
                if (searchTerm === "") {
                    return val
                }
                else if (val.Molecule.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val //only return val in the search if searchTerm is "" or if the specific value is included in the searchTerm
                }
                return null;
            }).map((val, key) => {
                return (
                    <div className="user" key={key}>
                        <Link to="/Organic_Chemistry_Search_Bar/reactions" state={val.Molecule} >{val.Molecule}</Link>
                    </div>);
            })}
            <div>
                <button onClick={() => {
                    setGoToAboutus(true)}
                }
                className={styles.benzene}> 
                <img src={benzene} width="75" className="animate__animated animate__rotateIn" alt=""/>
                </button>
            </div>
        </div>
    )
}

export default HomePage;


