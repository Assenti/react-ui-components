import React from 'react';
import { Header } from './Header';
import { Tooltip, Button } from '../components';
import { version, description } from '../../package.json';

export const Content = (props) => {
    const github = 'https://github.com/Assenti/react-ui-components';

    return (
        <div className="content">
            <Header title={<div className="row align-center">
                    <Button icon="menu" dark onClick={() => props.onDrawerToggle()}/>
                    <span className="fz-10 ml-5">{description}</span>
                </div>}
                rightSide={
                <div className="row align-center">
                    <div className="text-lightgray mr-20">
                        <a href="https://github.com/Assenti/react-ui-components/blob/master/CHANGELOG.md" 
                            rel="noopener noreferrer"
                            target="_blank">
                            <small>v {version}</small>
                        </a>
                    </div>
                    <Tooltip tooltip="Visit Github repo" position="left">
                        <Button 
                            dark
                            icon="github" 
                            onClick={e => { 
                            e.preventDefault()
                            window.open(github, '_blank')}}/>
                    </Tooltip>
                </div>
            }/>
            <div className="content-inner">
                {props.children}
            </div>
        </div>
    )
}
