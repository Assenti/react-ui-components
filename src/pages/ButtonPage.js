import React from 'react';
import { Button } from '../components/Button';
import { Tooltip } from '../components/Tooltip';
import { Search, Home, Delete } from '../icons';

export const ButtonPage = () => {
    return (
        <div className="page">
            <div className="page-title">Buttons</div>
            <h3>Button types</h3>
            <div className="row align-center">
                <Button
                    className="mr-5"
                    color="primary"
                    name="Primary"
                    onClick={() => {}}/>
                <Button
                    smooth
                    className="mr-5"
                    color="primary"
                    name="Smooth"
                    onClick={() => {}}/>
                <Button
                    className="mr-5"
                    outlined
                    color="primary"
                    name="Outlined"
                    onClick={() => {}}/>
                <Button
                    className="mr-5"
                    outlined
                    uppercase
                    color="primary"
                    name="Outlined uppercase"
                    onClick={() => {}}/>
                <Button
                    className="mr-5"
                    outlined
                    rounded
                    color="primary"
                    name="Rounded"
                    onClick={() => {}}/>
                <Button
                    className="mr-5"
                    rounded
                    color="primary"
                    name="Rounded"
                    onClick={() => {}}/>
            </div>

            <h3>Button sizes</h3>
            <div className="row align-center">
                <Button
                    className="mr-5"
                    color="info"
                    name="Default"
                    onClick={() => {}}/>
                <Button
                    className="mr-5"
                    color="info"
                    size="medium"
                    name="Medium"
                    onClick={() => {}}/>
                <Button
                    className="mr-5"
                    size="large"
                    color="info"
                    name="Large"
                    onClick={() => {}}/> 
                <Button
                    rounded
                    className="mr-5"
                    color="info"
                    name="Default"
                    onClick={() => {}}/>
                <Button
                    rounded
                    outlined
                    uppercase
                    className="mr-5"
                    color="info"
                    size="medium"
                    name="Medium"
                    onClick={() => {}}/>
                <Button
                    rounded
                    uppercase
                    size="large"
                    color="info"
                    name="Large"
                    onClick={() => {}}/>  
            </div>
            <h3>Button colors</h3>
            <div className="row">
                <Button
                    className="mr-5"
                    color="primary"
                    name="Primary"
                    onClick={() => {}}/>
                <Button
                    className="mr-5"
                    color="info"
                    name="Info"
                    onClick={() => {}}/>  
                <Button
                    className="mr-5"
                    color="error"
                    name="Error"
                    onClick={() => {}}/> 
                <Button
                    className="mr-5"
                    color="success"
                    name="Success"
                    onClick={() => {}}/> 
                <Button
                    className="mr-5"
                    color="black"
                    name="Black"
                    onClick={() => {}}/> 
                <Button
                    disabled
                    color="success"
                    name="Disabled"
                    onClick={() => {}}/> 
            </div>
            <h3>Block button</h3>
            <div className="row">
                <div style={{ width: 300 }} className="mr-10">
                    <Button
                        block
                        color="primary"
                        name="Block button"
                        onClick={() => {}}/> 
                </div>
                <div style={{ width: 300 }}>
                <Button
                    block
                    rounded
                    outlined
                    color="error"
                    name="Block button"
                    onClick={() => {}}/> 
            </div>
            </div>
            <h3>Icon buttons</h3>
            <div className="row align-center">
                <Button
                    className="mr-10"
                    color="primary"
                    icon="search"
                    onClick={() => {}}/>
                <Button
                    outlined
                    className="mr-10"
                    color="primary"
                    icon="search"
                    onClick={() => {}}/>
                <Button
                    light
                    className="mr-10"
                    icon="search"
                    onClick={() => {}}/>
                <div className="row justify-center bg-night py-5 px-15 mr-10 smooth-border">
                    <Button
                        dark
                        icon="search"
                        onClick={() => {}}/>
                </div>
                <Button
                    className="mr-10"
                    color="primary"
                    name="Search"
                    icon="search"
                    onClick={() => {}}/>
                <Button
                    outlined
                    className="mr-10"
                    color="primary"
                    name="Search"
                    icon="search"
                    onClick={() => {}}/>
                <Button
                    className="mr-10"
                    color="info"
                    name="Home"
                    icon="home"
                    iconLeft
                    onClick={() => {}}/>
            </div>
        </div>
    )
}
