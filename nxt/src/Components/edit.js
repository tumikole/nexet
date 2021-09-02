import React, { Component } from 'react';
import {Link} from "react-router-dom";


class Edit extends Component {
    render() {
        return (
               <div>
                <br/>
                <hr/>
<Link to="/">
<caption>Home</caption>
</Link>
       <div>
           <h1 style={{ textAlign:'center',}}>Edit Employee</h1>
       </div>
       <hr/>
       <div>
<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Surname</th>
      <th scope="col">Position</th>
      <th scope="col">Task</th>
      <th scope="col">Salary</th>
      <th scope="col">Food</th>
      <th scope="col">Date</th>
      <th scope="col">Complete</th>

    </tr>
  </thead>
  <tbody>
    <tr>

    </tr>
  </tbody>
</table>
</div>
            </div>
            
        );
    }
}

export default Edit;