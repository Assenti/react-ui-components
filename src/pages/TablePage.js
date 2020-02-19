import React, { createRef } from 'react';
import { Table, Button, Tooltip, Badge } from '../components';

const items = [
    { country: 'Kazakhstan', capital: 'Nur-Sultan', population: 1029556 }, 
    { country: 'Russia', capital: 'Moscow', population: 12476000 }, 
    { country: 'USA', capital: 'Washington, D.C.', population: 711571 }, 
    { country: 'United Kingdom', capital: 'London', population: 8787892 }, 
    { country: 'China', capital: 'Beijing', population: 21542000 }
];

const headers = ['Country', 'Capital', 'Population'];
const headers2 = ['Country', 'Capital', 'Population'];

const keys = ['property', 'description', 'default', 'type', 'value'];
const rows = [
    { 
        property: 'items', 
        description: 'Pass the items',
        default: '', 
        type: 'string[] | number[] | object[]',
        value: ''
    },
    { 
        property: 'itemTitles', 
        description: 'Set header titles',
        default: '', 
        type: 'string[]',
        value: ''
    },
    { 
        property: 'className',
        description: 'Set a custom css class to component', 
        default: '', 
        type: 'string',
        value: ''
    }
]

export const TablePage = () => {
    const api = createRef()

    return (
        <div className="page">
            <div className="page-title">
                <Badge 
                    color="error" 
                    value="WIP" 
                    className="mr-20"
                    parent="Table Component"/>
            </div>
            <h3>Table with order index, no hover and footer</h3>
            <Table
                bordered
                noHover={true} 
                headers={headers}
                items={items}
                index={true}
                footer={<div>I am a footer</div>}
                itemTitles={['country', 'capital', 'population']}/>
            <h3>Table with checkboxes and controls</h3>
            <Table
                bordered
                checkbox 
                headers={headers2}
                items={items}
                itemTitles={['country', 'capital', 'population']}
                controls={
                    <div className="row justify-center align-center">
                        <Tooltip tooltip="Edit">
                            <Button
                                small
                                className="mr-10"
                                color="light"
                                icon="edit"
                                onClick={() => {}}>
                            </Button>
                        </Tooltip>
                        <Tooltip tooltip="Delete">
                            <Button
                                small
                                color="light"
                                icon="delete"
                                onClick={() => {}}>
                            </Button> 
                        </Tooltip>
                    </div>
                }/>
            <h2 ref={api}>API</h2>
            <Table
                bordered
                headers={keys}
                items={rows}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}
