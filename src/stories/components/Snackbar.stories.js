import React from 'react';
import Snackbar from '../../components/snackbar/Snackbar';
import { snackbar } from '../../components/snackbar';
import Button from '../../components/button';

export default {
    title: 'Example/Snackbar',
    component: Snackbar
};

const Template = (args) => (
    <>
        <Snackbar/>
        <Button
            className="mt-10 ml-0"
            onClick={() => {
                snackbar.message('I am a Snackbar', 
                { 
                    borderType: 'rounded',
                    controls: <Button dark name="CLOSE" onClick={() => snackbar.remove()}/> 
                })
            }} 
            name="Invoke snackbar" 
            color="primary"/>
    </>
)

export const Snackbar_ = Template.bind({});