import React from 'react';
import { Header } from '../components/Header';
import { Tooltip } from '../components/Tooltip';
import { Button } from '../components/Button';
import { Github } from '../icons/index';

export const Content = (props) => {
    return (
        <div className="content">
            <Header title="My React UI Components"
                rightSide={
                <Tooltip tooltip="Visit Github repo" poistion="bottom">
                    <Button icon onAction={() => {}}><Github color="#fff"/></Button>
                </Tooltip>
            }/>
            <div className="content-inner">
                {props.children}
            </div>
        </div>
    )
}
