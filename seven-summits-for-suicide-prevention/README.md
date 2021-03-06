# Seven Summits for Suicide Prevention 

![](https://i.giphy.com/media/fXgKfzV4aaHQI/source.gif)

## Project Description

Seven Summits for Suicide Prevention is a biennial mountaineering fundraiser that donates 100% of proceeds to small-budget, high-impact nonprofits in the suicide prevention and postvention space. By creating an app that calls on the Hiking Project API, Mountain Project API, Dark Sky API, GoodReads API, News API and most importantly, the Fundraise.com API, Seven Summits for Suicide Prevention will create an immersive and interactive experience for all past and potential donors.

The site will allow visitors to learn more about 9 specific mountaineering trips, with nearby trek and technical climb data, environmental and weather data, relevant books, and current news regarding the specific trip they're viewing, in addition to the core function of donating and selecting the nonprofit they wish their funds to go to.

fundraise.com https://api.fundraise.com/v1/organizations/seven-summits-for-suicide-prevention/fundraisers/misha-kessler.json

DarkSky https://api.darksky.net/forecast/274cf00e552f24b5916ef21ce7c68873/27.9881,86.9250

Pixabay https://pixabay.com/api/?key=12896996-4b7f5a90396937631469651c1&q=mount+everest&image_type=photo

## Wireframes

![] (https://imgur.com/a/DPkvD5M)

![] (seven-summits-for-suicide-prevention/src/assets/landing.png)

![] (seven-summits-for-suicide-prevention/src/assets/destination.png)

![] (seven-summits-for-suicide-prevention/src/assets/completed-destination.png)

![] (seven-summits-for-suicide-prevention/src/assets/donate.png)

### MVP/PostMVP - 5min

The MVP will feature 9 hard-coded mountain destinations and will call on the fundraise.com API to prominently feature and call viewers to action, as well as the DarkSky API to show weather information regarding the destinations. 

#### MVP EXAMPLE
- Call on Fundraise API to render fundraiser data and invite veiwers to donate.
- Call on DarkSky API to render summit's weather info.
– Call on Pixabay to render random, HQ images of the specific summit.
– Display related, hard-coded information, such as trips completed, planned trips, summit elevation, route information, funds raised, number of donors.
– Utilize ReactRouter for routing.
– Utilize MaterialUI for advanced design.

#### PostMVP EXAMPLE

- Add On-site Donation Capability to Fundraise API. 
– Add GoodReads, Hiking Project, Mountain Project for more immersive and expansive UE.

## React Component Hierarchy


App (Src)

|__ assets/

      |__ data-tests

      |__ fonts

      |__ graphics

      |__ images

      |__ mockups

|__ components/
     
      |__ Header.jsx
      
      |__ Hero.jsx

      |__ Fundraiser.jsx

      |__ Weather.jsx

      |__ CTA.jsx

      |__ Footer.jsx

|__ ui-modules/
     
      |__ ProgressIndicatingBar


|__ Pages/

      |__ Landing.jsx
      
      |__ Destination.jsx

            |__ MountEverest

            |__ MountEverestBaseCamp

            |__ Aconcagua

            |__ MountDenali

            |__ MountKilimanjaro

            |__ MountElbrus

            |__ VinsonMassif

            |__ PuncakJaya (Carstenz Pyramid)

            |__ MountBlanc

            |__ MountKosciuszko

      |__ Get Involved.jsx

      |__ Contact.jsx

|__ services/

      |__ fundraiser.js
      
      |__ weather.js

      |__ pix.js



## Functional Components

| Component | Description | Time Required |
| --- | :---: | --- |
| App.jsx (Class) | This will render the site with conditional/route rendering. | ... |
| Header.jsx (Function) | This will render the header and header navigation. | Completed |
| Hero.jsx (Class) | This will take location props, pass to FetchPix, and render the response image data from the Pixabay API. | 30 Minutes |
| FetchPix.js (Function) | This will take the location props and return the response data image from Pixabay. | Completed |
| CallToAction.jsx (Function) | This will render a viewer CTA to donate, get involved, etc. | 30 Minutes |
| Footer.jsx (Function) | This will render the footer copyright information, IP credit, and footer navigation. | 30 Minutes |
| Fundraiser.jsx (Class) | This will take location props, pass to FetchFundraiser, and return the data. | ... |
| FetchFundraiser.js (Function) | This will take the location props and return the response data from the Fundraise.com API. | Completed |
| Weather.jsx (Class) | This will take the location props, pass to FetchWeather, and return the data. | ... |
| FetchWeather.js (Function) | This will render the response data from the DarkSky API. | Completed |


<!-- ## Time Frames
Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

## Additional Libraries
 MaterialUI
 React Router DOM

## Code Snippet
Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.  -->