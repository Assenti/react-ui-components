import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { List, ListItem, Icon, Drawer, InputField, Dropdown } from '../components';
import { compare } from '../components';

export const DrawerContent = (props) => {
    const history = useHistory();
    const [search, setSearch] = useState('');
    const [list, setList] = useState(true);

    const handleItemClick = (item) => {
        history.push(item.path)
    }

    const searchedItems = () => {
        if (search) {
            return props.items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        } else {
            return []
        }
    }

    const handleKeyUp = (e) => {
        if (e.key === 'Escape') setSearch('')
    }

    const sortedRoutes = () => {
        let filtered = props.items
                            .sort((a, b) => compare(a, b, 'name', 'asc'))
                            .filter(item => item.path !== '/' && 
                                            item.path !== '/colors' &&
                                            item.path !== '/helper')
        // filtered.unshift({ path: '/colors', name: 'Colors', Component: HomePage, icon: 'brush' })
        return filtered;
    }
    
    return (
        <React.Fragment>
            <Drawer
                drawer={props.drawer}
                fullHeight
                dark={props.dark}
                onClose={() => props.onClose()}
                headerCentered
                header={<Icon 
                    name="react" 
                    size={30}
                    className="rotating" 
                    color="#61dafb"/>}>
                <div className="row py-5 justify-center sticky" style={{ top: 40 }}>
                    <Dropdown
                        className="full-width mx-10"
                        content={
                            <React.Fragment>
                                <div className="fz-8 text-info pa-15">Let's find your component</div>
                                <List dark={props.dark}>
                                    {searchedItems().map((item, index) => 
                                        <ListItem
                                            key={index}
                                            hover
                                            onClick={() => {
                                                handleItemClick(item)
                                                setSearch('')
                                            }}
                                            item={item.name}/>
                                    )}
                                </List>
                                {searchedItems().length > 0 ?
                                    <div className="fz-8 text-dark pa-15 text-right">
                                        {searchedItems().length} results</div> : ''
                                }
                            </React.Fragment>
                        }
                        trigger={<InputField
                                    color="info"
                                    width="100%"
                                    whiteBackground
                                    onKeyUp={handleKeyUp}
                                    prefix={<Icon name="search"/>}
                                    value={search}
                                    className="full-width"
                                    onChange={e => setSearch(e.target.value)}
                                    placeholder="Search components"/>}/>
                </div>
                <List size="medium" dark={props.dark}>
                    <ListItem
                        right
                        icon="rocket"
                        isActiveItem={'/' === window.location.pathname}
                        onClick={() => handleItemClick({ path: '/'})}
                        itemTitle="name"
                        hover
                        item="Getting started"/>
                    <ListItem
                        right
                        icon="language-css-3"
                        isActiveItem={'/helper' === window.location.pathname}
                        onClick={() => handleItemClick({ path: '/helper'})}
                        itemTitle="name"
                        hover
                        item="Helper CSS classes"/>
                    <ListItem
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
                {list ? <List className="pl-30" dark={props.dark}>
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
                            item={item.name}/>
                    )}
                </List> : ''}
            </Drawer>
        </React.Fragment>
    )
}
