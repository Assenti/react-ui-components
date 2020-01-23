import React from 'react';
import { Header } from '../components/Header';
import { Tooltip } from '../components/Tooltip';
import { Button } from '../components/Button';
import { Github } from '../icons/index';

export const Content = (props) => {
    const github = 'https://github.com/Assenti/react-ui-components';

    return (
        <div className="content">
            <Header title="My React UI Components"
                rightSide={
                <Tooltip tooltip="Visit Github repo" position="bottom-right">
                    <Button icon="github" 
                        onAction={e => { 
                        e.preventDefault()
                        window.open(github, '_blank')}}/>
                </Tooltip>
            }/>
            <div className="content-inner">
                {props.children}
            </div>
        </div>
    )
}
