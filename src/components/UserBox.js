import React from "react";
import '../index.css';


export default class UserBox extends React.Component {
    render() {
        return (
            <div className="UserBox">
                <p style={{fontSize: '20px',fontWeight: '500'}}><b>{this.props.boldContent}</b> {this.props.textContent}</p>
            </div>
        );
    }
}