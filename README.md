# Notes to myself

- `settings` and `keybindings` backup are in the `dist` directory.
- For the `custom css file` to work, make sure to install the [Apc Customize UI++](https://marketplace.visualstudio.com/items?itemName=drcika.apc-extension) extension.
- Known issues: 
  - *The sliding animation may cause some extensions for previewing stuff (SVG, Markdown,...) to not work properly, you need to switch to another tab in the same editor group and switch back to it to fix*.

## To update the custom css file
1. Modify files located at `src/scss/*`

2. Run `yarn build` to compile the files into `dist/custom.minified.css`.

## To update the watermark
1. Go to https://texteditor.com/multiline-text-art/ and look for the **Dark with shadow** style.

2. Take a screenshot of the watermark ascii art.

3. Go to https://www.photoroom.com/tools/background-remover and remove the background of the screenshot.

4. Save the watermark as `dist/watermark.png`.