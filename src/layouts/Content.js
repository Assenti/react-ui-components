import React from 'react';
import { Tooltip, Button, Header } from '../components';
import { version, description } from '../../package.json';

export const Content = (props) => {
    const github = 'https://github.com/Assenti/react-ui-components';

    return (
        <div className="content">
            <Header
                leftControl
                sticky
                onLeftControl={() => props.onDrawerToggle()} 
                title={description}
                rightSide={
                <div className="row align-center">
                    <div className="mr-20">
                        <Tooltip tooltip="Current version" position="left">
                            <a href="https://github.com/Assenti/react-ui-components/blob/master/CHANGELOG.md" 
                                rel="noopener noreferrer"
                                target="_blank"
                                className="fw-bold">
                                <small>v {version}</small>
                            </a>
                        </Tooltip>
                    </div>
                    <Tooltip tooltip="Visit Github repo" position="left">
                        <Button 
                            icon="github"
                            light 
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
