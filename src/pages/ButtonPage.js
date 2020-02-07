import React from 'react';
import { Button } from '../components/Button';
import { Table } from '../components/Table';

export const ButtonPage = () => {
    const keys = ['property', 'description', 'default', 'type', 'value'];
    const items = [
        { 
            property: 'onClick', 
            description: 'Handle button click', 
            default: '', 
            type: 'function',
            value: 'return a button click event object'
        },
        { 
            property: 'name', 
            description: 'Set button name (can be set with icon)', 
            default: '', 
            type: 'string',
            value: ''
        },
        { 
            property: 'lifted', 
            description: 'Lift up the button', 
            default: 'false', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'color', 
            description: 'Set background and border color of button from list', 
            default: '', 
            type: 'string',
            value: 'primary | info | success | error | black'
        },
        { 
            property: 'disabled',
            description: 'Make Radio group disabled', 
            default: 'false',
            type: 'boolean', 
            value: 'true | false'},
        { 
            property: 'rounded', 
            description: 'Make border radius rounded',
            default: 'false', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'smooth',
            description: 'Set button borders more smooth', 
            default: 'false', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'outlined', 
            description: 'Make button background transparent and outline borders', 
            default: 'false',
            type: 'boolean', 
            value: 'true | false'
        },
        { 
            property: 'uppercase',
            description: 'Transform text to upper case', 
            default: 'false', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'block', 
            description: 'Fills the parent component width',
            default: 'false', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'size', 
            description: 'Set button size',
            default: '', 
            type: 'string',
            value: 'medium | large'},
        { 
            property: 'icon',
            description: 'Set icon in button and give circle shape to it (can be set with name)', 
            default: '', 
            type: 'string',
            value: 'home | search | etc. (see icon names list in docs)'
        },
        { 
            property: 'iconLeft',
            description: 'Change icon position to the left from name', 
            default: 'false', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'dark',
            description: 'Set dark mode (can not be used with light prop)', 
            default: 'false', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'light',
            description: 'Set light mode (can not be used with dark prop)', 
            default: 'false', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'className',
            description: 'Set a custom css class to component', 
            default: '', 
            type: 'string',
            value: ''
        }
    ]

    return (
        <div className="page">
            <div className="page-title">Buttons</div>
            <h3>Button types</h3>
            <div className="row align-center">
                <Button
                    className="mr-5"
                    color="primary"
                    lifted
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
            <h2>API</h2>
            <Table
                bordered
                headers={keys}
                items={items}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}
