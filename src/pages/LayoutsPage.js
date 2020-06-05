import React, { useState } from 'react';
import { 
    ThemeContext, 
    Header, 
    Icon, 
    Dropdown, 
    Button, 
    List, 
    Avatar, 
    Divider,
    Card,
    Statistics,
    Tag, 
    Sidebar,
    Tooltip,
    Dialog} from '../components';
import { modulesDash as modules } from '../data/modules';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy, tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import manImage from '../img/man.png';

const usage =
``

const LayoutsPage = () => {
    const headerHeight = 50;
    const [dialog, setDialog] = useState(false);
    const [min, setMin] = useState(false);
    const [downloads, setDownloads] = useState(1000);
    const [current, setCurrent] = useState(modules[0].name);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <>
                <p>Here is an example how you can combine and use components</p><br/>
                <Card style={{ height: 600 }} className="pa-0">
                    <Header
                        lifted
                        dark={theme}
                        padding="0 10px"
                        height={headerHeight}>
                        <h4 className="row align-center my-0 text-dark"><Icon className="mr-10" name="dashboard-outline"/> Dashboard Layout</h4>
                        <Dropdown
                            dark={theme}
                            width={200}
                            position="right"
                            content={
                                <div className="pa-10">
                                    <div className="text-center">
                                        <Avatar img={manImage} borderType="rounded" height={100} dark={theme}/>
                                        <h4>John Doe</h4>
                                    </div>
                                    <Divider/>
                                    <List dark={theme}>
                                        {modules.map((item, index) =>
                                            <List.Item 
                                                key={index}
                                                hover
                                                noDivider 
                                                isActiveItem={current === item.name}
                                                item={item.name} 
                                                icon={item.icon}
                                                onClick={() => {
                                                    if (item.name === 'Exit') setDialog(true)
                                                    else setCurrent(item.name)
                                                }}/>
                                        )}
                                    </List>
                                </div>
                            }
                            trigger={<Button dark={theme} light={!theme} icon="account"/>}/>
                    </Header>
                    <div className="row" style={{ height: `calc(100% - ${headerHeight}px`}}>
                        <Sidebar
                            height="100%"
                            dark={theme}
                            lifted
                            min={min}
                            collapsable
                            onToggle={() => setMin(!min)}>
                            <List size="medium" dark={theme}>
                                {modules.map((item, index) => 
                                    <List.Item 
                                        key={index}
                                        hover
                                        isActiveItem={current === item.name}
                                        noDivider
                                        tooltip={min ? item.name : ''}
                                        tooltipPosition="right" 
                                        item={min ? '' : item.name} 
                                        icon={item.icon}
                                        onClick={() => {
                                            if (item.name === 'Exit') setDialog(true)
                                            else setCurrent(item.name)
                                        }}/>
                                )}
                            </List>
                        </Sidebar>
                        <div style={{ height: '100%' }} className="rui-content pa-10">
                            <div className="row wrap" style={{ height: '50%' }}>
                                <div className="col pa-5">
                                    <Card 
                                        style={{ height: '100%' }}
                                        dark={theme}>
                                        <Statistics
                                            title="Speed of light, m/s"
                                            value={299792458}
                                            financial
                                            valueSize={24}/>
                                        <div className="text-center mt-10">
                                            <Icon
                                                name="chart-donut"
                                                color="indigo"
                                                size={90}/>
                                        </div>
                                    </Card>
                                </div>
                                <div className="col pa-5">
                                    <Card
                                        style={{ height: '100%' }}
                                        dark={theme}>
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
                                </div>
                            </div>
                            <div className="row" style={{ height: '50%' }}>
                                <div className="col pa-5">
                                    <Card 
                                        dark={theme}
                                        style={{ height: '100%' }}>
                                        <Statistics
                                            title={
                                                <div className="row space-between align-center">
                                                    <Tag
                                                        value="Downloads, p/w" 
                                                        color="success"
                                                        className="ma-0"
                                                        tiny/>
                                                    <Tooltip tooltip="Refresh">
                                                        <Button
                                                            icon="refresh"
                                                            light
                                                            onClick={() => setDownloads(1000)}/>
                                                    </Tooltip>
                                                </div>
                                            }
                                            align="bottom"
                                            value={downloads}
                                            valueColor="#1aaa55"
                                            valueSize={30}
                                            fractions={2}
                                            autoFill
                                            step={20}
                                            onDone={() => console.log('DONE')}
                                            prefix={<Icon name="download" color="#1aaa55"/>}/>
                                    </Card>
                                </div>
                                <div className="col pa-5">
                                    <Card 
                                        dark={theme}
                                        style={{ height: '100%' }}>
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
                            </div>
                        
                        </div>
                        <Dialog
                            dark={theme}
                            title="Do you want to exit ?"
                            visible={dialog}
                            onCancel={() => setDialog(false)}
                            onConfirm={() => setDialog(false)}/>
                    </div>
                    <SyntaxHighlighter 
                        language="jsx" 
                        style={theme ? tomorrow : coy}>
                        {usage}
                    </SyntaxHighlighter>
                </Card>
                </>
            )}
        </ThemeContext.Consumer>
    )
}

export default LayoutsPage;