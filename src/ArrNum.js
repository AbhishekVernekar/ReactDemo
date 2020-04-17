  
import React from 'react';
import CheckOddEven from './CheckOddEven';

class ArrNum  extends React.Component{
    render(){
        var arrNum=[10,13,15,18,22,25,33,38];
        return(
            <div>
                <CheckOddEven propNum={arrNum}/>
            </div>
        );
    }
}

export default ArrNum;