import React from 'react';
import { ButtonGroup, Card, Table, Collapse } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

    const types = 
`// Usage examples
import React from 'react';
import { ButtonGroup } from '@assenti/react-ui-components';

const langs = ['KZ', 'RU', 'EN'];
const nums = [1, 2, 3];
const icons = ['format-align-left', 'format-align-center', 'format-align-right'];

function Example() {
    return (
        <div className="row align-center my-10">
            <ButtonGroup 
                default={0} 
                options={langs} 
                color="secondary"
                outlined
                className="mr-10"/>
            <ButtonGroup 
                default={0} 
                options={nums} 
                color="info" 
                className="mr-10"/>
            <ButtonGroup 
                default={0} 
                icon
                options={icons} 
                color="black" 
                outlined/>
        </div>
    )
}
`

    const sizes = 
`// Usage examples
import React from 'react';
import { ButtonGroup } from '@assenti/react-ui-components';

const icons = ['format-align-left', 'format-align-center', 'format-align-right'];

function Example() {
    return (
        <div>
            <ButtonGroup 
                options={icons}
                default={0} 
                lifted
                icon color="secondary" 
                className="ma-10"/>
            <ButtonGroup 
                options={icons}
                default={0} 
                lifted
                size="medium"
                className="ma-10"
                icon color="secondary"/>
            <ButtonGroup 
                options={icons}
                default={0} 
                lifted
                size="large"
                className="ma-10"
                icon color="secondary"/>
        </div>
    )
}
`

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'options',
        description: 'Button group options', 
        default: '', 
        type: 'string[] | number[]',
        value: ''
    },
    { 
        property: 'onChange', 
        description: 'Handle selection (return item and index)', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'default',
        description: 'Set default active item', 
        default: '', 
        type: 'number',
        value: ''
    },
    { 
        property: 'size',
        description: 'Set buttons group size', 
        default: '', 
        type: 'string',
        value: 'medium | large'
    },
    { 
        property: 'icon', 
        description: 'Set group type to icon', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'color', 
        description: 'Set buttons color', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | error | secondary | black'
    },
    { 
        property: 'outlined', 
        description: 'Make buttons group background transparent and outline borders', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'lifted', 
        description: 'Lift up the button group', 
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
];
const langs = ['KZ', 'RU', 'EN'];
const nums = [1, 2, 3];
const icons = ['format-align-left', 'format-align-center', 'format-align-right'];


export const ButtonGroupPage = () => {
    return (
        <div className="page">
            <div className="row align-center space-between">
                <div className="page-title">ButtonGroup Component</div>
            </div>
            <Card outlined color="primary" title="ButtonGroup types">
                <div className="row align-center my-10">
                    <ButtonGroup 
                        default={0} 
                        options={langs} 
                        color="secondary"
                        outlined
                        className="mr-10"/>
                    <ButtonGroup 
                        default={0} 
                        options={nums} 
                        color="info" 
                        className="mr-10"/>
                    <ButtonGroup 
                        default={0} 
                        icon
                        options={icons} 
                        color="black" 
                        outlined/>
                </div>
                <Collapse 
                    icon="code" 
                    iconSize={18}
                    contentStyles={{ padding: 0 }}
                    tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {types}
                    </SyntaxHighlighter> 
                </Collapse>
            </Card>
            <br/>
            <Card outlined color="primary" title="ButtonGroup sizes">
                <ButtonGroup 
                    options={icons}
                    default={0} 
                    lifted
                    icon color="secondary" 
                    className="ma-10"/>
                <ButtonGroup 
                    options={icons}
                    default={0} 
                    lifted
                    size="medium"
                    className="ma-10"
                    icon color="secondary"/>
                <ButtonGroup 
                    options={icons}
                    default={0} 
                    lifted
                    size="large"
                    className="ma-10"
                    icon color="secondary"/>
                <Collapse 
                    icon="code" 
                    iconSize={18}
                    contentStyles={{ padding: 0 }}
                    tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {sizes}
                    </SyntaxHighlighter> 
                </Collapse>
            </Card>
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
