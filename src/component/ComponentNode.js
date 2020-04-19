import React, { Fragment } from 'react';
import '../css/style.css'

const ComponentNode = () => {
    return( 
            <Fragment>
            <div className='details-text'> 
                <h2>Node JS</h2>
                Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine).
            
                Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.

                <h3>Highlights</h3>

                <ul>Asynchronous and Event Driven − All APIs of Node.js library are asynchronous, that is, non-blocking. It essentially means a Node.js based server never waits for an API to return data. The server moves to the next API after calling it and a notification mechanism of Events of Node.js helps the server to get a response from the previous API call.</ul>
                <ol>Very Fast − Being built on Google Chrome's V8 JavaScript Engine, Node.js library is very fast in code execution..</ol>
                <ul>Single Threaded but Highly Scalable − Node.js uses a single threaded model with event looping. Event mechanism helps the server to respond in a non-blocking way and makes the server highly scalable as opposed to traditional servers which create limited threads to handle requests. Node.js uses a single threaded program and the same program can provide service to a much larger number of requests than traditional servers like Apache HTTP Server.

</ul>
                <ul>No Buffering − Node.js applications never buffer any data. These applications simply output the data in chunks.</ul>
                <ul>License − Node.js is released under the MIT license.</ul>
            </div>
            <div>
            <img src="../images/angular.jpg" />


            </div>
            </Fragment>
    )
}

export default ComponentNode;