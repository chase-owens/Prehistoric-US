# Prehistoric US

---

Prehistoric US displays dinosaur fossil discoveries, dinosaur track discoveries, and mammoth discoveries in the United States.

![Daytime Image](https://farm2.staticflickr.com/1875/42850857590_6656d32219_k.jpg)

![Night Image](https://farm2.staticflickr.com/1868/42850858320_4708c16203_k.jpg)

## Run the app

To run the app [click here]() or follow the steps below.

Clone the repository or download the zipped folder. Then open the terminal and in the command line navigate to the folder with

```
cd Prehistoric-US
```

To load dependencies, enter

```
npm install
```

And to run the app, enter

```
npm start
```

##Offline First
Bootsrapping wit Create React App provides offline-first functionality for the production build. To create a production build of the app, instead of

```
npm start
```

enter

```
npm run build
```

##App Overview

Dinosaur and Mammoth discoveries can be filtered to show all discoveries, only dinosaur fossils, dinosaur tracks, or mammoth bones. When items are clicked in a list, its marker on the map animates and an info window opens above it displaying the name from Wikipedia. Clicking the night button puts the app in night mode.

##Development

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

##Contributors

*Color Theme: [Color Hex](http://www.color-hex.com)
..*Day: [Planet Earthy Color Palette](http://www.color-hex.com/color-palette/65423)
..*Night: [Dark-Light Color Palette](https://www.color-hex.com/color-palette/64811)
*Formatting: [React Bootstrap](http://reactstrap.github.io)
*Map: [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial)
*Content: [Wikipedia API](https://www.mediawiki.org/wiki/API:Main_page)

##Future Directions

I'd like to add more sites to the mapp and create additional funcitonality that permits users to get directions when requested, pull up discoveries within a specified range, and add visited locations to a list of 'Places Been.'
