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
        <>
            <Collapse 
                title={<span className="mx-10 fz-10 fw-bold">Marvel Avengers</span>}
                defaultState 
                border 
                onChange={() => console.log('Do smth...')}
                dark={theme}
                tooltip="Expand/Collapse">
                <List 
                    size="medium"
                    className="py-10"
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
        </>
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
        property: 'onChange',
        description: 'Invokes on collapse toggling (return current state)', 
        default: '', 
        type: 'function',
        value: ''
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
        property: 'customToggler',
        description: 'Set custom toggler element', 
        default: '', 
        type: 'ReactNode',
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
                    <Collapse 
                        title={<span className="mx-10 fz-10 fw-bold">Marvel Avengers</span>}
                        defaultState 
                        border 
                        onChange={() => console.log('Do smth...')}
                        dark={theme}
                        tooltip="Expand/Collapse">
                        <List 
                            size="medium"
                            className="py-10"
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
