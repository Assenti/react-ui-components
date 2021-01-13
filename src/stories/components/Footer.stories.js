import React from 'react';
import Footer from '../../components/footer';
import List from '../../components/list/List';
import ListItem from '../../components/list/ListItem';
import { countries } from '../../data/countries';
List.Item = ListItem;

const getYears = () => {
    if (new Date().getFullYear() === 2020) return new Date().getFullYear();
    else return `2020 - ${new Date().getFullYear()}`;
}

export default {
  title: 'Example/Footer',
  component: Footer,
};

const Template = (args) => (
    <Footer
        {...args}
        >
        <div className="full-width">
            <div className="row space-around">
                <List>
                    {countries.slice(0,5).map((item, index) => 
                        <List.Item
                            key={index}
                            noDivider
                            href={item.url}
                            blank
                            item={item.country}/>
                    )}
                </List>
                <List>
                    {countries.slice(5,10).map((item, index) => 
                        <List.Item
                            key={index}
                            noDivider
                            href={item.url}
                            blank
                            item={item.country}/>
                    )}
                </List>
            </div>
            <div className="fz-8 py-10 text-center">
                {getYears()} &copy;	React UI Components
            </div>
        </div>
    </Footer>
)

export const Footer_ = Template.bind({});

Footer_.args = {
    fixed: true,
    smooth: false,
    dark: false,
    color: 'secondary'
};