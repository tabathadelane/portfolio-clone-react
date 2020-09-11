import React from 'react'
import {Link} from "react-router-dom";


function Content(){
    return (
        <div>
            <Link to="/" >About</Link>
            <Link to="/Contact" >Contact</Link>
            <Link to="/Trversal" >Trversal</Link>
            <Link to="/Habitat" >Habitat</Link>
            <Link to="/Vgct" >VGCT</Link>
            <Link to="/Critical" >Critical</Link>
        </div>
    )}

export default Content
