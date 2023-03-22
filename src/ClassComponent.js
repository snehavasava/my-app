import React from "react";
import FunctionComponent from './FunctionComponent' ;



const list1 = ["sneha","vibhuti","ruchi" , "anjali"];
const list2 = ["raj" , "jyot" , "sambhu" , "jays"];
const list3 = ["html" , "css" , "javascript" , "react"]; 

class ClassComponent extends React.Component{
constructor(props){
super(props);
this.state = {
    StudentNames: list1 
}
this.updateValue1 = this.updateValue1.bind(this)
this.updateValue2 = this.updateValue2.bind(this)
};



 updateValue1() 
 {
this.setState({StudentNames: list2});
 }
 updateValue2()
 {
    this.setState({StudentNames: list3});  
 }



render() 
{
    return <> 
    <FunctionComponent StudentNames={this.state.StudentNames} />
    <button onClick={this.updateValue1}>value1</button>
    <button onClick={this.updateValue2}>value1</button>
    </>
    
    }

 }
export default ClassComponent ;