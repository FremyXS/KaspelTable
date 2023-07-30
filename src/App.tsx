import React, { useState } from 'react';
import Table from './components/Table/Table';
import ModalWindow from './components/ModalWindow/ModalWindow';
import Input from './components/Input/Input';

import './App.css';
import Button from './components/Button/Button';

function App() {
  const [isShowWindow, setIsShowWindow] = useState<boolean>();

  return (
    <div className="App">
      {isShowWindow &&
        <ModalWindow onClick={() => setIsShowWindow(false)}>
          <Input labelName='Name' />
          <Input labelName='Date' />
          <Input labelName='Num' />
          <Button type='button'>
            Add
          </Button>
        </ModalWindow>
      }
      <Table onAddClick={() => setIsShowWindow(true)} />
    </div>
  );
}

export default App;
