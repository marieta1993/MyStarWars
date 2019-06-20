import React,{Component} from 'react';

import  './Sidebar.css'
export  default  class Sidebar extends  Component{
    render(){
        return(
            <div className='col-md-3'>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Cras justo odio
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Dapibus ac facilisis in
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Morbi leo risus
                    </li>
                </ul>
            </div>
        )
    }
};
