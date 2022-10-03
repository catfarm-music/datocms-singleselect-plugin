import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import { RowItem } from "components/RowItem";

const getInitialState = (plugin) => {
  try {
    const value = plugin.getFieldValue(plugin.fieldPath) || "";
    return JSON.parse(value);
  } catch {
    return null;
  }
};

export const App = ({plugin}) => {
  const [data, setData] = useState(getInitialState(plugin));
  //const [data, setData] = useState();

  console.log("data", data, plugin.getFieldValue(plugin.fieldPath));

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

  const handleSelect = ({value}) => () => {
    setData(options.find((option) => option.value === value))
  }

  return (
    <ThemeProvider theme={plugin.theme}>
      {options.map((option) => {
        return (
          <RowItem {...option} onSelect={handleSelect(option)} />
        )
      })}
    </ThemeProvider>
  )
}
