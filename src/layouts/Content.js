import React from 'react';
import { Tooltip, Button, Header, Switch } from '../components';
import { version, description } from '../../package.json';

export const Content = (props) => {
    const github = 'https://github.com/Assenti/react-ui-components';
    // https://github.com/assenti/react-ui-components/stargazers/

    return (
        <div className="rui-content">
            <Header
                leftControl
                sticky
                dark={props.dark}
                elevated
                onLeftControl={() => props.onDrawerToggle()} 
                title={description}
                rightSide={
                <div className="row align-center">
                    <Switch color="primary" 
                        check={props.dark}
                        leftIcon="sun"
                        leftIconColor={props.dark ? '#fff' : ''}
                        rightIconColor={props.dark ? '#fff' : ''}
                        className="mr-10"
                        rightIcon="moon" 
                        onChange={() => props.onSwitch()}/>
                    <div className="mr-15">
                        <Tooltip tooltip="Current version" position="left">
                            <a href="https://github.com/Assenti/react-ui-components/blob/master/CHANGELOG.md" 
                                rel="noopener noreferrer"
                                target="_blank"
                                className="fw-bold">
                                <small>v{version}</small>
                            </a>
                        </Tooltip>
                    </div>
                    <Tooltip tooltip="Visit Github repo" position="left">
                        <Button 
                            icon="github"
                            light={!props.dark}
                            dark={props.dark} 
                            onClick={e => { 
                            e.preventDefault()
                            window.open(github, '_blank')}}/>
                    </Tooltip>
                </div>
            }/>
            <div className="rui-content-inner">
                {props.children}
            </div>
        </div>
    )
}
