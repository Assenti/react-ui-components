import React from 'react';

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
export default Preloader;