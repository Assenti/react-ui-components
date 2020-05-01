import React, { useState, useEffect } from 'react';
import { List, ListItem, Icon, Drawer, ThemeContext, AutoComplete, Tag } from '../components';
import { compare } from '../components';

export const DrawerContent = (props) => {
    const [list, setList] = useState(false);

    const handleItemClick = (item) => {
        if (item.path.includes('http')) {

        } else window.location.href = item.path
    }

    const sortedRoutes = () => {
        let filtered = props.items
                            .sort((a, b) => compare(a, b, 'name', 'asc'))
                            .filter(item => item.path !== '/' && 
                                            item.path !== '/layouts' &&
                                            item.path !== '/icons' &&
                                            item.path !== '/helper')
        return filtered;
    }

    const simpleItems = [
        { name: 'Getting started', path: '/', icon: 'rocket' },
        { name: 'Helper CSS classes', path: '/helper', icon: 'language-css-3' },
        { name: 'Icons', path: '/icons', icon: 'check' },
        // { name: 'Layouts', path: '/layouts', icon: 'dashboard-outline' },
    ]

    useEffect(() => {
        for (const item of sortedRoutes()) {
            if (item.path === window.location.pathname) setList(true)
        }
    }, [])
    
    return (
        <ThemeContext.Consumer>
            {theme => (
                <Drawer
                    drawer={props.drawer}
                    height="calc(100vh - 50px)"
                    dark={theme}
                    lifted
                    onClose={() => props.onClose()}>
                    <div className="row justify-center py-5">
                        <Icon 
                            name="react" 
                            size={50}
                            className="rotating" 
                            color="#61dafb"/>
                    </div>
                    <AutoComplete
                        style={{ width: '100%' }}
                        size="medium"
                        className="px-5 py-5 sticky"
                        contentMaxHeight="calc(100vh - 200px)"
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
                    <List size="medium" dark={theme}>
                        {simpleItems.map((item, index) => 
                            <ListItem
                                key={index}
                                right
                                icon={item.icon}
                                isActiveItem={item.path === window.location.pathname}
                                onClick={() => handleItemClick({ path: item.path })}
                                itemTitle="name"
                                hover
                                noDivider
                                item={item.name}/>
                        )}
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
                                                : (item.new ? <Tag value="new" color="success" borderType="rounded" tiny/> : null)}/>
                                )}
                            </List> : ''}
                        <ListItem
                            right
                            noDivider
                            icon="checklist"
                            href="https://github.com/Assenti/react-ui-components/blob/master/README.md#todo"
                            onClick={() => handleItemClick({ path: '/todos'})}
                            itemTitle="name"
                            hover
                            item="TODOs"/>
                    </List>
                </Drawer>
            )}
        </ThemeContext.Consumer>
    )
}