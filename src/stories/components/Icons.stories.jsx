import React, { useState } from 'react';
import Card from '../../components/card';
import Tooltip from '../../components/tooltip';
import CopyToClipboard from '../../components/copyToClipboard';
import InputField from '../../components/input';
import Icon from '../../components/icon';
import { description } from '../../../package.json';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

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

const usage = `// Usage examples
import React from 'react';
import { Icon } from '@assenti/rui-components';

funcation Example() {

    const CustomIconSvg = () => {
        return (
            <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                <path fill="gray" d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3M18.82 9L12 12.72L5.18 9L12 5.28L18.82 9M17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z" />
            </svg>
        )
    }

    return (
        <>
            <Icon custom={<CustomIconSvg/>}/>
        </>
    )
}`

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
            <p className="my-16">Didn't found your icon ?</p>
            <SyntaxHighlighter 
                language="jsx" 
                style={coy}>
                {usage}
            </SyntaxHighlighter>
        </div>
    )
}

const Template = () => (
    <IconsPage/>
)

export const Icons = Template.bind({});