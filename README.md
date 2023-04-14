# Getting Started with songifyapp5 

Songifyapp5 is a react app that convert song name's into GIF's also provides information about songs such as lyrics, artist, albumm.   
The user enter a song name and songifyapp5 search information using public api's like lastfm and genius api providing the song's details.  

This project is in development phase 

## Install dependencies 
#install node modules folder    
npm init 

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
![imagen](https://user-images.githubusercontent.com/20178297/231666417-4a5e8d44-16d3-46f3-b531-957deca87dc7.png)


### Error 429
The API Genius has a maximun of request by 50 per hour , songifyapp5 use this api in order to obtain the information
Last FM API doesn't have lyrics and MusicMatch API has a maximun of 2k of information per request.

## Page details   
Main menu   
The application has a main menu with two options
![imagen](https://user-images.githubusercontent.com/20178297/231776745-ffb65612-ce51-46ce-9678-150dcb548070.png)

"Recherche de titres": This component search a song according to the information provided by user, showing an autocomplete input with the matches:  
![imagen](https://user-images.githubusercontent.com/20178297/231777286-d581bae4-fdd9-4636-a390-39f106791631.png)  

When user select a song, songifyapp5 show related information about it, including album art, lyric, artis, the gifs associated to the song, and gifs of words from the lyric.       
![imagen](https://user-images.githubusercontent.com/20178297/231953414-a233c40c-c07a-4263-9ee0-d6b24338f2dd.png)


"Titres favoris": In development...

### Technical details  
Songifyapp5 uses react as a programming language.
Project structure:  
![imagen](https://user-images.githubusercontent.com/20178297/231787946-4ae881d1-4ee0-488c-b9f9-a7b67d070b2f.png)


