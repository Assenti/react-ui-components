# React UI Components

### Main Goal
Create a lot of usefull and maximum reusable UI components

### Homepage
[React UI Components](https://r-ui-components.netlify.com/)

### Install
```bash
% npm i @assenti/rui-components
```

### Usage
index.js
```jsx
import '@assenti/react-ui-components/build/static/css/main.css';
```
App.js
```jsx
import { Card, Button } from '@assenti/react-ui-components';

import React from 'react';
import { Card, Button } from './react-ui-components';

function App() {
  return (
    <div>
      <Card>
        <Button color="primary" name="Button" icon="search"/>
      </Card>
    </div>
  );
}

export default App;
```


### TODO
- [ ] Popover
- [ ] Dialog
- [X] Radio button
- [ ] Date picker / Calendar
- [ ] InputMask 
- [X] Badge
- [X] Dropdown
- [X] Tag
- [X] Card
- [ ] Expansion List
- [ ] Stepper
- [ ] Rating
- [X] Icon
- [X] Uploader
- [ ] Dock
- [ ] Alert
- [ ] Notification
- [ ] Header / Toolbar
- [ ] Breadcrumbs
- [X] Switch
- [ ] Carousel
- [ ] Timeline
- [X] Preloader
- [ ] Dark & Light Mode
- [ ] Define theme colors and make them customizable
- [ ] Declare types for TS using
- [ ] Make a-la-carte using 
- [ ] Add API descriptions
- [ ] Add Component usage code modules
- [ ] Add i18n
- [X] NPM register

Project start date: Jan 6th 2020

### License

[MIT Licensed](/LICENSE)
Copyright (c) 2020 Asset Sultanov
