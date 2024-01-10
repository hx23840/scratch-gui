/* generated by pull.js */
const manifest = {
  "editorOnly": true,
  "noTranslations": true,
  "name": "Compact editor",
  "description": "Decreases the size of buttons, input fields, the menu bar, and other elements in the editor, making more space for components such as the code area, the costume editor, and costume previews, as was the case in Scratch 2.0.",
  "tags": [
    "theme",
    "beta",
    "new"
  ],
  "credits": [
    {
      "name": "lisa_wolfgang",
      "link": "https://scratch.mit.edu/users/lisa_wolfgang/"
    },
    {
      "name": "Maximouse",
      "link": "https://scratch.mit.edu/users/Maximouse/"
    }
  ],
  "info": [
    {
      "id": "hide-icons-update",
      "text": "To hide menu bar icons, use the \"Customizable menu bar\" addon."
    }
  ],
  "userstyles": [
    {
      "url": "userstyle.css"
    },
    {
      "url": "hide-labels.css",
      "if": {
        "settings": {
          "hideLabels": true
        }
      }
    },
    {
      "url": "sprite-properties.css",
      "if": {
        "addonEnabled": [
          "sprite-properties"
        ]
      }
    }
  ],
  "userscripts": [
    {
      "url": "userscript.js"
    }
  ],
  "settings": [
    {
      "id": "hideLabels",
      "type": "boolean",
      "name": "Hide button labels in costume and sound editor",
      "default": true
    }
  ],
  "dynamicDisable": true,
  "enabledByDefault": false
};
export default manifest;