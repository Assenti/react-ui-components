import React from 'react';
import { useHistory } from 'react-router-dom';
import { Tooltip, Button, Switch, AutoComplete, compare, Icon, ThemeContext, Tag } from '../components';

const HeaderContent = (props) => {
    const history = useHistory();

    const handleItemClick = (item) => {
        if (item.path.includes('http')) return;
        else {
            history.push(item.path);
        }
    }

    const sortedRoutes = () => {
        let filtered = props.routes.sort((a, b) => compare(a, b, 'name', 'asc'))
                            .filter(item => item.path !== '/' && 
                                            item.path !== '/layouts' &&
                                            item.path !== '/icons' &&
                                            item.path !== '/helper')
        return filtered;
    }

    return (
        <ThemeContext.Consumer>
            {theme => 
                <>
                    <div className="row align-center">
                        {props.isXs && 
                        <Button
                            dark={props.dark ? props.dark : false}
                            light={props.light || (!props.color && !props.dark) ? true : false}
                            color={props.color}
                            icon={<Icon name="menu"/>} 
                            onClick={() => props.onDrawerToggle()}/>}
                        <h4 className={theme ? 'ma-0 text-white' : 'ma-0 text-dark'}>{props.title}</h4>
                    </div>
                    {!props.isXs &&
                    <AutoComplete
                        style={{ width: 350, zIndex: 1 }}
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
                    <div className="row align-center">
                        <Switch color="primary" 
                            check={theme}
                            leftIcon="sun"
                            leftIconColor={theme ? '#fff' : ''}
                            rightIconColor={theme ? '#fff' : ''}
                            className="mr-10"
                            rightIcon="moon" 
                            onChange={() => props.onSwitchDark()}/>
                        <div className="mr-10">
                            <Tooltip tooltip="Current version" position="left">
                                <a href="https://github.com/Assenti/react-ui-components/blob/master/CHANGELOG.md" 
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    <Tag tiny color="info">v{props.version}</Tag>
                                </a>
                            </Tooltip>
                        </div>
                        <Tooltip tooltip="Visit Github repo" position="left">
                            <Button 
                                icon={<Icon name="github"/>}
                                light={!theme}
                                dark={theme} 
                                onClick={e => { 
                                e.preventDefault()
                                window.open('https://github.com/Assenti/react-ui-components', '_blank')}}/>
                        </Tooltip>
                    </div>
                </>
            }
        </ThemeContext.Consumer>
    )
}

export default HeaderContent;