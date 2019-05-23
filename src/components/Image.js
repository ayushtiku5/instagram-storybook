import React from "react";
import '../index.css';


export default class Image extends React.Component {
    render() {
        
        const style = this.props.isRounded ? "imgRounded" : "imgStyle" ;
        return (
            <img src = {this.props.url} className={style}/>
        );
    }
}
