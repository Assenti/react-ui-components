import React from 'react';
import { Header } from '../components/Header';
import { Tooltip } from '../components/Tooltip';
import { Button } from '../components/Button';
import { version } from '../../package.json';

export const Content = (props) => {
    const github = 'https://github.com/Assenti/react-ui-components';

    return (
        <div className="content">
            <Header title="React UI Components"
                rightSide={
                <div className="row align-center">
                    <div className="text-lightgray mr-20"><small>Version: {version}</small></div>
                    <Tooltip tooltip="Visit Github repo" position="bottom-right">
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
