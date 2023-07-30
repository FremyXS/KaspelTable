import React, { ChangeEvent, useState } from 'react';
import Table from './components/Table/Table';
import ModalWindow from './components/ModalWindow/ModalWindow';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import { DataType } from './types';
import { dataMock } from './components/Table/mocks';

import './App.css';

function App() {
  const [isShowWindow, setIsShowWindow] = useState<boolean>();
  const [data, setData] = useState<DataType[]>(dataMock);
  const [formData, setFormData] = useState<DataType>({
    key:0,
    name: "",
    date: "",
    num: 0,
  });
  const [indexChange, setIndexChange] = useState<number | null>(null);

  const handleAddDataClick = () => {
    const reForm: DataType = {
      ...formData,
      key:( indexChange !== null)? indexChange : data.length
    }

    if (indexChange !== null) {

      setData([
        ...data.slice(0, indexChange),
        reForm,
        ...data.slice(indexChange + 1, data.length)
      ]);

      setIndexChange(null);
    }
    else {
      setData([...data, reForm]);
    }


    setFormData({
      key:0,
      name: "",
      date: "",
      num: 0,
    });
    setIsShowWindow(false);
  }

  const handleDeleteDataByIndexClick = (index: number) => {
    const reData = [...data.slice(0, index), ...data.slice(index + 1, data.length)];
    setData(reData);
  }

  const handleChangeDataClick = (index: number, data: DataType) => {
    setFormData(data);
    setIndexChange(index);
    setIsShowWindow(true);
  }

  const onChangeForm = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleGetModalWindow = (formData: DataType) => {
    return (
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
    )
  }

  return (
    <div className="App">
      {isShowWindow && handleGetModalWindow(formData)}
      <Table
        data={data}
        onAddClick={() => setIsShowWindow(true)}
        onDeleteClick={(index: number) => handleDeleteDataByIndexClick(index)}
        onChangeClick={(index: number, data: DataType) => handleChangeDataClick(index, data)} />
    </div>
  );
}

export default App;
