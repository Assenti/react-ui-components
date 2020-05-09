import React from 'react';
import { Collapse, List, ThemeContext } from '../components'
import Page from '../layouts/Page';

const usage = 
`// Usage examples
import React from 'react';
import { Collapse, List } from '@assenti/react-ui-components';

const names = [
    { name: 'Steve Rogers', hero: 'Captain America', icon: 'shield-account', check: false }, 
    { name: 'Peter Parker', hero: 'Spider man', icon: 'shield-account', check: false }, 
    { name: 'Tony Stark', hero: 'Iron man', icon: 'shield-account', check: false }, 
    { name: 'Bruce Benner', hero: 'Hulk', icon: 'shield-account', check: false }
];

function Example() {
    return (
        <div>
            <Collapse defaultState={true} border>
                <p className="px-10 fz-9 fw-bold">Some Article</p>
                <p className="pa-10">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Collapse>
            <br/>
            <Collapse 
                title={<span className="mx-10 fz-10 fw-bold">Marvel Avengers</span>}
                defaultState={true} 
                border 
                tooltip="Expand/Collapse">
                <List 
                    size="medium"
                    hover>
                    {names.map((item, index) => 
                        <List.Item 
                            key={index} 
                            item={item.hero}
                            icon={item.icon}
                            hover/>
                    )}
                </List>
            </Collapse>
        </div>
    )
}`
const items = [
    { 
        property: 'defaultState',
        description: 'Set default state of collapse', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'border',
        description: 'Set border and highlight trigger area', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'title',
        description: 'Set collapse title', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'icon',
        description: 'Set icon from icons list', 
        default: 'chevron-down', 
        type: 'string',
        value: ''
    },
    { 
        property: 'iconPosition', 
        description: 'Set collapse icon position', 
        default: 'right', 
        type: 'string',
        value: 'right | left'
    },
    { 
        property: 'iconColor',
        description: 'Set icon color', 
        default: 'gray', 
        type: 'string',
        value: ''
    },
    { 
        property: 'iconSize',
        description: 'Set icon size', 
        default: '24px', 
        type: 'number',
        value: ''
    },
    { 
        property: 'extra',
        description: 'Set extra', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'dark',
        description: 'Set dark mode', 
        default: '', 
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

const names = [
    { name: 'Steve Rogers', hero: 'Captain America', icon: 'shield-account', check: false }, 
    { name: 'Peter Parker', hero: 'Spider man', icon: 'shield-account', check: false }, 
    { name: 'Tony Stark', hero: 'Iron man', icon: 'shield-account', check: false }, 
    { name: 'Bruce Benner', hero: 'Hulk', icon: 'shield-account', check: false }
];

const CollapsePage = () => {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    apiDescItems={items}
                    componentName="<Collapse/>">
                    <Collapse dark={theme} defaultState border>
                        <p className="px-10 fz-9 fw-bold">Some Article</p>
                        <p className="pa-10">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Collapse>
                    <br/>
                    <Collapse 
                        title={<span className="mx-10 fz-10 fw-bold">Marvel Avengers</span>}
                        defaultState 
                        border 
                        dark={theme}
                        tooltip="Expand/Collapse">
                        <List 
                            size="medium"
                            hover>
                            {names.map((item, index) => 
                                <List.Item 
                                    key={index} 
                                    item={item.hero}
                                    icon={item.icon}
                                    hover/>
                            )}
                        </List>
                    </Collapse>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}

export default CollapsePage;
