import React, { useState } from 'react';
import { 
    ThemeContext, 
    Header, 
    Drawer, 
    Icon, 
    Dropdown, 
    Button, 
    List, 
    Avatar, 
    Divider,
    Card,
    Statistics,
    Tag, 
    Tooltip} from '../components';
import { modulesDash as modules } from '../data/modules';
import manImage from '../img/man.png';

const LayoutsPage = () => {
    const headerHeight = 50;
    const [drawer, setDrawer] = useState(true);
    const [min, setMin] = useState(false);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Card height={500}>
                    <Header
                        leftControl 
                        onLeftControl={() => setDrawer(!drawer)}
                        lifted
                        dark={theme}
                        height={headerHeight} 
                        title="Dashboard Layout"
                        rightSide={
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
                                                    item={item.name} 
                                                    icon={item.icon}/>
                                            )}
                                        </List>
                                    </div>
                                }
                                trigger={<Button dark={theme} light={!theme} icon="account"/>}/>
                        }
                        />
                    <div style={{ height: `calc(100% - ${headerHeight}px`}} className={theme ? 'rui-app dark' : 'rui-app'}>
                        <Drawer
                            drawer={drawer}
                            height="100%"
                            dark={theme}
                            lifted
                            min={min}
                            collapsable
                            onResize={() => setMin(!min)}
                            onClose={() => setDrawer(false)}>
                            <List size="medium" dark={theme}>
                                {modules.map((item, index) => 
                                    <List.Item 
                                        key={index}
                                        hover
                                        isActiveItem={index === 0}
                                        noDivider
                                        tooltip={min ? item.name : ''}
                                        tooltipPosition="right" 
                                        item={min ? '' : item.name} 
                                        icon={item.icon}/>
                                )}
                            </List>
                        </Drawer>
                        <div style={{ height: '100%' }} className="rui-content pa-10">
                            <div className="row wrap" style={{ height: '50%' }}>
                                <div className="col pa-5">
                                    <Card 
                                        height="100%"
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
                                        height="100%" 
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
                                        height="100%">
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
                                </div>
                                <div className="col pa-5">
                                    <Card 
                                        dark={theme}
                                        height="100%">
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
                    </div>
                </Card>
            )}
        </ThemeContext.Consumer>
    )
}

export default LayoutsPage;