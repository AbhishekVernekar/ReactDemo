import React from 'react';
import ArrNum from './ArrNum';
class CheckOddEven extends React.Component{
    render(props){
        return(
            <ul>
                {this.props.propNum
                .map(function(number){
                    return <h4>{number} { number % 2==0 ? '- Even' : '- Odd'}</h4>;
                })}
            </ul>
        );
    }
}
export default CheckOddEven;