import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import { RowItem } from "components/RowItem";

const getInitialState = (plugin) => {
  try {
    const value = plugin.getFieldValue(plugin.fieldPath);
    return JSON.parse(value);
  } catch {
    console.log("failed to parse");
    return undefined;
  }
};

export const App = ({plugin}) => {
  const [data, setData] = useState(getInitialState(plugin));

  console.log("data", data, plugin.getFieldValue(plugin.fieldPath));

  console.log("hej1", plugin.getFieldValue(plugin.fieldPath));

  useEffect(() => {

    console.log("hej2", plugin.getFieldValue(plugin.fieldPath));

    const value = plugin.getFieldValue(plugin.fieldPath)
    const stringData = JSON.stringify(data);

    console.log(value, stringData, data);

    // The value is the same as before, do nothing
    if (value === stringData || value === data) return;
    console.log("Do we set the field??");
    //plugin.setFieldValue(plugin.fieldPath, value);
  }, [data]);

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
