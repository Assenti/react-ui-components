import React from 'react';
import { List, ListItem, ThemeContext } from '../components';
import { countries } from '../data/countries';
import Page from '../layouts/Page';

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

const BackTopBtnPage = () => {
    const rows = []
    for (let i = 0; i < 20; i++) {
        rows.push(i)
    }

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    componentName="<BackTopBtn/>"
                    backTopBtn
                    apiDescItems={items}>
                    <List header="Countries" dark={theme}>
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
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default BackTopBtnPage;