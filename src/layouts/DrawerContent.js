import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { List, ListItem, Icon, Drawer, Switch, ThemeContext, AutoComplete, Tag } from '../components';
import { compare } from '../components';

export const DrawerContent = (props) => {
    const history = useHistory();
    const [list, setList] = useState(true);

    const handleItemClick = (item) => {
        history.push(item.path)
    }

    const sortedRoutes = () => {
        let filtered = props.items
                            .sort((a, b) => compare(a, b, 'name', 'asc'))
                            .filter(item => item.path !== '/' && 
                                            item.path !== '/colors' &&
                                            item.path !== '/helper')
        return filtered;
    }
    
    return (
        <ThemeContext.Consumer>
            {theme => (
                <Drawer
                    drawer={props.drawer}
                    fullHeight
                    dark={theme}
                    elevated
                    onClose={() => props.onClose()}
                    headerCentered
                    header={<Icon 
                        name="react" 
                        size={30}
                        className="rotating" 
                        color="#61dafb"/>}>
                    <div className={theme ? 
                        'row px-5 justify-center sticky bg-night' : 
                        'row px-5 justify-center sticky bg-lightgray'} 
                        style={{ top: 40 }}>
                        <AutoComplete
                            width="100%"
                            size="medium"
                            maxHeight="calc(100vh - 200px)"
                            items={sortedRoutes()}
                            onItemClick={item => handleItemClick(item)}
                            itemKey="name"
                            dark={theme}
                            prefix={<Icon name="search"/>}
                            whiteBackground
                            borderType="rounded"
                            placeholder="Search components"
                            listHeader={
                                <div className="fz-9 text-info py-10">
                                    Let's find your component
                                </div>}
                            footer={(filteredLength) => 
                                <div className="text-right fz-8 px-10 py-15">
                                    {filteredLength} results
                                </div>}/>
                    </div>
                    <List size="medium" dark={theme}>
                        <ListItem
                            right
                            icon="rocket"
                            isActiveItem={'/' === window.location.pathname}
                            onClick={() => handleItemClick({ path: '/'})}
                            itemTitle="name"
                            hover
                            noDivider
                            item="Getting started"/>
                        <ListItem
                            right
                            noDivider
                            icon="language-css-3"
                            isActiveItem={'/helper' === window.location.pathname}
                            onClick={() => handleItemClick({ path: '/helper'})}
                            itemTitle="name"
                            hover
                            item="Helper CSS classes"/>
                        <ListItem
                            noDivider
                            icon="toy-brick"
                            onClick={() => setList(!list)}
                            hover
                            item={<span>Components 
                                <small className="fw-bold ml-10 text-info">{sortedRoutes().length}</small>
                            </span>}
                            controls={<Icon 
                                        onClick={() => setList(!list)}
                                        size={20} 
                                        name={list ? 'chevron-up' : 'chevron-down'}/>}/>
                    </List>
                    {list ? 
                    <List size="medium" className="pl-35" dark={theme}>
                        {sortedRoutes().map((item, index) => 
                            <ListItem
                                key={index}
                                right
                                noDivider
                                icon={item.icon ? item.icon : ''}
                                roundedActive
                                isActiveItem={item.path === window.location.pathname}
                                onClick={() => handleItemClick(item)}
                                className="no-select"
                                hover
                                item={item.name}
                                controls={item.updated ? 
                                    <Tag value="updated" borderType="rounded" tiny/> 
                                        : (item.new ? <Tag value="new" borderType="rounded" tiny/> : null)}/>
                        )}
                    </List> : ''}
                    <div className="row justify-center py-15" 
                        style={{ borderTop: '1px solid lightgray'}}>
                        <Switch color="primary" 
                            check={theme}
                            leftIcon="sun"
                            leftIconColor={props.dark ? '#fff' : ''}
                            rightIconColor={props.dark ? '#fff' : ''}
                            rightIcon="moon" 
                            onChange={() => props.onSwitch()}/>
                    </div>
                </Drawer>
            )}
        </ThemeContext.Consumer>
    )
}