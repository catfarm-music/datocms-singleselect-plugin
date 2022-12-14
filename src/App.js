import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import { RowItem } from "components/RowItem";

const getInitialState = (plugin) => {
  try {
    const value = plugin.getFieldValue(plugin.fieldPath);
    return JSON.parse(value);
  } catch {
    console.log("failed to parse");
    return null;
  }
};

export const App = ({plugin}) => {
  const [data, setData] = useState(getInitialState(plugin));

  useEffect(() => {
    const value = JSON.stringify(data);

    // The value is the same as before, do nothing
    if (value === JSON.stringify(getInitialState(plugin))) return;
    plugin.setFieldValue(plugin.fieldPath, value);
  }, [data]);

  console.log("plugin", plugin);

  const {options} = JSON.parse(plugin.parameters.instance.options)

  const handleSelect = ({value}) => () => {
    setData(options.find((option) => option.value === value))
  }

  return (
    <ThemeProvider theme={plugin.theme}>
      {options.map((option) => {
        const selected = data && data.value === option.value
        return (
          <RowItem {...option} onSelect={handleSelect(option)} selected={selected} />
        )
      })}
    </ThemeProvider>
  )
}
