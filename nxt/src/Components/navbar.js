import React, { Component } from 'react';
import ModalForm from '../Components/modalForm'

import {Link} from "react-router-dom";
import '../CSS/navbar.css'

class navbar extends Component {
    render() {
        return (
                      <div>
     

     
<nav className="navbar navbar-dark bg-dark">
        <ul>
          <li>
              <ModalForm/>
         </li>
         <li>
            <Link to="/List">
                  <button type="button" className="btn btn-primary">Staff List</button>
            </Link>
        </li>
        <li>
            <Link to="/Edit">
              <button type="button" className="btn btn-primary">Staff Edit</button>
            </Link>
            </li>
        </ul>

          </nav>
            </div>
          
        );
    }
}

export default navbar;