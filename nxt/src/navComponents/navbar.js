import React, { Component } from 'react';
import ModalForm from '../modalForm/modalForm'
import './navbar'

class navbar extends Component {
    render() {
        return (
            <div>
                       <nav className="navbar navbar-dark bg-dark">

<ModalForm/>
</nav>
            </div>
        );
    }
}

export default navbar;