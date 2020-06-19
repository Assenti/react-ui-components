import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { List, Icon, ThemeContext, AutoComplete, Tag, Badge, Collapse, compare } from '../components';

export const Content = (props) => {
    const [list, setList] = useState(false);
    const [active, setActive] = useState('');
    const history = useHistory();

    const handleItemClick = (item) => {
        if (item.path.includes('http')) return;
        else {
            history.push(item.path)
            setActive(item.path)
        } 
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
        { name: 'Icons', path: '/icons', icon: 'like' },
        // { name: 'Layouts', path: '/layouts', icon: 'dashboard-outline' },
    ]

    useEffect(() => {
        for (const item of sortedRoutes()) {
            if (item.path === history.location.pathname) {
                setList(true)
            }
        }
    }, [])
    
    return (
        <ThemeContext.Consumer>
            {theme => (
                <>
                    <div className="row justify-center py-5">
                        <Icon 
                            name="react" 
                            size={50}
                            className="rotating" 
                            color="#61dafb"/>
                    </div>
                    {props.search &&
                    <AutoComplete
                        style={{ width: '100%', zIndex: 1 }}
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
                            </div>}/>}
                    <List size="medium" dark={theme}>
                        {simpleItems.map((item, index) => 
                            <List.Item
                                key={index}
                                icon={item.icon}
                                isActiveItem={item.path === (history.location.pathname || active)}
                                onClick={() => handleItemClick({ path: item.path })}
                                itemTitle="name"
                                hover
                                noDivider
                                item={item.name}/>
                        )}
                        <Collapse
                            controled
                            hover
                            visible={list}
                            onChange={() => setList(!list)}
                            title={
                                <List.Item
                                    noDivider
                                    icon="toy-brick"
                                    onClick={() => setList(!list)}
                                    item={<Badge 
                                            parent={<div style={{ display: 'block', paddingRight: 10 }}>Components</div>}
                                            color="primary" 
                                            value={sortedRoutes().length}/>
                                    }/>
                            }>
                            <List size="medium" className="px-20 py-10" dark={theme}>
                                {sortedRoutes().map((item, index) => 
                                    <List.Item
                                        key={index}
                                        noDivider
                                        icon={item.icon ? item.icon : ''}
                                        leftBorder
                                        roundedActive
                                        isActiveItem={item.path === (history.location.pathname || active)}
                                        onClick={() => handleItemClick(item)}
                                        className="no-select"
                                        hover
                                        item={item.name}
                                        controls={item.updated ? 
                                            <Tag borderType="rounded" tiny>updated</Tag> 
                                                : (item.new ? <Tag color="success" borderType="rounded" tiny>new</Tag> : null)}/>
                                )}
                            </List>
                        </Collapse>
                        <List.Item
                            noDivider
                            icon="checklist"
                            onClick={() => window.open('https://github.com/Assenti/react-ui-components/blob/master/README.md#todo')}
                            hover
                            item="TODOs"/>
                    </List>
                </>
            )}
        </ThemeContext.Consumer>
    )
}