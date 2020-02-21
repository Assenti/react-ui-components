import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { List, ListItem, Icon, Drawer, InputField, Dropdown, Button, Collapse } from '../components';
import { HomePage } from '../pages/HomePage';

const compare = (a, b) => {
    if (a.name > b.name) return 1;
    if (b.name > a.name) return -1;
    return 0;
}

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
                            .sort(compare)
                            .filter(item => item.path !== '/' && item.path !== '/colors')
        // filtered.unshift({ path: '/colors', name: 'Colors', Component: HomePage, icon: 'brush' })
        // filtered.unshift({ path: '/', name: 'Get started', Component: HomePage, icon: 'rocket' })
        return filtered;
    }
    
    return (
        <div>
            <Drawer
                drawer={props.drawer}
                fullHeight
                dark
                onClose={() => props.onClose()}
                headerCentered
                header={<Icon name="react" color="white" size={30}/>}>
                <div className="row py-5 justify-center">
                    <Dropdown
                        className="full-width mx-10"
                        content={
                            <React.Fragment>
                                <div className="fz-8 text-gray pa-10">Let's find your component</div>
                                <List dense>
                                    {searchedItems().map((item, index) => 
                                        <ListItem
                                            key={index}
                                            hover
                                            render={<Link to={item.path} 
                                                onClick={() => setSearch('')}>{item.name}</Link>}/>
                                    )}
                                </List>
                                {searchedItems().length > 0 ?
                                    <div className="fz-8 text-gray pa-10 text-right">
                                        {searchedItems().length} results</div> : ''
                                }
                            </React.Fragment>
                        }
                        trigger={<InputField
                                    color="info"
                                    width="100%"
                                    onKeyUp={handleKeyUp}
                                    prefix={<Icon name="search"/>}
                                    value={search}
                                    className="full-width"
                                    onChange={e => setSearch(e.target.value)}
                                    placeholder="Search components"/>}/>
                </div>
                <List size="medium" dark>
                    <ListItem
                        right
                        icon="rocket"
                        isActiveItem={() => '/' === window.location.pathname}
                        onClick={() => handleItemClick({ path: '/', name: 'Get started', Component: HomePage, icon: 'rocket' })}
                        itemTitle="name"
                        hover
                        item={{ path: '/', name: 'Get started', Component: HomePage, icon: 'rocket' }}/>
                    <ListItem
                        icon="toy-brick"
                        onClick={() => setList(!list)}
                        hover
                        item="Components"
                        controls={<Icon color="#fff" size={20} name={list ? 'chevron-up' : 'chevron-down'}/>}/>
                </List>
                {list ? <List dark className="pl-30">
                    {sortedRoutes().map((item, index) => 
                        <ListItem
                            key={index}
                            right
                            noDivider
                            icon={item.icon ? item.icon : ''}
                            roundedActive
                            isActiveItem={current => current.path === window.location.pathname}
                            onClick={() => handleItemClick(item)}
                            itemTitle="name"
                            className="no-select"
                            hover
                            item={item}/>
                    )}
                </List> : ''}
            </Drawer>
        </div>
    )
}
