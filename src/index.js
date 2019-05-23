import React from "react";
import ReactDOM from "react-dom";
import Profile from "./components/Profile"
import Form from "./components/Form"
import "./index.css";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedin: false,
            errorMessage: "",
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        let foundUser = false;
        for(let i=0;i<users.length;i++) {
            if(this.state.username === users[i].username && this.state.password === users[i].password) {
                foundUser = true;
                this.setState({isLoggedin: true});
            }
            if(this.state.username === users[i].username && this.state.password !== users[i].password) {
                foundUser = true;
                this.setState({errorMessage: "Invalid password"});
            }
        }
        if(!foundUser) {
            this.setState({errorMessage: "User not found"});
        }
        
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        const loginPage = (
            <div className="loginContainer">
                <div className="descriptionContainer">
                    <p>Login into Instagram</p>
                </div>
                <div className="loginFormContainer">
                    <Form onChange={this.handleChange} credentials={formCredentials} onSubmit={this.handleSubmit} errorMessage={this.state.errorMessage} submitContent={submitContent}/>
                </div>
            </div>
        );
        const profilePage = <Profile user={this.state.username} profilePic = {profilePics[this.state.username]} defaultPic={defaultPic}/>;
        return this.state.isLoggedin ? profilePage : loginPage ;
    }
}

const submitContent = "Login";
const formCredentials = ["username", "password"];
export const defaultPic = "https://i.stack.imgur.com/l60Hf.png";
        
export const users = [
    {username: "ryuzaki", password: "ryuzaki123"},
    {username: "ayushtiku5", password: "ayushtiku5123"},
    {username: "ayush_1998", password: "ayush_1998123"},
    {username: "tourist", password: "tourist123"},
    {username: "rng_58", password: "rng_58123"}
];
export const profilePics = {
    ryuzaki: "https://pbs.twimg.com/profile_images/612008607152877572/OzTVFN9K_400x400.jpg",
    ayushtiku5: "https://data.whicdn.com/images/264719594/superthumb.jpg?t=1477996129",
    ayush_1998: "https://cdn.staticneo.com/w/deathnote/thumb/3/34/L.jpg/300px-L.jpg",
    tourist: "https://cdn.staticneo.com/w/deathnote/thumb/3/34/L.jpg/300px-L.jpg",
    rng_58: "https://data.whicdn.com/images/14411601/original.jpg"
};

ReactDOM.render(<App />, document.getElementById("root"));
