import React, { useState } from 'react';
import { Switch, ExpansionList, List, ThemeContext, Divider } from '../components';
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
                hover
                items={countries}
                titleContent={(item) => 
                    <List.Item
                        icon="map-marker" 
                        item={item.country}/>    
                }
                itemContent={(item) =>
                    <List>
                        {item.cities.map((subItem) => 
                            <List.Item
                                hover
                                item={subItem}/>
                        )}
                    </List>
                }/>
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
        property: 'titleContent', 
        description: 'Set title content (invokes as a function that return item and index)', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'itemContent', 
        description: 'Set item content (invokes as a function that return item and index)', 
        default: '', 
        type: 'function',
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
        property: 'width', 
        description: 'Set expanionList width', 
        default: '', 
        type: 'string | number',
        value: ''
    },
    { 
        property: 'defaultOpens', 
        description: 'Pass default opened items (has no effect in accordion mode)', 
        default: '', 
        type: 'number[]',
        value: ''
    },
    { 
        property: 'triggerIcon', 
        description: 'Set custom icon from icons list', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'triggerIconColor', 
        description: 'Set trigger icon color', 
        default: '', 
        type: 'string',
        value: 'hex | rgb(a)'
    },
    { 
        property: 'triggerIconSize', 
        description: 'Set trigger icon size', 
        default: '', 
        type: 'number | string',
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

const ExpansionListPage = () => {
    const [accordion, setAccordioin] = useState(false);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    apiDescItems={items}
                    componentName="<ExpansionList/>">
                    <Switch 
                        check={accordion} 
                        color="primary"
                        leftLabel="Default"
                        rightLabel="Accordion" 
                        className="my-10"
                        onChange={() => setAccordioin(!accordion)}/>
                    <Divider/>
                    <ExpansionList
                        width={250} 
                        hover
                        dark={theme}
                        defaultOpens={[0]}
                        titleContent={(item) => 
                            <List.Item
                                icon="map-marker" 
                                item={item.country}/>    
                        }
                        itemContent={(item) =>
                            <List>
                                {item.cities.map((subItem, iter) => 
                                    <List.Item
                                        hover
                                        item={subItem}/>
                                )}
                            </List>
                        }
                        accordion={accordion}
                        items={countries}/>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default ExpansionListPage;