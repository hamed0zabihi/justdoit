import React ,{Component}from "react"
import {Button} from "reactstrap"



// class Person extends Component{

//     //rendering
//     render(){
  
//         return(
//             <div>
//                 your data map is<br/>

//                 full name  is {this.props.name} {this.props.family} and age is:{this.props.age}
//                 <br/>
              
//                 <br/>
               
//             </div>
//         );
//     }

// } /*end class brackets y for test resedfgidsft head*/
const Person=({name,family,age})=>{
    return(
        <p>
            {name}-{family} and age is : {age}
        </p>
    )

}



export default Person;