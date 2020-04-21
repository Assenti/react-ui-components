import React, { useState } from 'react';
import { Switch, ExpansionList, Table, Card, Collapse, Icon, Select, CopyToClipboard, List, ListItem, ThemeContext, Divider } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { countries } from '../data/countries';

const usage =
`// Usage examples
import React, { useState } from 'react';
import { ExpansionList, List, ListItem, Select, Icon, Switch } from '@assenti/react-ui-components';
const sizes = ['default', 'medium', 'large'];

function Example() {
    const [accordion, setAccordioin] = useState(false);
    const [reverse, setReverse] = useState(false);
    const [size, setSize] = useState(sizes[0]);

    return (
        <div>
            <Select
                items={sizes}
                prefix={<Icon name="format-size"/>}
                width={200}
                label="Size"
                color="primary"
                value={size}
                onChange={v => setSize(v)}/>
            <br/>
            <Switch 
                check={accordion} 
                color="primary"
                rightLabel="Accordion" 
                className="my-10"
                onChange={() => setAccordioin(!accordion)}/>
            <Switch 
                check={reverse} 
                color="primary"
                rightLabel="Reverse" 
                className="my-10"
                onChange={() => setReverse(!reverse)}/>
            <ExpansionList
                width={250} 
                size={size}
                reverse={reverse}
                defaultOpens={[0]}
                itemContent={(item, index) =>
                    <List
                        key={index}
                        size={size}>
                        {item.cities.map((subItem, iter) => 
                            <ListItem
                                key={iter} 
                                hover
                                item={subItem}/>
                        )}
                    </List>
                }
                accordion={accordion}
                titleKey="country"
                items={countries}/>
        </div>
    )
)`

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'items', 
        description: 'Expansion list items', 
        default: '', 
        type: 'array',
        value: ''
    },
    { 
        property: 'titleKey', 
        description: 'Set if items passed as array of objects', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'itemContent', 
        description: 'Set item content (invokes as a function that return item and index)', 
        default: '', 
        type: 'ReactNode',
        value: ''
    },
    { 
        property: 'onItemClick', 
        description: 'Invokes in item click (return item and index)', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'accordion', 
        description: 'Set accordion mode to expansion list', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'size', 
        description: 'Set expanionList size', 
        default: '', 
        type: 'string',
        value: 'medium | large'
    },
    { 
        property: 'width', 
        description: 'Set expanionList width', 
        default: '', 
        type: 'string | number',
        value: ''
    },
    { 
        property: 'reverse', 
        description: 'Reverse title and icon positions', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'defaultOpens', 
        description: 'Pass default opened items (has no effect in accordion mode)', 
        default: '', 
        type: 'number[]',
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
const sizes = ['default', 'medium', 'large'];

const ExpansionListPage = () => {
    const [accordion, setAccordioin] = useState(false);
    const [reverse, setReverse] = useState(false);
    const [size, setSize] = useState(sizes[0]);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className="rui-page">
                    <div className="row align-center space-between">
                        <div className="row">
                            <div className="rui-page-title">{'<ExpansionList/>'} Component</div>
                        </div>
                    </div>
                    <Card dark={theme} header={<h4>Usage</h4>}>
                        <Select
                            items={sizes}
                            prefix={<Icon name="format-size"/>}
                            width={200}
                            label="Size"
                            dark={theme}
                            color="primary"
                            value={size}
                            onChange={v => setSize(v)}/>
                        <br/>
                        <Switch 
                            check={accordion} 
                            color="primary"
                            rightLabel="Accordion" 
                            className="my-10"
                            onChange={() => setAccordioin(!accordion)}/>
                        <Switch 
                            check={reverse} 
                            color="primary"
                            rightLabel="Reverse" 
                            className="my-10"
                            onChange={() => setReverse(!reverse)}/>
                        <Divider/>
                        <ExpansionList
                            width={250} 
                            size={size}
                            reverse={reverse}
                            dark={theme}
                            defaultOpens={[0]}
                            itemContent={(item, index) =>
                                <List
                                    key={index}>
                                    {item.cities.map((subItem, iter) => 
                                        <ListItem
                                            key={iter} 
                                            hover
                                            item={subItem}/>
                                    )}
                                </List>
                            }
                            accordion={accordion}
                            titleKey="country"
                            items={countries}/>
                        <Collapse 
                            icon="code"
                            dark={theme}
                            className="mx-10" 
                            iconSize={18}
                            extra={<CopyToClipboard 
                                defaultText="Copy code" 
                                text={usage} 
                                dark={theme}
                                className="mr-10"/>} 
                            contentStyles={{ padding: 0 }}
                            tooltip="Show/Hide Code">
                            <SyntaxHighlighter 
                                language="jsx" 
                                style={theme ? tomorrow : coy}>
                                {usage}
                            </SyntaxHighlighter> 
                        </Collapse>
                    </Card>
                    <h2>API</h2>
                    <Card className="pa-0">
                        <Table
                            dark={theme}
                            headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                            items={items}
                            index={true}
                            itemTitles={keys}/>
                    </Card>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}
export default ExpansionListPage;