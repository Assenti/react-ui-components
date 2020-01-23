import React, { useState } from 'react';
import { Modal } from '../components/Modal';
import { Button } from '../components/Button';

export const ModalPage = () => {
    const [modal, setModal] = useState(false);

    return (
        <div className="page">
            <div className="page-title">Modals</div>
            <Button
                color="info"
                size="medium"
                name="Open modal"
                onAction={() => setModal(true)}/>
            <Modal
                closable
                onClose={() => setModal(false)} 
                visible={modal} 
                header={<div>Modal</div>}/>
        </div>
    )
}
