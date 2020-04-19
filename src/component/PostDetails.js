import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css'

import ComponentAngular from './ComponentAngular';
import ComponentNode from './ComponentNode';
import ComponentReact from './ComponentReact';
import ComponentVueJS from './ComponentVueJS';


const Post = (props) => {
    console.log(props.match.params.topic)
    return(
        <div className="panel panel-info">
        <div className="panel-heading">
            UI Technolgoies
        </div>
        <Fragment>
        <div className="panel-body">
            <div className="jumbotron">  
                <p>
                {(() => {
                    switch (props.match.params.topic) {
                    case "VueJS":   return <ComponentVueJS />;
                    case "Angular": return <ComponentAngular />;
                    case "React":  return <ComponentReact />;
                    case "Node":  return <ComponentNode />;
                    default:      return "#FFFFFF";
                    }
                })()}
                </p>
            </div>
            <Link to="/technologies" className="btn btn-danger">Back</Link>

        </div>
        </Fragment>

    </div>
    )
}

export default Post;