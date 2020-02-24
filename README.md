
## Videothèque Appli

**1. Resume**

This Repository is the source code for the prototype of an Application.
Laurent Mahieu - laurentmahieu/github
It’s a project that lasted 3 weeks.

**2. Language**
React.native, Javascript, Redux.

**3. Quick Start**

First `git clone` this repo in a new folder. There is only Frontend on in this repository, and data from :  https://www.themoviedb.org

Then `npm i` in the folder, to install all libraries and dependencies.

To properly run this app, you need a count on https://www.themoviedb.org to get your own API_KEY.

To setup the app, you have to create a Dotenv file using the shema provide by the .env.dist file contain your API_KEY

Next you can install the application Expo on you mobile.

Come back in you terminal and launch `npm start`.

And  finaly scan the QR code with your mobile.

(if you meet the error : **Unable to resolve "Dimensions" from "node_modules/react-native-viewport-units/viewport-units.js" Failed building JavaScript bundle.**. 

you have to go in your "node_module" folder, find the folder "react-native-viewport-units", in viewport-units.js change line 4 : 

`  , Dimensions = React.Dimensions || require('Dimensions')`

by

`  , Dimensions = React.Dimensions `)


Congrat, The App is on fully operationnal.

**4. Code Architecture**

the Frontend use this API.(https://www.themoviedb.org)

The Frontend is organize as following.

A main folder API contains all differents function to get data from API.

with assets we have some pics for the lauch of our App. 

with Components contains our different Page and component to build it.

with Image we stock some pictures that we use in the App, like in our bottom bar navigation.

with Navigation, you can find our different route to pass from one page to another and go back. 

The Frontend works with Redux. All informations for the Favorites Film comes from Api are store into the redux's store.
