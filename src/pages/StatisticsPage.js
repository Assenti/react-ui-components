import React from 'react';
import Page from '../layouts/Page';
import { Statistics, Icon, Card, Tag, ThemeContext } from '../components';

const items = [
    { 
        property: 'title', 
        description: 'Set statisctics title',
        default: '', 
        type: 'ReactNode',
        value: ''
    },
    { 
        property: 'value', 
        description: 'Set statisctics value',
        default: '', 
        type: 'number',
        value: ''
    },
    { 
        property: 'fractions', 
        description: 'Set statisctics value fractions length after the integer',
        default: '0', 
        type: 'number',
        value: ''
    },
    { 
        property: 'valueSize', 
        description: 'Set statisctics value font size',
        default: '', 
        type: 'number',
        value: ''
    },
    { 
        property: 'valueColor', 
        description: 'Set statisctics value color',
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'autoFill', 
        description: 'Set value autofill mode',
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'step', 
        description: 'Set autofilling step size',
        default: '10', 
        type: 'number',
        value: ''
    },
    { 
        property: 'interval', 
        description: 'Set autofilling interval',
        default: '30ms', 
        type: 'number',
        value: ''
    },
    { 
        property: 'onDone', 
        description: 'Invoked on value autofill finishes (has effect with autoFill mode)',
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'financial', 
        description: 'Set a financial display of the number',
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'prefix', 
        description: 'Set prefix',
        default: '', 
        type: 'ReactNode',
        value: ''
    },
    { 
        property: 'suffix', 
        description: 'Set suffix',
        default: '', 
        type: 'ReactNode',
        value: ''
    },
    { 
        property: 'align', 
        description: 'Set vertical alignment',
        default: '', 
        type: 'string',
        value: 'top | center | bottom'
    },
    { 
        property: 'style',
        description: 'Set a custom inline styles', 
        default: '', 
        type: 'object',
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
`// Usage example
import React from 'react';
import { Statistics, Tag, Icon } from '../components';

function Example() {
    return (
        <>
            <Statistics
                title={
                    <Tag
                        value="Downloads, p/w" 
                        color="success"
                        className="ma-0"
                        tiny/>}
                align="bottom"
                value={1000}
                valueColor="#1aaa55"
                valueSize={30}
                fractions={2}
                autoFill
                onDone={() => console.log('DONE')}
                prefix={<Icon name="download"/>}/>
        </>
    )
}`

const StatisticsPage = () => {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    apiDescItems={items}
                    componentName="<Statistics/>">
                    <div className="row align-top wrap">
                        <Card dark={theme} width={185} className="my-5 mr-10">
                            <Statistics
                                title="Speed of light, m/s"
                                value={299792458}
                                financial
                                valueSize={24}/>
                        </Card>
                        <Card dark={theme} width={160} className="my-5 mr-10">
                            <Statistics
                                title="Almaty, pop. (M)"
                                align="bottom"
                                value={2}
                                valueColor="#42a5f5"
                                prefix={
                                    <Icon 
                                        name="account-group" 
                                        className="mr-5" 
                                        color="#42a5f5"
                                        size={35}/>}/>
                        </Card>
                        <Card dark={theme} width={180} className="my-5 mr-10">
                            <Statistics
                                title={
                                    <Tag
                                        value="Downloads, p/w" 
                                        color="success"
                                        className="ma-0"
                                        tiny/>}
                                align="bottom"
                                value={1000}
                                valueColor="#1aaa55"
                                valueSize={30}
                                fractions={2}
                                autoFill
                                onDone={() => console.log('DONE')}
                                prefix={<Icon name="download"/>}/>
                        </Card>
                        <Card dark={theme} width={160} className="my-5">
                            <Statistics
                                title="Downloads trend"
                                align="bottom"
                                value={15.15}
                                valueColor="red"
                                valueSize={35}
                                suffix={<small style={{ color: 'red' }}>%</small>}
                                prefix={
                                    <Icon 
                                        name="arrow-down" 
                                        color="red"/>}/>
                        </Card>
                    </div>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}

export default StatisticsPage;