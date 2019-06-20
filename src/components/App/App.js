import React,{Component} from 'react';

import Header from '../Header';
import Slider from '../Slider';
import Sidebar from '../Sidebar';
import Main from '../Main';

import './App.css';

export default class App extends Component{
    render() {
        return (
            <div className="App wrapper">
                <header className="App-header">
                    <Header/>
                </header>
                <div className='mt-5'>
                    <Slider/>
                </div>
                <div className="d-flex align-items-start">
                    <Sidebar/>
                    <Main/>
                </div>
            </div>
        );
    }
}
