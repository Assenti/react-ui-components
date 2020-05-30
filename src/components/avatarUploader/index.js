import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import { Account } from '../icon/icons';
import { strinfigyClassObject } from '../utils';

const getBase64 = (file) => {
    if (file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
}

const AvatarUploader = (props) => {
    const inputFile = useRef();
    const [avatar, setAvatar] = useState(props.avatar);
    const [inputKey, setInputKey] = useState(Date.now());

    let className = {
        name: 'rui-avatar-uploader',
        lifted: props.lifted ? 'lifted' : '',
        dark: props.dark ? 'dark' : '',
        borderType: props.borderType ? props.borderType : '', 
        className: props.className ? props.className : ''
    }

    const handlePreview = async (e) => {
        let file = e.target.files ? e.target.files[0] : null
        let b = await getBase64(file)
        setAvatar(b)
        props.onChange(b);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        props.onClear()
        setAvatar('')
        setInputKey(Date.now())
    }

    return (
        <div className={strinfigyClassObject(className)}
            ref={props.avatarRef} 
            style={{
                width: props.width ? props.width : 100,
                minWidth: props.width ? props.width : 100,
                height: props.height ? props.height : 120,
                backgroundImage: `url(${avatar})`
            }}>
            {!avatar ?
                <>
                    <label>{props.label ? props.label : props.label === null ? '' : 'upload avatar'}</label>
                    {props.placeholderImage ? props.placeholderImage :
                        <i className="rui-avatar-uploader-placeholder"><Account/></i>}
                </>
                : <Button 
                    light
                    icon="close" 
                    className="ma-0"
                    onClick={handleDelete}/>
            }
            <input
                ref={inputFile}
                key={inputKey}
                accept="image/*"
                title={props.title ? props.title : 'Choose file'}
                onChange={handlePreview}
                type="file"/>
        </div>
    )
}
AvatarUploader.propTypes = {
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    borderType: PropTypes.oneOf([undefined,'','default','smooth','tile','rounded']),
    avatar: PropTypes.string,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
    lifted: PropTypes.bool,
    dark: PropTypes.bool,
    title: PropTypes.string,
    label: PropTypes.string,
    placeholderImage: PropTypes.node,
    avatarRef: PropTypes.oneOfType([
        PropTypes.func, 
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]),
    className: PropTypes.string
}
export default AvatarUploader;