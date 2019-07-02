import React,{Component} from 'react';
import SwapiService from '../../services/SwapiService'

import  './Sidebar.css';

export  default  class Sidebar extends  Component{
    constructor(){
        super();
        this.getPlanetLists()
    }

    result = new SwapiService();

    state = {
        planets:this.result.getPlanets()
    };
    getPlanetLists(){
        this.state.planets.then((data)=>{
            this.setState({
                planets:data
            })
        });
    }
    render(){

        const {planets} = this.state;
        console.log(planets)

        // const listItems = planets.map((d) => <li className="list-group-item d-flex justify-content-between align-items-center" key={d.name}>{d.name}</li>);
        return(
            <div className='col-md-3'>
                <ul className="list-group">
                    {/*{listItems }*/}
                </ul>
            </div>
        )
    }
};
