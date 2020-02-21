# React UI Components

## Main Goal
Create a lot of usefull and maximum reusable UI components

## Homepage
[React UI Components](https://r-ui-components.netlify.com/)

## Install
```bash
# Install package from NPM
% npm install @assenti/rui-components -S

               #or

% yarn add @assenti/rui-components
```

## Usage
index.js / index.ts
```jsx
// Import styles in index.js (or your main.js file)
import '@assenti/react-ui-components/build/css/main.css';
```
App.js / App.tsx
```jsx
import { Card, Button } from '@assenti/react-ui-components';
import React from 'react';

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
- [ ] Date picker / Calendar
- [ ] InputMask 
- [ ] Expansion List
- [ ] Stepper
- [ ] Rating
- [ ] Dock
- [ ] Alert
- [ ] Notification
- [ ] Header / Toolbar
- [ ] Breadcrumbs
- [ ] Carousel
- [ ] Timeline
- [ ] Tabs
- [ ] Dark & Light Mode
- [ ] Define theme colors and make them customizable
- [ ] Declare types for TS using
- [ ] Add i18n

## Changelog
You can track changelog [here](/CHANGELOG.md)

Project start date: Jan 6th 2020

### License

[MIT Licensed](/LICENSE)
Copyright (c) 2020 Asset Sultanov
