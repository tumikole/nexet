import React from "react";
import { v4 as uuidv4 } from "uuid";
import "../CSS/form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      employees: {
        id: uuidv4(),
        name: "",
        surname: "",
        position: "",
        task: "",
        salary: "",
        // food: {
        //   chooseFood: "Pizza, Burger",
        // },
        date: "",
        complete: "false",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
    // console.log("name", this.state)
  }
  onSubmit(event) {
      const { list, person } = this.state;
      list.push(person);
      event.preventDefault();
      const { name, surname, position, task, salary, date } =
        this.appData;
      this.setState({
          name: name,
          surname: surname,
          position: position,
          task: task,
          salary: salary,
      // complete: complete,
      // food: food,
      date: date,
    });
  }
  
  render() {
    const { name, surname, position, task, salary, date } = this.state
    return (
      <form className="myForm">
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Employee Name"
          />
        </div>
        <hr />
        <div>
          Surname
          <input
            type="text"
            name="surname"
            value={surname}
            onChange={this.handleChange}
            placeholder="Employee Surname"
          />
        </div>
        <hr />
        <div>
          Position
          <select>
            <option name="position" value={position}>
              Select Position
            </option>
            <option name="position" value={position}>
              Manager
            </option>
            <option name="position" value={position}>
              Ceo
            </option>
            <option name="position" value={position}>
              Senior Dev
            </option>
            <option name="position" value={position}>
              Junior Dev
            </option>
          </select>
        </div>
        <hr />
        <div>
          Task
          <input
            type="text"
            name="task"
            value={task}
            placeholder="Task"
          />  
        </div>
        <hr />
        <div>
          <input
            type="number"
            name="salary"
            value={salary}
            placeholder="Salary"
          />
        </div>
        <hr />

        {/* <div>
          <label>
            <input type="checkbox" name="" />
            Food
          </label>
        </div> */}
        <hr />
        <div>
          Date
          <input type="date" name="date" value={date} />
        </div>
        <hr />
        {/* <div>
          <label>
            <input type="checkbox" name="" />
            Complete
          </label>
        </div> */}
        <hr />
        <input type="submit" />
      </form>
    );
  }
}

export default Form;
