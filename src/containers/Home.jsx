import React, { useEffect, useState } from 'react';
import axios from "axios";

const Home = () => {
    const [ state, setState ] = useState("");
    
    useEffect(() => {
        axios
        .get(
            "https://randomuser.me/api/"
        )
        .then((reponse) => {
            console.log(reponse.data.results);
            // setState(reponse.data.results);
        });
    }, []);

    return (
        <div className="container">
            <div className="row">
                <p>{state}</p>
            </div>
        </div>
    );
};

export default Home;