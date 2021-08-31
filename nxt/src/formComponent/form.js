import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './form.css'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          list: [],
         employees :{
           id:uuidv4(),
          name: '',
          surname: '',
          position: '',
          task: '',
         salary: '',
          complete: false,
          food: '',
          date:''
        }
      
        
        };
    
        
    
      }
    
      handleChange(event) {
        this.setState({...this.state,[event.target.name]: event.target.value});
      }
    
      onSubmit(event){
        const {list,person} = this.state
        list.push(person)
        event.preventDefault();
        localStorage.setItem('data',JSON.stringify(list));
          }
    
          componentDidMount() {
            this.appData = JSON.parse(localStorage.getItem('data'));
            
            if (localStorage.getItem('data')) {
              const { name, surname, position, task, salary, complete, food, date} = this.appData
                this.setState({
                  name: name,
                   surname: surname,
                   position: position,
                   task:task,
                   salary: salary,
                   complete: complete,
                   food: food,
                   date:date
                   
            })
        } else {
            this.setState({
              name: '',
              surname: '',
              position: '',
              task:'',
              salary: '',
              complete: '',
              food: '',
              date:''
             
            })
        }
        }
          
      
      
    render() {
        // const {handleChange}= this.state;
        
        return (
          <form className="myForm">
<div>
<label>Name</label>
<input type="text" name="" placeholder="Employee Name"/>
</div>
<hr/>
<div>
Surname<input type="text" name="" placeholder="Employee Surname"/>
</div>
<hr/>
<div>
            Position<select>
            <option>Manager</option>
            <option>Ceo</option>
            <option>Senior Dev</option>
            <option>Junior Dev</option>
            </select>
</div>
<hr/>
<div>
Task<select>
  <option>HTML</option>
  <option>CSS</option>
  <option>JavaScript</option>
  <option>ReactJS</option>
</select>
<p><small>other</small></p>
<input type="text" name="" placeholder="Other Task"/>
</div>
<hr/>
<div>
<input type="number" name="" placeholder="Salary"/>
</div>
<hr/>

<div>

  <lable><input type="checkbox" name=""/>Food</lable>
</div>
<hr/>
<div>
  Date
<input type="date" name=""/>

</div>
<hr/>
<div>
<lable><input type="checkbox" name=""/>Complete</lable>
</div>
<hr/>
<input type="submit"/>


          </form>
        );
    }
}

export default Form