import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { List, ListItem, Icon, Drawer, InputField, Dropdown } from '../components';
import { HomePage } from '../pages/HomePage';

const compare = (a, b) => {
    if (a.name > b.name) return 1;
    if (b.name > a.name) return -1;
    return 0;
}

export const DrawerContent = (props) => {
    const history = useHistory();
    const [search, setSearch] = useState('');

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
        let filtered = props.items.sort(compare).filter(item => item.path !== '/')
        filtered.unshift({ path: '/', name: 'Get started', Component: HomePage, icon: 'rocket' })
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
                        content={
                            <React.Fragment>
                                <p className="fz-7 text-gray px-10">Let's find your component</p>
                                <List dense>
                                    {searchedItems().map((item, index) => 
                                        <ListItem
                                            key={index}
                                            hover
                                            render={<Link to={item.path}>{item.name}</Link>}/>
                                    )}
                                </List>
                                {searchedItems().length > 0 ?
                                    <p className="fz-7 text-gray px-10 text-right">
                                        {searchedItems().length} results</p> : ''
                                }
                            </React.Fragment>
                        }
                        trigger={<InputField
                                    color="info"
                                    width="100%"
                                    onKeyUp={handleKeyUp}
                                    prefix={<Icon name="search"/>}
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    placeholder="Search components"/>}/>
                </div>
                <List dark>
                    {sortedRoutes().map((item, index) => 
                        <ListItem
                            key={index}
                            right
                            icon={item.icon ? item.icon : ''}
                            isActiveItem={current => current.path === window.location.pathname}
                            onClick={() => handleItemClick(item)}
                            itemTitle="name"
                            hover
                            item={item}/>
                    )}
                </List>
            </Drawer>
        </div>
    )
}
