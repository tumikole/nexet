import React, { Component } from 'react';
import '../Table/table'

class table extends Component {
    render() {
        return (
            <div>
                <br/>
                <hr/>
       <div>
           <h1 style={{ textAlign:'center',}}>Employee List</h1>
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

export default table;