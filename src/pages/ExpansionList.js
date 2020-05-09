import React, { useState } from 'react';
import { Switch, ExpansionList, Icon, Select, List, ThemeContext, Divider } from '../components';
import { countries } from '../data/countries';
import Page from '../layouts/Page';

const usage =
`// Usage examples
import React from 'react';
import { ExpansionList, List } from '@assenti/react-ui-components';

function Example() {
    return (
        <>
            <ExpansionList
                width={250} 
                defaultOpens={[0]}
                itemContent={(item, index) =>
                    <List
                        key={index}
                        size={size}>
                        {item.cities.map((subItem, iter) => 
                            <List.Item
                                key={iter} 
                                hover
                                item={subItem}/>
                        )}
                    </List>
                }
                titleKey="country"
                items={countries}/>
        </>
    )
)`

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
                <Page
                    usage={usage}
                    apiDescItems={items}
                    componentName="<ExpansionList/>">
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
                                    <List.Item
                                        key={iter} 
                                        hover
                                        item={subItem}/>
                                )}
                            </List>
                        }
                        accordion={accordion}
                        titleKey="country"
                        items={countries}/>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default ExpansionListPage;