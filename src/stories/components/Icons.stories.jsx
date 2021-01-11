import React, { useState } from 'react';
import Card from '../../components/card';
import Tooltip from '../../components/tooltip';
import CopyToClipboard from '../../components/copyToClipboard';
import InputField from '../../components/input';
import Icon from '../../components/icon';
import { description } from '../../../package.json';

export default {
    title: 'Icons',
    component: null
};

const icons = [
  'delete', 
  'search', 
  'home', 
  'edit', 
  'github', 
  'gitlab', 
  'close', 
  'chevron-double-right', 
  'chevron-double-left',
  'code',
  'chip',
  'account',
  'users',
  'person',
  'shield-account',
  'chevron-down',
  'chevron-up',
  'chevron-next', 
  'chevron-back', 
  'sun',
  'moon',
  'star',
  'star-outline',
  'smartphone',
  'hammer',
  'city',
  'empty',
  'download',
  'menu',
  'file-outline' ,
  'email',
  'rocket',
  'key',
  'exit-to-app',
  'arrow-up-bold',
  'arrow-down-bold',
  'format-align-left',
  'format-align-center',
  'format-align-right',
  'brush',
  'lock',
  'filter',
  'sort-ascending',
  'sort-descending',
  'content-copy',
  'toy-brick',
  'help-circle-outline',
  'dots-vertical',
  'dots-horizontal',
  'react',
  'language-css-3',
  'earth',
  'check',
  'check-circle',
  'eye',
  'eye-off',
  'tenge',
  'currency-usd',
  'credit-card',
  'qrcode',
  'calendar-month',
  'calendar-star',
  'card-account-details',
  'translate',
  'alert',
  'format-size',
  'cog-outline',
  'target',
  'map',
  'map-marker',
  'language-js',
  'language-ts',
  'language-go',
  'linkedin',
  'facebook',
  'facebook-workplace',
  'instagram',
  'whatsapp',
  'telegram',
  'flag',
  'plus',
  'minus',
  'account-plus',
  'book-open',
  'shape',
  'share',
  'phone',
  'bell',
  'wrench',
  'alert-circle',
  'info',
  'package-down',
  'clock-outline',
  'wifi',
  'cart',
  'chart-ppf',
  'airplane',
  'cancel',
  'grid',
  'view-list',
  'list-bulleted',
  'checklist',
  'arrow-up',
  'arrow-down',
  'account-group',
  'dashboard-outline',
  'chart-bar',
  'chart-pie',
  'chart-donut',
  'rotate',
  'bulb',
  'refresh',
  'heart',
  'heart-outline',
  'send',
  'reply',
  'reply-all',
  'forward',
  'like',
  'dislike'
]

const IconsPage = () => {
    const [search, setSearch] = useState('');

    const filteredIcons = () => {
        if (search) {
            return icons.filter(item => item.toLowerCase().includes(search.toLowerCase()))
        } else {
            return icons
        }
    }

    return (
        <div className="rui-page">
            <div className="rui-page-title">Icons collection</div>
            <p><strong>{description}</strong> use primarily
                <a href="https://materialdesignicons.com/"
                    target="blank_"
                    className="ml-5">Material Design Icons</a>
            </p>
            <Card>
                <div className="py-10">
                    <InputField 
                        value={search}
                        borderType="rounded"
                        size="medium"
                        style={{width: '100%'}}
                        prefix={<Icon name="search"/>}
                        suffix={search && <Icon className="cursor-pointer" name="close" onClick={() => setSearch('')}/>}
                        placeholder="Search icons"
                        color="primary"
                        onChange={e => setSearch(e.target.value)}/>
                </div>
                {filteredIcons().map((item, index) => 
                    <div key={index} 
                        style={{ border: '1px solid #ddd' }}
                        className="row-inline cursor-pointer text-center column justify-center align-center ma-2 pa-16 hoverable">
                        <Tooltip tooltip={item}>
                            <CopyToClipboard
                                defaultText={item}
                                size={24}
                                text={item}
                                icon={item}
                                />
                        </Tooltip>
                    </div>
                )}
            </Card>
            <p className="pb-24">Didn't found your icon, use your <a className="link" href="/?path=/story/example-icon--icon">custom</a></p>
        </div>
    )
}

const Template = () => (
    <IconsPage/>
)

export const Icons = Template.bind({});