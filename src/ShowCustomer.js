import React from 'react';
import App from './App';
class ShowCustomerLists extends React.Component{
    render(){
        
        return(
            <ol>
            {this.props.propCustomer.filter(function(user){
                 return user.CustomerName[0]=='A' &&  user.CustomerAddress=='India' ;
            }).map(function(user){
            return <li>Name - {user.CustomerName} , Country : {user.CustomerAddress}</li>;
            })}
           
        </ol>
        );
    }
}
export default ShowCustomerLists;