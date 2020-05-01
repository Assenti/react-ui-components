import React, { useState } from 'react';
import { FloatingBtn, Card, Dialog, Select, Icon, Switch, ThemeContext, Divider } from '../components';
import manImage from '../img/man.png';
import Page from '../layouts/Page';

const items = [
    { 
        property: 'icon', 
        description: 'Set floating button icon',
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'color', 
        description: 'Set floating button color',
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'onClick', 
        description: 'Invokes on button click (return click event object)',
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'position', 
        description: 'Set floating button position',
        default: 'bottom-right', 
        type: 'string',
        value: 'top-left | top-right | bottom-left | bottom-right'
    },
    { 
        property: 'size', 
        description: 'Set button size',
        default: 'medium', 
        type: 'string',
        value: 'medium | large'
    },
    { 
        property: 'color', 
        description: 'Set button color',
        default: 'primary', 
        type: 'string',
        value: 'primary | info | success | error'
    },
    { 
        property: 'tooltip', 
        description: 'Set button tooltip',
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'tooltipPosition', 
        description: 'Set tooltip position',
        default: 'top', 
        type: 'string',
        value: 'top | bottom | right | left'
    },
    { 
        property: 'offsetX', 
        description: 'Set offset from right',
        default: '5px', 
        type: 'number | string',
        value: ''
    },
    { 
        property: 'offsetY', 
        description: 'Set offset from bottom',
        default: '5px', 
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
        property: 'light',
        description: 'Set light mode', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    }
]

const usage =
`// Usage example
import React, { useState } from 'react';
import { FloatingBtn, Card, Dialog } from '@assenti/rui-components';

function Example() {
    const [dialog, setDialog] = useState(false);

    return (
        <>
            <Card 
                className="relative"
                width={200} 
                img={manImage}
                footer={<h4 className="text-center">John Doe</h4>}>
                <FloatingBtn 
                    icon="plus"
                    size="large"
                    tooltip="Add friend"
                    color="primary"
                    onClick={() => setDialog(true)}/>
            </Card>
            <Dialog 
                visible={dialog}
                icon="account-plus"
                iconColor="#1678c2"
                titleColor="#1678c2" 
                onCancel={() => setDialog(false)}
                cancelText="Nope"
                onConfirm={() => setDialog(false)}
                confirmText="Yeap"
                title="New friend"
                description="Add John to your friends list?"/>
        </>
    )
}`
const colors = ['primary', 'info', 'success', 'error', 'black', 'secondary'];
const positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

const FloatingBtnPage = () => {
    const [dialog, setDialog] = useState(false);
    const [tooltip, setTooltip] = useState(false);
    const [color, setColor] = useState(colors[0]);
    const [position, setPosition] = useState(positions[3]);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    apiDescItems={items}
                    componentName="<FloatingBtn/>">
                    <Select
                        items={colors}
                        dark={theme}
                        prefix={<Icon name="brush"/>}
                        width={200}
                        label="Color theme"
                        color="primary"
                        value={color}
                        onChange={v => setColor(v)}/>
                    <br/>
                    <br/>
                    <Select
                        items={positions}
                        dark={theme}
                        prefix={<Icon name="chart-ppf"/>}
                        width={200}
                        label="Position"
                        color="primary"
                        value={position}
                        onChange={v => setPosition(v)}/>
                    <br/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={tooltip}
                        rightLabel="Tooltip"
                        className="my-10"
                        onChange={() => setTooltip(!tooltip)}/>
                    <Divider/>
                    <br/>
                    <Card 
                        className="relative"
                        style={{ width: 200 }}
                        dark={theme} 
                        footer={<h4 className="text-center">John Doe</h4>}>
                        <img style={{ width: '100%' }} src={manImage} alt="avatar"/>
                        <FloatingBtn 
                            icon="plus"
                            size="large"
                            tooltip={tooltip ? 'Add Friend' : null}
                            color={color}
                            position={position} 
                            onClick={() => setDialog(true)}/>
                    </Card>
                    <Dialog 
                        visible={dialog}
                        dark={theme}
                        icon="account-plus"
                        iconColor="#1678c2"
                        titleColor="#1678c2" 
                        onCancel={() => setDialog(false)}
                        cancelText="Nope"
                        onConfirm={() => setDialog(false)}
                        confirmText="Yeap"
                        title="New friend"
                        description="Add John to your friends list?"/>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default FloatingBtnPage;