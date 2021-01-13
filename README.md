# React UI Components
### UI Components for web apps built on [React](https://reactjs.org/)

<p style="text-align:center;">
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@assenti/rui-components">
    <img alt="" src="https://badgen.net/npm/v/@assenti/rui-components"/>
  </a>
  <a aria-label="Downloads" href="https://npm-stat.com/charts.html?package=%40assenti%2Frui-components">
    <img alt="" src="https://badgen.net/npm/dw/@assenti/rui-components"/>
  </a>
  <a href="https://github.com/Assenti/react-ui-components/blob/master/LICENSE"><img src="https://img.shields.io/badge/License-MIT-brightgreen.svg" alt="License"></a>
</p>

## Main Goal
Create a lot of usefull, light weight and maximum reusable UI components

## Requirements for using rui-components
You've created your app using [CRA (Create react app)](https://create-react-app.dev/docs/getting-started/)


## Storybook
Explore storybook [here](https://rui-components.netlify.app/?path=/story/get-started--page)

## Install
```bash
# Install package from NPM
% npm install @assenti/rui-components -S
```
or
```bash
# Install package from NPM
% yarn add @assenti/rui-components
```

## Usage
index.js / index.ts
```jsx
// Import styles in index.js / index.ts
import '@assenti/rui-components/css/index.css';
```
App.js / App.tsx
```jsx
import { Card, Button, Icon } from '@assenti/rui-components';
import React from 'react';

function App() {
  return (
    <Card header={<h4>React UI Components</h4>}>
      <Button color="primary" name="Rocket" icon={<Icon name="rocket"/>}/>
    </Card>
  );
}

export default App;
```

## Changelog
You can track changelog [here](https://github.com/Assenti/react-ui-components/blob/storybook/CHANGELOG.md)

## Where can i find @types/@assenti/rui-components ?
Types declarations for TypeScript are built-in

## How to set my own preset colors ?
Just override it in css styles

## Can i use custom fonts ?
Just import your fonts and override it in css styles

## I found a bug
Open an issue, please, i will try to fix it ASAP

## I want to contribute
You are welcome

### License

[MIT Licensed](/LICENSE)
Copyright (c) 2020 Asset Sultanov

---

I'll be appreciated for your donations ;)

<a href="https://www.buymeacoffee.com/assenti" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;"></a>