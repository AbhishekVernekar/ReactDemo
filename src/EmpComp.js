import React from 'react';
import EmpDetailsComp from './EmpDetailsComp';
class EmpComp extends React.Component{
    render(){
        var empDetails={
            empId:'1',
            empName:'Dave',
        }
        return(
            <div>
                <EmpDetailsComp empId={empDetails.empId} empName={empDetails.empName} />
            </div>
        )
    }
}

export default EmpComp;