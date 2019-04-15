import React, { Component } from 'react';

import logo from './logo.svg';
import logo1 from './images/Sign96x96.png';
import './App.scss';

class App extends Component {
    state = {
        response: '',
        post: '',
        responseToPost: '',
        queryBody: ''
    };


    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ queryBody: res.database1, response: res.express  }))

            .catch(err => console.log(err))


    }

    callApi = async () => {

        const response = await fetch('/api/hello');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/api/world', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ post: this.state.post }),
        });
        const body = await response.text();

        this.setState({ responseToPost: body });
    };

    render() {
        return (
            <div className="App">
                <nav className="top-bar topbar-responsive">
                    <div className="top-bar-title">
          <span data-responsive-toggle="topbar-responsive" data-hide-for="medium">
              { /*  <button className="menu-icon" type="button" data-toggle /> */}
          </span>
                        <img src={logo1} />
                        <a className="topbar-responsive-logo" href="#"><strong>Trevor Joel</strong></a>
                    </div>
                    <div id="topbar-responsive" className="topbar-responsive-links">
                        <div className="top-bar-right">
                            <ul className="menu simple vertical medium-horizontal">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Projects</a></li>
                                <li>
                                    <button type="button" className="button hollow topbar-responsive-button">CONTACT</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>SSSS</code> and save to reload.
                    </p>

                </header>
                <p>{this.state.queryBody}</p>
                <p>{this.state.response}</p>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <strong>Post to Server:</strong>
                    </p>
                    <input
                        type="text"
                        value={this.state.post}
                        onChange={e => this.setState({ post: e.target.value })}
                    />
                    <button type="submit">Submit</button>
                </form>
                <p>{this.state.responseToPost}</p>
            </div>
        );
    }
}

export default App;