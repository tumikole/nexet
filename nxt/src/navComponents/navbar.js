import React, { Component } from 'react';
import ModalForm from '../modalForm/modalForm'

import './navbar'

class navbar extends Component {
    render() {
        return (
            <div>
                       <nav className="navbar navbar-dark bg-dark">
<ModalForm/>
<ul className="navItems"> 
<button type="button" class="btn btn-primary">Staff List</button>

<button type="button" class="btn btn-primary">Staff Edit</button>
</ul>
</nav>
            </div>
        );
    }
}

export default navbar;