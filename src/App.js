import { useEffect, useState } from "react";

import { ThemeProvider } from "styled-components";

import Select from 'react-select'

import { RowItem } from "components/RowItem";

const getInitialState = (plugin) => {
  try {
    const value = plugin.getFieldValue(plugin.fieldPath) || "";
    return JSON.parse(value);
  } catch {
    return null;
  }
};

/*
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
*/

export const App = ({plugin}) => {
  const [data, setData] = useState(getInitialState(plugin));
  //const [data, setData] = useState();

  useEffect(() => {
    const value = JSON.stringify(data);

    // The value is the same as before, do nothing
    if (value === plugin.getFieldValue(plugin.fieldPath)) return;
    plugin.setFieldValue(plugin.fieldPath, value);
  }, [data]);

  const value = "data.value"

  const handleChange = () => {}

  console.log("plugin", plugin);

  const {options} = JSON.parse(plugin.parameters.instance.options)

  return (
    <ThemeProvider theme={plugin.theme}>
      <Select options={options}>
      </Select>
      {options.map((option) => {
        return (
          <RowItem {...option} />
        )
      })}
    </ThemeProvider>
  )
}

/*

import { AddRowButton } from "components/AddRowButton";
import { RowItem } from "components/RowItem";

const generate = () => `modal__${Date.now() + Math.random()}`;

const getInitialState = (plugin) => {
  try {
    const value = plugin.getFieldValue(plugin.fieldPath) || "[]";
    return JSON.parse(value);
  } catch {
    return [];
  }
};

export const App = ({ plugin }) => {
  const [data, setData] = useState(getInitialState(plugin));

  useEffect(() => {
    const value = JSON.stringify(data);

    // The value is the same as before, do nothing
    if (value === plugin.getFieldValue(plugin.fieldPath)) return;
    plugin.setFieldValue(plugin.fieldPath, value);
  }, [data]);

  const handleAddRow = () => {
    const id = generate();
    setData((data) => [...data, { id, value: "" }]);
  };

  const handleUpdateRow = (id) => (value) => {
    setData((data) => data.map((item) => (item.id === id ? { ...item, value } : item)));
  };

  const handleRemoveRow = (id) => () => {
    setData((data) => data.filter((item) => item.id !== id));
  };

  const handleMoveRow = (id) => (step) => () => {
    // If only item or empty, do nothing
    if (data.length < 2) return;

    const oldIndex = data.findIndex((item) => item.id === id);
    const newIndex = oldIndex + step;

    // If moving would put out of bounds, do nothing
    if (newIndex < 0 || newIndex === data.length) return;

    setData((data) =>
      data.map((item, i) => (i === oldIndex ? data[newIndex] : i === newIndex ? data[oldIndex] : item)),
    );
  };

  console.log("plugin", plugin);

  console.log(plugin.theme);

  return (
    <ThemeProvider theme={plugin.theme}>
      {data?.map(({ id, value }) => (
        <RowItem
          key={id}
          onUpdateRow={handleUpdateRow(id)}
          onRemoveRow={handleRemoveRow(id)}
          onMoveRow={handleMoveRow(id)}
          value={value}
        />
      ))}
      <AddRowButton onAddRow={handleAddRow} />
    </ThemeProvider>
  );
};
*/