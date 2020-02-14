import React from 'react';

export const Preloader = (props) => {
    return (
        <React.Fragment>
            {props.visible ? <div className="preloader"
                style={{ background: props.backgroundColor ? props.backgroundColor : ''}}>
                {
                    props.preloader ? props.preloader :
                    <div className="lds-ellipsis">
                        <div style={{ backgroundColor: props.color ? props.color : '#42a5f5' }}></div>
                        <div style={{ backgroundColor: props.color ? props.color : '#42a5f5' }}></div>
                        <div style={{ backgroundColor: props.color ? props.color : '#42a5f5' }}></div>
                        <div style={{ backgroundColor: props.color ? props.color : '#42a5f5' }}></div>
                    </div>
                } 
            </div> : ''}
        </React.Fragment>
    )
}