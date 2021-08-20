import React from "react";
import "./Error404.css";
import Error404Image from '../../assets/images/Error404.png'
import {Link} from 'react-router-dom';

const Error404 = () => {

    return (
        <>
            <img src={Error404Image} class="img-fluid mt-5 mx-auto d-block" alt="404 Page Image" />
            <p class="display-4 text-center mt-5">OOPS! Webpage Doesn't Exist</p>
            <Link to="/"><p class="text-center">Go back to IEEE VJTI's Homepage</p></Link>
        </>
    );
};

export default Error404;