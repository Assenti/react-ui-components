import React from 'react';
import Modal from '../../components/modal';
import Button from '../../components/button';

export default {
    title: 'Example/Modal',
    component: Modal
};

const Template = (args) => (
    <Modal
        {...args}
        footer={
            <div 
                style={{ width: '100%' }}
                className="row justify-end">
                <Button
                    className="ma-0"
                    color="error"
                    name="Close"/>
            </div>
        }>
        <p style={{ textAlign: 'justify' }}>
        Modernipsum dolor sit amet remodernism baroque modern art, international gothic metaphysical art neoclassicism neo-expressionism monumentalism. Stuckism international historicism existentialism lowbrow synthetism intervention art expressionism, outsider art nonconformism hard-edge painting illusionism. Existentialism orphism stuckism cubism lettrism caravaggisti illusionism hudson river school, dadaism romanesque primitivism realism cloisonnism sound art. Romanticism post-minimalism intervention art lowbrow expressionism, naturalism incoherents relational art nonconformism maximalism, romanticism purism land art. Post-impressionism russian symbolism outsider art neoclassicism tachisme photorealism, fluxus postmodernism manierism expressionism, mail art stuckism international neo-geo illusionism. Manierism rococo barbizon school jugendstil, existentialism pointilism.
        </p>
    </Modal>
)

export const Modal_ = Template.bind({});

Modal_.args = {
    header: 'Modal',
    width: 330,
    visible: true,
    centered: true
}