import React, { useState } from 'react';
import { ButtonGroup, Select, Icon, Switch, ThemeContext, Divider } from '../components';
import Page from '../layouts/Page';

const usage = 
`// Usage examples
import React, { useState } from 'react';
import { ButtonGroup } from '@assenti/react-ui-components';
const icons = ['format-align-left', 'format-align-center', 'format-align-right'];

function Example() {
    const [option, setOption] = useState('');

    return (
        <>
            <ButtonGroup 
                default={0} 
                onChange={(item, index) => setOption(item)}
                options={icons} 
                color="primary"/>
        </>
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
                        value={size}
                        onChange={v => setSize(v)}/>
                    <br/>
                    <br/>
                    <Select
                        items={colors}
                        dark={theme}
                        prefix={<Icon name="brush"/>}
                        width={200}
                        label="Button color"
                        color="primary"
                        value={color}
                        onChange={v => setColor(v)}/>
                    <br/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={outlined}
                        rightLabel="Outlined"
                        onChange={() => setOutlined(!outlined)}/>
                    <Switch 
                        color="primary" 
                        check={icon}
                        rightLabel="Icon"
                        onChange={() => setIcon(!icon)}/>
                    <br/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={lifted}
                        rightLabel="Lifted"
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