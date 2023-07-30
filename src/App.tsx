import React, { ChangeEvent, useState } from 'react';
import Table from './components/Table/Table';
import ModalWindow from './components/ModalWindow/ModalWindow';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import { DataType } from './types';

import './App.css';

function App() {
  const [isShowWindow, setIsShowWindow] = useState<boolean>();
  const [data, setData] = useState<DataType[]>([]);
  const [formData, setFormData] = useState<DataType>({
    name: "",
    date: "",
    num: 0,
  });

  const handleAddDataClick = () => {
    setData([...data, formData]);
    setFormData({
      name: "",
      date: "",
      num: 0,
    });
    setIsShowWindow(false);
  }

  const onChangeForm = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <div className="App">
      {isShowWindow &&
        <ModalWindow onClick={() => setIsShowWindow(false)}>
          <Input labelName='Name'
            type='text'
            name='name'
            value={formData.name}
            onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeForm(event)} />
          <Input labelName='Date'
            type='date'
            name='date'
            value={formData.date}
            onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeForm(event)} />
          <Input labelName='Num'
            type='number'
            name='num'
            value={formData.num}
            onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeForm(event)} />
          <Button type='button'
            onClick={() => handleAddDataClick()}>
            Add
          </Button>
        </ModalWindow>
      }
      <Table data={data} onAddClick={() => setIsShowWindow(true)} />
    </div>
  );
}

export default App;
