import React from "react";
import '../index.css';


export default class InputField extends React.Component {
    render() {
        const type = this.props.label === "password" ? "password" : "text";
        return (
            <label>
                {this.props.label}
                <input onChange={this.props.onChange} type={type} name={this.props.label} className="inputField" required/>
            </label>
        );
    }
}