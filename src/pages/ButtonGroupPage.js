import React, { useState } from 'react';
import { ButtonGroup, Select, Icon, Switch, ThemeContext, Divider } from '../components';
import Page from '../layouts/Page';

const usage = 
`// Usage examples
import React, { useState } from 'react';
import { ButtonGroup, Select, Switch, Icon } from '@assenti/react-ui-components';
const langs = ['KZ', 'RU', 'EN'];
const icons = ['format-align-left', 'format-align-center', 'format-align-right'];
const colors = ['primary', 'info', 'success', 'error', 'secondary', 'black'];
const sizes = ['default', 'medium', 'large'];

function Example() {
    const [color, setColor] = useState(colors[0]);
    const [size, setSize] = useState(sizes[0]);
    const [outlined, setOutlined] = useState(false);
    const [icon, setIcon] = useState(false);
    const [lifted, setLifted] = useState(false);

    return (
        <div>
            <Select
                items={sizes}
                prefix={<Icon name="format-size"/>}
                width={200}
                label="Button size"
                color="primary"
                className="ml-10"
                value={size}
                onChange={v => setSize(v)}/>
            <br/>
            <Select
                items={colors}
                prefix={<Icon name="brush"/>}
                width={200}
                label="Button color"
                color="primary"
                className="ml-10"
                value={color}
                onChange={v => setColor(v)}/>
            <br/>
            <Switch 
                color="primary" 
                check={outlined}
                rightLabel="Outlined"
                className="pl-10 my-10"
                onChange={() => setOutlined(!outlined)}/>
            <Switch 
                color="primary" 
                check={icon}
                rightLabel="Icon"
                className="pl-10 my-10"
                onChange={() => setIcon(!icon)}/>
            <br/>
            <Switch 
                color="primary" 
                check={lifted}
                rightLabel="Lifted"
                className="pl-10 my-10"
                onChange={() => setLifted(!lifted)}/>
            <br/>
            <div className="pa-10">
                <ButtonGroup 
                    default={0} 
                    options={icon ? icons : langs} 
                    color={color}
                    size={size}
                    icon={icon}
                    lifted={lifted}
                    outlined={outlined}
                    className="mr-10"/>
            </div>
        </div>
    )
}`

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
const icons = ['format-align-left', 'format-align-center', 'format-align-right'];
const colors = ['primary', 'info', 'success', 'error', 'secondary', 'black'];
const sizes = ['default', 'medium', 'large'];

const ButtonGroupPage = () => {
    const [color, setColor] = useState(colors[0]);
    const [size, setSize] = useState(sizes[0]);
    const [outlined, setOutlined] = useState(false);
    const [icon, setIcon] = useState(false);
    const [lifted, setLifted] = useState(false);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    apiDescItems={items}
                    componentName="<ButtonGroup/>">
                    <Select
                        items={sizes}
                        dark={theme}
                        prefix={<Icon name="format-size"/>}
                        width={200}
                        label="Button size"
                        color="primary"
                        className="ml-10"
                        value={size}
                        onChange={v => setSize(v)}/>
                    <br/>
                    <Select
                        items={colors}
                        dark={theme}
                        prefix={<Icon name="brush"/>}
                        width={200}
                        label="Button color"
                        color="primary"
                        className="ml-10"
                        value={color}
                        onChange={v => setColor(v)}/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={outlined}
                        rightLabel="Outlined"
                        className="pl-10 my-10"
                        onChange={() => setOutlined(!outlined)}/>
                    <Switch 
                        color="primary" 
                        check={icon}
                        rightLabel="Icon"
                        className="pl-10 my-10"
                        onChange={() => setIcon(!icon)}/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={lifted}
                        rightLabel="Lifted"
                        className="pl-10 my-10"
                        onChange={() => setLifted(!lifted)}/>
                    <Divider/>
                    <br/>
                    <div className="pa-10">
                        <ButtonGroup 
                            default={0} 
                            options={icon ? icons : langs} 
                            color={color}
                            size={size}
                            icon={icon}
                            lifted={lifted}
                            dark={theme}
                            outlined={outlined}
                            className="mr-10"/>
                    </div>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default ButtonGroupPage;