## Extensions needed
- One Dark Pro
- Apc Customize UI++
- Clock

## Notes
- `settings` and `keybindings` backup are in the `dist` directory.
- Known issues: 
  - *The sliding animation may cause some extensions for previewing stuff (SVG, Markdown,...) to not work properly, you need to switch to another tab in the same editor group and switch back to it to fix, currently disable the animation*.

## To update the custom css file
1. Modify files located at `src/scss/*`

2. Run `yarn build` to compile the files into `dist/custom.minified.css`.

## To update the watermark
1. Go to https://texteditor.com/multiline-text-art/ and look for the **Dark with shadow** style.

2. Take a screenshot of the watermark ascii art.

3. Go to https://www.photoroom.com/tools/background-remover and remove the background of the screenshot.

4. Save the watermark as `dist/watermark-dark.png` or `dist/watermark-light.png`.

## Preview
1. Landing page at full screen with all panels opened
![image](https://github.com/Hareki/vscode-configurations/assets/81374684/7d602dd6-9fc2-47cb-a17d-b6d07eea9003)

2. Typical UI
![image](https://github.com/Hareki/vscode-configurations/assets/81374684/158e4bac-f6e1-40a4-899e-7b05d0410c88)
