import React from 'react';
import './mainpage.css';

function Mainpage() {
    return (
    <div id='navBar' className='Container'>
        <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand">Ravenous</a>
        <form id="search-business-form">
            <input className="form-control mr-sm-2" type="Business" placeholder="Business" aria-label="Location"></input>
            <input className="form-control mr-sm-2" type="Location" placeholder="Location" aria-label="Business"></input>

            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        </nav>
    </div>
    )
}

export default Mainpage;