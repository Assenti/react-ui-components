import React from 'react';
import { Button } from '../components/Button';
import { Tooltip } from '../components/Tooltip';
import { Search, Home, Delete } from '../icons';

export const ButtonPage = () => {
    return (
        <div className="page">
            <div className="page-title">Buttons</div>
            <div className="flex align-top">
                <Button
                    color="primary"
                    name="Primary"
                    onAction={() => {}}/>
                <div className="mx-5"></div>
                <Button
                    color="info"
                    size="medium"
                    name="Info medium"
                    onAction={() => {}}/>
                <div className="mx-5"></div>
                <Button
                    size="large"
                    color="error"
                    name="Error large"
                    onAction={() => {}}/> 
                <div className="mx-5"></div>
                <Button
                    color="success"
                    name="Success"
                    onAction={() => {}}/> 
                <div className="mx-5"></div>
                <Button
                    disabled
                    color="success"
                    name="Disabled"
                    onAction={() => {}}/>   
            </div>
            <br/>
            <div className="flex">
                <div className="col">
                    <Button
                        block
                        color="primary"
                        name="Block button"
                        onAction={() => {}}/> 
                </div>
                <div className="col"></div>
            </div>
            <div className="page-title">Icon buttons</div>
            <div className="flex">
                <Tooltip tooltip="Search">
                    <Button
                        color="primary"
                        icon
                        onAction={() => {}}>
                        <Search color="#fff"/>
                    </Button> 
                </Tooltip>
                <div className="mx-5"></div>
                <Tooltip tooltip="Home">
                    <Button
                        color="info"
                        icon
                        onAction={() => {}}>
                        <Home color="#fff"/>
                    </Button> 
                </Tooltip>
                <div className="mx-5"></div>
                <Tooltip tooltip="Delete">
                    <Button
                        color="error"
                        icon
                        onAction={() => {}}>
                        <Delete color="#fff"/>
                    </Button> 
                </Tooltip>
            </div>
        </div>
    )
}
