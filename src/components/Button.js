import React from "react";
import '../index.css';



export default class Button extends React.Component {
    render() {
        const btn = (
            <button className="Button" onClick={this.props.onClick}>{this.props.content}</button>
        );
        const submitBtn = (
            <input  className="Button" value={this.props.content} type={this.props.type}/>
        );
        return this.props.type === "submit" ? submitBtn : btn ;
    }
}
