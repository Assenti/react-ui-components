import React, { useState } from 'react';
import { Tag, Button, Select, Icon, Switch, ThemeContext, Divider } from '../components';
import Page from '../layouts/Page';

const items = [
    { 
        property: 'value', 
        description: 'Tag value', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'lifted', 
        description: 'Lift up the Tag', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'color', 
        description: 'Set color of Tag from list', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | error | dark | yellow'
    },
    { 
        property: 'borderType', 
        description: 'Set Tag borders',
        default: '', 
        type: 'string',
        value: 'tile | smooth | rounded'
    },
    { 
        property: 'uppercase',
        description: 'Transform text to upper case', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'small', 
        description: 'Set small tag size',
        default: '', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'tiny', 
        description: 'Set tiny tag size',
        default: '', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'iconLeft', 
        description: 'Set icon before the value',
        default: '', 
        type: 'string',
        value: 'home | search | etc. (see icon names list in docs)'
    },
    { 
        property: 'iconRight', 
        description: 'Set icon after the value',
        default: '', 
        type: 'string',
        value: 'home | search | etc. (see icon names list in docs)'
    },
    { 
        property: 'width',
        description: 'Set a tag width', 
        default: '', 
        type: 'string | number',
        value: ''
    },
    { 
        property: 'setRef',
        description: 'Set ref', 
        default: '', 
        type: 'React.RefObject',
        value: ''
    },
    { 
        property: 'closable',
        description: 'Enable close function', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'visible',
        description: 'Set Tag visible state', 
        default: 'true', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'onClose',
        description: 'Invokes on close icon click (has effect with closable prop)', 
        default: '', 
        type: 'function',
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

const usage =
`// Usage examples
import React, { useState } from 'react';
import { Tag, Switch, Select, Icon } from '@assenti/react-ui-components';

const colors = ['primary', 'info', 'success', 'error', 'dark', 'yellow'];
const borders = ['default', 'smooth', 'rounded', 'tile'];

function Example() {
    const [visible, setVisible] = useState(true);
    const [outlined, setOutlined] = useState(false);
    const [small, setSmall] = useState(false);
    const [closable, setClosable] = useState(false);
    const [lifted, setLifted] = useState(false);
    const [icon, setIcon] = useState(false);
    const [color, setColor] = useState(colors[0]);
    const [borderType, setBorderType] = useState(borders[0]);

    return (
        <div className="row column py-10">
            <Switch 
                color="primary" 
                check={outlined}
                rightLabel="Outlined" 
                className="my-10"
                onChange={() => setOutlined(!outlined)}/>
            <Switch 
                color="primary" 
                check={small}
                rightLabel="Small" 
                className="my-10"
                onChange={() => setSmall(!small)}/>
            <Switch 
                color="primary" 
                check={closable}
                rightLabel="Closable" 
                className="my-10"
                onChange={() => setClosable(!closable)}/>
            <Switch 
                color="primary" 
                check={icon}
                rightLabel="Icon" 
                className="my-10"
                onChange={() => setIcon(!icon)}/>
            <Switch 
                color="primary" 
                check={lifted}
                rightLabel="Lifted" 
                className="my-10"
                onChange={() => setLifted(!lifted)}/>
        </div>
        <div className="row align-center pb-10">
            <Select
                items={colors}
                prefix={<Icon name="brush"/>}
                width={200}
                label="Color"
                color="primary"
                value={color}
                className="mr-10"
                onChange={v => setColor(v)}/>
            <Select
                items={borders}
                prefix={<Icon name="shape"/>}
                width={200}
                label="Border type"
                color="primary"
                value={borderType}
                onChange={v => setBorderType(v)}/>
        </div>
        <div className="row align-center">
            <Tag 
                value="Price: 1000"
                outlined={outlined} 
                color={color}
                small={small}
                borderType={borderType}
                iconLeft={icon ? 'tenge' : ''}
                closable={closable}
                visible={visible}
                lifted={lifted}
                onClose={() => setVisible(false)}/>
            {closable ? <Button 
                name="Return Tag" 
                color="info" 
                className="ml-20" 
                onClick={() => setVisible(true)}/> : ''}
        </div>
    )
}`

const colors = ['primary', 'info', 'success', 'error', 'dark', 'yellow','secondary'];
const borders = ['default', 'smooth', 'rounded', 'tile'];

const TagPage = () => {
    const [visible, setVisible] = useState(true);
    const [outlined, setOutlined] = useState(false);
    const [small, setSmall] = useState(false);
    const [tiny, setTiny] = useState(false);
    const [closable, setClosable] = useState(false);
    const [icon, setIcon] = useState(false);
    const [lifted, setLifted] = useState(false);
    const [color, setColor] = useState(colors[0]);
    const [borderType, setBorderType] = useState(borders[0]);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    backTopBtn
                    apiDescItems={items}
                    componentName="<Tag/>">
                    <Switch 
                        color="primary" 
                        check={outlined}
                        rightLabel="Outlined" 
                        className="my-10"
                        onChange={() => setOutlined(!outlined)}/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={small}
                        rightLabel="Small" 
                        className="my-10"
                        onChange={() => setSmall(!small)}/>
                    <Switch 
                        color="primary" 
                        check={tiny}
                        rightLabel="Tiny" 
                        className="my-10 ml-10"
                        onChange={() => setTiny(!tiny)}/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={closable}
                        rightLabel="Closable" 
                        className="my-10"
                        onChange={() => setClosable(!closable)}/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={icon}
                        rightLabel="Icon" 
                        className="my-10"
                        onChange={() => setIcon(!icon)}/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={lifted}
                        rightLabel="Lifted" 
                        className="my-10"
                        onChange={() => setLifted(!lifted)}/>
                    <br/>
                    <Select
                        items={colors}
                        prefix={<Icon name="brush"/>}
                        width={200}
                        dark={theme}
                        label="Color"
                        color="primary"
                        value={color}
                        className="mr-10"
                        onChange={v => setColor(v)}/>
                    <br/>
                    <Select
                        items={borders}
                        dark={theme}
                        prefix={<Icon name="shape"/>}
                        width={200}
                        label="Border type"
                        color="primary"
                        value={borderType}
                        onChange={v => setBorderType(v)}/>
                    <Divider/>
                    <div className="row align-center">
                        <Tag 
                            value="Price: 1000"
                            outlined={outlined} 
                            color={color}
                            small={!tiny && small}
                            tiny={!small && tiny}
                            borderType={borderType}
                            iconLeft={icon ? 'tenge' : ''}
                            closable={closable}
                            lifted={lifted}
                            visible={visible}
                            onClose={() => setVisible(false)}/>
                        {closable ? <Button 
                            name="Return Tag" 
                            color="info" 
                            className="ml-20" 
                            onClick={() => setVisible(true)}/> : ''}
                    </div>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}

export default TagPage;
