import React from "react"
import logo from './logo.svg';
import './App.css';
import {Button} from "reactstrap";
import Person from  './component/person'

class App extends React.Component{
  constructor(props){
    super();


    // this.handleDataChange=this.handleDataChange.bind(this) /** if don't use the arrow function you need this for regular function */
    this.state={
      data:[{name:"hamed",family:"zabihi",age:33},
            {name:"john",family:"doe",age:37},
            {name:"doe",family:"john",age:40}
    ]
    };
  
  //
  }

  // if you want use  regular function vs arrow function-use this :
  //  handleDataChange(){
  //   this.setState({
  //     data:[
  //       {name:"siyavash",family:"ferdosi",age:27},
  //       {name:"khayyam",family:"neishabouri",age:50},
  //       {name:"saadi",family:"shirazi",age:38},
  //       {name:"molavi",family:"bakhi",age:38},
  //       {name:"shams",family:"tabrizi",age:38}
  
  //     ]
  //   });
  // } /** end handleDataChange function */



 handleDataChange =()=>{
  this.setState({
    data:[
      {name:"siyavash",family:"ferdosi",age:27},
      {name:"khayyam",family:"neishabouri",age:50},
      {name:"saadi",family:"shirazi",age:38},
      {name:"molavi",family:"bakhi",age:38},
      {name:"shams",family:"tabrizi",age:38}
    ]
  });
}


  //
  render(){
    return(
      <div>
        <h1>justdoit</h1>
        {this.state.data.map(datas=>(
          <Person name={datas.name} family={datas.family} age={datas.age}/>

        ))}
        <hr/>
        <br/>
        <Button onClick={this.handleDataChange}>change state</Button>
      </div>
    );
  }

}
export default App
