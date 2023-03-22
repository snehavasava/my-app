import React  from "react";

const FunctionComponent = (props) => {
 return ( <ul>

{
    props.StudentNames.map((candidateName) => {
        return<li key={candidateName}>{candidateName}</li>;
        
    })
}
 </ul>
)
 }

export default FunctionComponent ;