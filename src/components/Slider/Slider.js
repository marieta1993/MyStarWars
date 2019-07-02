import React,{Component} from 'react';

import './Slider.css';
import SwapiService from '../../services/SwapiService';

export  default class Slider extends Component{

    constructor(){
        super();
        this.getRandomPlanet()
    }
    result = new SwapiService();

    state = {
        id:3,
        planet:{},
        planets:this.result.getPlanets()
    };

    getRandomPlanet = ()=>{
        this.state.planets.then((data)=>{
            const rand = data[Math.floor(Math.random() * data.length)];
            this.setState({

                planet:rand,
                id:rand.url.match(/[\d]+/)[0]
            })
        })
    };
    render() {
        const {planet} = this.state;
        const {id} = this.state;
        const url = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;

        return (
            <div className="row">
                <div className="card mb-3">
                    <img
                         src={url}
                         alt="Card image"/>
                    <div className="card-body">
                        <h4 className="card-title">{planet.name}</h4>
                        <h6 className="card-subtitle mb-2 text-muted">{planet.population}</h6>
                        <p className="card-text">{planet.diameter}</p>
                    </div>

                </div>
            </div>
        )
    }
};
