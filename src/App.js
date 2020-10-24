import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {Button} from 'antd';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { list:[] };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let url = "http://localhost:8080/api/users";
        axios.get(url)
            .then(function (response) {
                let data =response.data;
                console.log(data);
                alert(JSON.stringify(data));
            })
            .catch(function (error) {
                console.log(error);
                alert(error);
            });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Edit <code>src/App.js</code> and save to reload.</p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                    <br/>
                    <Button onClick = {this.handleClick}>Call Backend API</Button>
                </header>
            </div>
        );
    }
}

export default App;
