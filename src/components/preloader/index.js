import React from 'react';
import PropTypes from 'prop-types';

const Preloader = (props) => {
    return (
        <React.Fragment>
            {props.visible ? <div className="rui-preloader"
                style={{ background: props.backgroundColor ? props.backgroundColor : ''}}>
                {
                    props.preloader ? props.preloader :
                    <div className="lds-ellipsis">
                        <div style={{ backgroundColor: props.color ? props.color : '#1678c2' }}></div>
                        <div style={{ backgroundColor: props.color ? props.color : '#1678c2' }}></div>
                        <div style={{ backgroundColor: props.color ? props.color : '#1678c2' }}></div>
                        <div style={{ backgroundColor: props.color ? props.color : '#1678c2' }}></div>
                    </div>
                } 
            </div> : ''}
        </React.Fragment>
    )
}
Preloader.propTypes = {
    visible: PropTypes.bool.isRequired,
    preloader: PropTypes.node,
    color: PropTypes.string,
    backgroundColor: PropTypes.string
}
export default Preloader;