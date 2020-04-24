import React from 'react';
import ShowCustomer from './ShowCustomer';
class App  extends React.Component{
    render(){
        var objCustomer=[
            {CustomerId:1,CustomerName:'Abhishek',CustomerAddress:'India'},
             {CustomerId:2,CustomerName:'Aamir',CustomerAddress:'Us'},
             {CustomerId:3,CustomerName:'Sid',CustomerAddress:'India'},
             {CustomerId:4,CustomerName:'Rajdeep',CustomerAddress:'Abc'},
             {CustomerId:5,CustomerName:'Amar',CustomerAddress:'India'},
             {CustomerId:6,CustomerName:'kamal',CustomerAddress:'Uk'}
        ];
        return(
            <div>
                <ShowCustomer propCustomer={objCustomer}/>
            </div>
        );
    }
}

export default App;