<p align="center">
  <h1 align="center">React UI Components</h1>
  <p align="center">UI Components for web apps built on <a href="https://reactjs.org/" target="_blank">React</a></p>
</p>
<p align="center">
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@assenti/rui-components">
    <img alt="" src="https://badgen.net/npm/v/@assenti/rui-components"/>
  </a>
  <a aria-label="Downloads" href="https://npm-stat.com/charts.html?package=%40assenti%2Frui-components">
    <img alt="" src="https://badgen.net/npm/dw/@assenti/rui-components"/>
  </a>
  <a aria-label="License" href="https://github.com/Assenti/react-ui-components/edit/master/LICENSE">
    <img alt="" src="https://badgen.net/npm/license/@assenti/rui-components"/>
  </a>
</p>

## Main Goal
Create a lot of usefull and maximum reusable UI components

## Homepage
[React UI Components](https://r-ui-components.netlify.com/)

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

## Peer dependencies
React UI Components use react-transition-group package under the hood, so you should install it too
```bash
# Install package from NPM
% npm install react-transition-group -S
```
```bash
# Install @types/react-transition-group for TS
% npm install @types/react-transition-group -D
```

## Usage
index.js / index.ts
```jsx
// Import styles in index.js / index.ts
import '@assenti/react-ui-components/build/css/main.css';
```
App.js / App.tsx
```jsx
import { Card, Button } from '@assenti/react-ui-components';
import React from 'react';

function App() {
  return (
    <Card color="primary" header={<h4>React UI Components</h4>}>
      <Button color="primary" name="Rocket" icon="rocket"/>
    </Card>
  );
}

export default App;
```

### TODO
- [ ] Date picker
- [ ] Stepper
- [ ] Notification
- [ ] Carousel
- [ ] Range

## Changelog
You can track changelog [here](/CHANGELOG.md)

Project start date: Jan 6th 2020

### License

[MIT Licensed](/LICENSE)
Copyright (c) 2020 Asset Sultanov