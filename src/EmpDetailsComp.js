import React from 'react';
import PropTypes from 'prop-types';

class EmpDetailsComp extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.empId}</p>
                <p>{this.props.empName}</p>
                <p>{this.props.empCompany}</p>
            </div>
        )
    }
}

EmpDetailsComp.defaultProps = {
    empCompany: 'YASH'
}

EmpDetailsComp.propTypes = {
    empId: PropTypes.number
}

export default EmpDetailsComp;