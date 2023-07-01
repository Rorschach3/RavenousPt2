import React from 'react';
import './mainpage.css';

function Mainpage() {
    return (
    <div id='navBar' className='Container'>
        <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand">Ravenous</a>
        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        </nav>
    </div>
    )
}

export default Mainpage;