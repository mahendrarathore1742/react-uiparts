## UIkits Ui Components
![](https://i.ibb.co/x3wdFh2/Uikits-UI-Components.png)



> ###  Full response card style  in css in react js. It's easy to use and provides powerful effect.

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/mahendrarathore1742)

#  Table of Contents :-
- ### CardEffect
- ###  TileHover
- ###  CardHover


#    features
- ###   Browser Support
- ###  Mobile response
- ###  Pass the value by props

# Installtion :- 

`npm i react-uiparts`

# How to use -:

###  CardEffect -:
Pass value by props, like the code-:
![](https://media.giphy.com/media/rTshGXZ3HxS5hji8gs/giphy.gif)

## Example

```bash
import React from "react";
import { CardHover, TileHover, CardEffect } from "react-uiparts";
import ReactDOM from "react-dom";

var Data = [
  {
    title: "Hello im msr",
    content:
      "Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication,",
    src:
      "https://cdn.pixabay.com/photo/2020/09/24/03/50/success-5597527_960_720.png",

    Colors: "red"
  },
  {
    title: "Hello im bana",
    content:
      "Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication, ",
    src:
      "https://cdn.pixabay.com/photo/2020/09/24/03/50/success-5597527_960_720.png",

    Colors: "blue"
  },
  {
    title: "Hello im neha",
    content:
      "Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication,",
    src:
      "https://cdn.pixabay.com/photo/2020/09/24/03/50/success-5597527_960_720.png",

    Colors: "red"
  }
];

ReactDOM.render(
  <>
    <CardEffect Data={Data} />
  </>,
  document.getElementById("root")
);
  

```


### CardHover -:
![](https://media.giphy.com/media/7owpvomApGmcAbJqSK/giphy.gif)
Pass value by props, like the code-:

## Example :- 

```bash
import React from "react";
import { CardHover, TileHover, CardEffect } from "react-uiparts";
import ReactDOM from "react-dom";

var Data = [
  {
    title: "Hello im msr",
    content:
      "Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication,",
    src:
      "https://cdn.pixabay.com/photo/2020/09/24/03/50/success-5597527_960_720.png",
       link: "https://www.google.com/",

    Colors: "red"
  },
];

ReactDOM.render(
  <>
    <CardHover Data={Data} />
  </>,
  document.getElementById("root")
);

```

###  TileHover -:
![](https://media.giphy.com/media/TiyvoQbwPbJTwdpVAc/giphy.gif)

## Example

```bash
import React from "react";
import { CardHover, TileHover, CardEffect } from "react-uiparts";
import ReactDOM from "react-dom";

var Tile = [
  {
    title: "Hello im City",
    content:
      "Nature is a British weekly scientific journal founded and based in London, 		   			England. As a multidisciplinary publication,",
    src:
      "https://cdn.pixabay.com/photo/2020/12/17/00/43/skyscrapers-5838029_960_720.jpg"
  },
  {
    title: "Hello im Tree",
    content:
      "Nature is a British weekly scientific journal founded and based in London, 		   			England. As a multidisciplinary publication,",
    src:
      "https://cdn.pixabay.com/photo/2020/12/13/16/22/snow-5828736_960_720.jpg"
  },
  {
    title: "Hello im Ice",
    content:
      "Nature is a British weekly scientific journal founded and based in London, 		   			England. As a multidisciplinary publication,",
    src:
      "https://cdn.pixabay.com/photo/2020/11/02/18/03/snow-5707452_960_720.jpg"
  }
];

ReactDOM.render(
  <>
    <TileHover Tile={Tile} />
  </>,
  document.getElementById("root")
);
```



