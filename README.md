```json
{
  "global": [
    {
      "id": "developmentMode",
      "label": "Development mode?",
      "type": "boolean",
      "hint": "Enable development logs on the console"
    }
  ],
  "instance": [
  	{
      "id": "options",
      "label": "Options",
      "type": "json",
      "hint": "A list of available options",
    	"required": true,
    	"default": [{"value": "1", "label": "Option 1"}, {"value": "2", "label": "Option 2"}]
    }
  ]
}
```