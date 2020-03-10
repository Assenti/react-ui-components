import React, { createRef } from 'react';
import { BackTopBtn, Card, Table, Collapse, Icon, List, ListItem, CopyToClipboard } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'setRef', 
        description: 'Pass the reference of parent element to component',
        default: '', 
        type: '',
        value: ''
    },
    { 
        property: 'breakpoint', 
        description: 'Set scrollY breakpoint when button should appear',
        default: '60px', 
        type: 'number',
        value: ''
    },
    { 
        property: 'size', 
        description: 'Set button size',
        default: '', 
        type: 'string',
        value: 'medium | large'
    },
    { 
        property: 'tooltip', 
        description: 'Set button tooltip',
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'offsetX', 
        description: 'Set offset from right',
        default: '25px', 
        type: 'number | string',
        value: ''
    },
    { 
        property: 'offsetY', 
        description: 'Set offset from bottom',
        default: '25px', 
        type: 'number | string',
        value: ''
    },
    { 
        property: 'dark',
        description: 'Set dark mode', 
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
]

const usage =
`// Usage examples
import React, { useRef } from 'react';
import { BackTopBtn, List, ListItem, Icon } from '@assenti/rui-components';

const countries = [
    { country: 'Kazakhstan', cities: [ 'Nur-Sultan', 'Almaty', 'Shymkent' ] }, 
    { country: 'Russia', cities: ['Moscow', 'St. Petersburg', 'Krasnodar'] }, 
    { country: 'USA', cities: ['Washington, D.C.', 'New York City', 'San Francisco'] }, 
    { country: 'United Kingdom', cities: ['London', 'York', 'Manchester'] }, 
    { country: 'Canada', cities: ['Ottawa', 'Toronto', 'Vancouver'] }, 
    { country: 'Germany', cities: ['Berlin', 'Munich', 'Hamburg'] }, 
    { country: 'France', cities: ['Paris', 'Nice', 'Marselle'] }, 
    { country: 'China', cities: ['Beijing', 'Shanghai', 'Shenzhen'] },
    { country: 'Japan', cities: ['Tokyo', 'Osaka', 'Kyoto'] },
    { country: 'South Korea', cities: ['Seoul', 'Busan', 'Daegu'] }
]

function Example() {
    const parentRef = useRef();

    return (
        <div ref={parentRef}>
            <List size="large" header="Countries">
                {countries.map((item, index) => 
                    <ListItem
                        key={index}
                        hover
                        icon="flag" 
                        item={item.country}
                        subTitle={
                            <div className="row align-center">
                                <Icon name="star-outline" className="mr-10"/>
                                {item.cities[0]}
                            </div>
                        }/>
                )}
            </List>
            <BackTopBtn setRef={parentRef} dark/>
        </div>
    )
}`

const countries = [
    { country: 'Kazakhstan', cities: [ 'Nur-Sultan', 'Almaty', 'Shymkent' ] }, 
    { country: 'Russia', cities: ['Moscow', 'St. Petersburg', 'Krasnodar'] }, 
    { country: 'USA', cities: ['Washington, D.C.', 'New York City', 'San Francisco'] }, 
    { country: 'United Kingdom', cities: ['London', 'York', 'Manchester'] }, 
    { country: 'Canada', cities: ['Ottawa', 'Toronto', 'Vancouver'] }, 
    { country: 'Germany', cities: ['Berlin', 'Munich', 'Hamburg'] }, 
    { country: 'France', cities: ['Paris', 'Nice', 'Marselle'] }, 
    { country: 'China', cities: ['Beijing', 'Shanghai', 'Shenzhen'] },
    { country: 'Japan', cities: ['Tokyo', 'Osaka', 'Kyoto'] },
    { country: 'South Korea', cities: ['Seoul', 'Busan', 'Daegu'] }
]

const BackTopBtnPage = () => {
    const blockref = createRef();
    const api = createRef();
    const rows = []
    for (let i = 0; i < 20; i++) {
        rows.push(i)
    }

    const goToApi = () => {
        if (api.current) api.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <div className="rui-page" ref={blockref}>
            <div className="row align-center space-between">
                <div className="rui-page-title">{'<BackTopBtn/>'} Component</div>
                <div className="rui-link fz-13 fw-bold" onClick={goToApi}>API</div>
            </div>
            <div className="row align-center">Scroll down <Icon className="ml-5" name="arrow-down-bold" size={18}/></div>
            <Card outlined title="Usage" className="mt-20">
                <List header="Countries">
                    {countries.map((item, index) => 
                        <ListItem
                            key={index}
                            hover
                            noDivider
                            icon="flag" 
                            item={item.country}
                            subTitle={item.cities[0]}/>
                    )}
                </List>
                <Collapse 
                    icon="code" 
                    iconSize={18}
                    extra={<CopyToClipboard defaultText="Copy code" text={usage} className="mr-10"/>}  
                    tooltip="Show/Hide Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usage}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <BackTopBtn dark setRef={blockref} size="medium" tooltip="Up"/>
            <h2 ref={api}>API</h2>
            <Table
                bordered
                headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                items={items}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}
export default BackTopBtnPage;