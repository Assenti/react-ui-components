import React from 'react';
import PropTypes from 'prop-types';

const Spinner = (props) => {
    return (
        <div className={`rui-spinner ${props.color ? props.color : ''}`.trim()}
            style={{
                width: props.size ? props.size : 24,
                height: props.size ? props.size : 24
            }}>
            <span/>
        </div>
    )
}
Spinner.propTypes = {
    size: PropTypes.number,
    color: PropTypes.oneOf(['primary','info','success','error'])
}
export default Spinner;