import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Button } from './components/Button';
import { Alert } from './components/Alert';
import { Drawer } from './components/Drawer';
import { Menu } from './components/Menu';

const App = () => {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [drawerMin, setDrawerMin] = useState(false);
  const [menu, setMenu] = useState(false);
  const [stack, setStack] = useState('');

  const items = ['JavaScript', 'TypeScript', 'React', 'React-Native', 'Next', 'Redux', 'React-Redux', 'Vue', 'Vuex', 'Nuxt']
  
  return (
    <div className="app">
        <Drawer
          drawer={drawer}
          min={drawerMin}
          onResize={() => setDrawerMin(!drawerMin)}/>

      <div className="content">
        <h1>Working with React-Transition Group</h1>
        <div style={{ display: 'flex' }}>
          {showButton && 
            <Button
              name="Show Message"
              onAction={() => setShowMessage(true)}/>          
          }
          <span className="mx-5"></span>
          <Button
              name={drawer ? 'Close Drawer' : 'Open Drawer'}
              onAction={() => setDrawer(!drawer)}/> 
          <span className="mx-5"></span>
          <div className="input-group">
            <label for="stack-id">Input your variant or choose on of option</label>
            <input
              id="stack-id" 
              value={stack}
              onChange={e => setStack(e.target.value)}
              className="input"
              placeholder="Choose Stack"
              onFocus={() => setMenu(true)}
              onBlur={() => setMenu(false)}/>
            <Menu menu={menu} title="Choose Stack" items={items} onSelect={v => setStack(v)}/>
          </div>
        </div>

        <CSSTransition
          in={showMessage}
          timeout={300}
          classNames="alert"
          unmountOnExit
          onEnter={() => setShowButton(false)}
          onExited={() => setShowButton(true)}>
          <Alert
            onClose={() => setShowMessage(false)}
            heading="Animated alert message">
            <p>
              This alert message is being transitioned in and
              out of the DOM.
            </p>
            <Button
              name="Close" 
              onAction={() => setShowMessage(false)}/>
          </Alert>
        </CSSTransition>
      </div>
    </div>
  );
}

export default App;
