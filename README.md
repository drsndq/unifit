startup sprint 2019 unifit chrome extension

front-end prototype with no memory access built in

to use in your own browser:

1. copy this repository onto your computer
2. enter the terminal and use `cd` to change directories until you are in the unifit folder
3. use `npm install` to install all necessary dependencies to run the application locally
4. type `npm run build` into your terminal whle in the /unifit directory
5. enter google chrome and type 'chrome://extensions' into the url bar
6. turn developer mode on in the top right and select 'load unpacked' on the left
7. enter the 'build' folder of the unifit file and allow it to upload into chrome
8. you should be good to go!

foreseeable troubleshooting:

if you get an error in google chrome about 'content security privacy' or 'protocol' i honestly can't remember, you may need to `copy the text in the error message starting with 'sha-+' and ending with '='` and then `paste that into the manifest.json file in your local unifit folder`. you will then need to again run `npm run build` in your terminal, go to your chrome browser and select 'load unpacked' again and reload the folder
