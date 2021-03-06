# Prehistoric US

---

Prehistoric US displays dinosaur fossil discoveries, dinosaur track discoveries, and mammoth discoveries in the United States.

![Daytime Image](https://farm2.staticflickr.com/1851/43946504094_9e05dc3818_h.jpg)

![Night Image](https://farm2.staticflickr.com/1890/30794706198_08af918962_h.jpg)

## Run the app

To run the app [click here](https://chase-owens.github.io/Prehistoric-US/) or follow the steps below.

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

## Offline First

Bootsrapping wit Create React App provides offline-first functionality for the production build. To create a production build of the app, instead of

```
npm start
```

enter

```
npm run build
```

## App Overview

Dinosaur and Mammoth discoveries can be filtered to show all discoveries, only dinosaur fossils, dinosaur tracks, or mammoth bones. When items are clicked in a list, its marker on the map animates and an info window opens above it displaying the name from Wikipedia. Clicking the night button puts the app in night mode.

## Development

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Contributors

- Icons: [The Noun Project](https://thenounproject.com)
- Color Theme: [Color Hex](http://www.color-hex.com)
  - Day: [Planet Earthy Color Palette](http://www.color-hex.com/color-palette/65423)
  - Night: [Dark-Light Color Palette](https://www.color-hex.com/color-palette/64811)
  - Dark Map: [Google Maps Developers Example](https://developers.google.com/maps/documentation/javascript/styling)
- Formatting: [React Bootstrap](http://reactstrap.github.io)
- Map: [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial)
- Content: [Wikipedia API](https://www.mediawiki.org/wiki/API:Main_page)

## Future Directions

I'd like to add more sites to the map and create additional funcitonality that permits users to get directions when requested, pull up discoveries within a specified range, and add visited locations to a list of 'Places Been.'
