import React from 'react';
import { Link } from 'react-router-dom';

const Technologies = () => {
    return(
        <div className="panel panel-success">
        <div className="panel-heading">
            Front End Technologies
        </div>
        <div className="panel-body">
            <div className="jumbotron">
                <h2>Web Application Development Tools</h2>
                <p>Web application development tools allow us to debug the code as well as use the same code for testing the user interface of the web application. Web browsers like Google and Internet Explorer offer built-in tools to help the developers to work with it.</p>
            </div>
            <h3>Vue.JS</h3>
            <Link to="/technology/VueJS">Details</Link>
            <h3>React</h3>
            <Link to="/technology/React">Details</Link>
            <h3>Node</h3>
            <Link to="/technology/Node">Details</Link>
            <h3>Angular</h3>
            <Link to="/technology/Angular">Details</Link>
        </div>
    </div>
    )
}

export default Technologies;