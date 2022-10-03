import { useEffect, useState } from "react";

import { ThemeProvider } from "styled-components";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const getInitialState = (plugin) => {
  try {
    const value = plugin.getFieldValue(plugin.fieldPath) || "";
    return JSON.parse(value);
  } catch {
    return [];
  }
};

export const App = ({plugin}) => {
  const [data, setData] = useState(getInitialState(plugin));

  useEffect(() => {
    const value = JSON.stringify(data);

    // The value is the same as before, do nothing
    if (value === plugin.getFieldValue(plugin.fieldPath)) return;
    plugin.setFieldValue(plugin.fieldPath, value);
  }, [data]);

  const value = data.value

  const handleChange = () => {}

  return (
    <ThemeProvider theme={plugin.theme}>
      <FormControl variant="outlined">
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={value}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
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