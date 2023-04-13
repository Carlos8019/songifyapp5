# Getting Started with songifyapp5

This project is in development phase

## Install dependencies
Packages:

npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install --save @craco/craco
npm install --save-dev craco-alias
npm i -D react-router-dom 
npm install axios@latest
npm install cors-anywhere
npm i cheerio-without-node-native@0.20.2
 https://github.com/oyyd/cheerio-without-node-native

### run the project `npm start`

### Solve problems

### CORS
if you have an error loading lyrics
you have to acces to:
https://cors-anywhere.herokuapp.com/corsdemo

And click the button "Request temporary access to the demo server" in order to overcome cors problems

### Error 429
The API Genius has a maximun of request 50 per hour , songifyapp5 use this api in order to obtain the information
Last FM API doesn't  have lyrics and MusicMatch API has a maximun of 2k of information per request.
