# Rick and Morty Characteropedia

<img src="./public/site.jpg" alt="Rick And Morty"
	title="Site Image" height="250" />

This site uses the Rick and Morty API to render a database of characters, locations and episodes.

The finished site can be found at:

https://jasontoups.github.io/rick-and-morty-ts/

# Project Requirements

Bootstrap a Create React Application perferably with Typescript.

ex:

```
npx create-react-app my-app --template typescript
```

or if not using typescript, use javascript.

```
npx create react-app my-app --use-npm
```

Ensure that you are using the [latest LTS node release](https://nodejs.org/en/about/releases/).

Use the Rick and Morty REST API here: https://rickandmortyapi.com/documentation.

Do not use one of the Rick and Morty libraries listed on the page, please use a REST client of you choice, ex: Axios.

Take a look at the API docs for characters: https://rickandmortyapi.com/documentation/#character

The following is a prioritized list of features.

1. Design and build out a functioning character listing page with pagination.
2. Users can filter the results
3. The app is responsive
4. Bonus points if you take advantage of the location and episode endpoints to build your Rick and Morty user experience

# Dependencies

- node-sass
- react-hook-form
- gh-pages

## Integrating gh-pages

Install gh-pages as a dev-dependency

```
npm install gh-pages --save-dev
```

### Update the `package.json` file

1. Before the "dependencies" field, add a `homepage` field using this string template:
   - `"http://{username}.github.io/{repo-name}"`
   - where `{username}` is your GitHub username
   - and `{repo-name}` is the name of the GitHub repo you created.

```
"homepage": "https://myusername.github.io/guide-react-gh-pages",
"dependencies": {
```

> Make sure to add this homepage field and url to your package.json file. This URL is what `gh-pages` uses to deploy your app to.

2. Update the existing `scripts` field with the following:

```
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  "start": "react-scripts start",
  "build": "react-scripts build",
}
```

3. Deploy the app from your main local branch.

```
npm run deploy
```

The `predeploy` script will run automatically before the `deploy` script runs.

The `deploy` script will create a gh-pages branch for the build.

### Update GitHub Repo Settings

**Go to GitHub** and check for the gh-pages branch on your main page for your repo.
If you see the gh-pages branch, then go to your repo settings.

Towards the bottom of the setttings page, there's a section about GitHub Pages.

Under `source` you should see a dropdown menu of the different branches of your repo, point it to the `gh-pages` **branch** and click save.

> You shouldn't push anything to the gh-pages remote branch.

The app is now accessible at the URL you specified in the `homepage` field in the `package.json` file. You should see a link to it in your repo settings, under the GitHub Pages section.

# Todos

## API Call for All Characters

1. DONE - On page load, an api call should be made to get all of the characters from the database.
2. DONE - Save the api response in state on the Rendered Cards component.

## API Call for Filtered Results

1. The results of the filtered call.

## Cards

1. Done - Create single card component to pass props into it to populate the card fields. I don't think we need state on this, since we want to update the fields on the card after it renders.

## Rendered Cards

1. Done - Create the rendered cards container that will take the response from the API calls and render the results. Should pass api results into the container. This will be handled with state.
2. Done - Implement Infinite Scroll function that will add more cards as the user scrolls down.

## Metadata

1. Update the header with the whole logo, and see if I can grab the Rick & Morty icon from the api site. for the favicon

# API Results

## Characters

API Endpoint:
https://rickandmortyapi.com/api/character/

```
{
  "info": {
    "count": 671,
    "pages": 34,
    "next": "https://rickandmortyapi.com/api/character/?page=2",
    "prev": null
  },
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        ...(episode array continued)
      ],
      "url": "https://rickandmortyapi.com/api/character/1",
      "created": "2017-11-04T18:48:46.250Z"
    },
    ...(results array continued)
```

## Locations

API endpoint: https://rickandmortyapi.com/api/location/

```
{
  "info": {
    "count": 108,
    "pages": 6,
    "next": "https://rickandmortyapi.com/api/location/?page=2",
    "prev": null
  },
  "results": [
    {
      "id": 1,
      "name": "Earth (C-137)",
      "type": "Planet",
      "dimension": "Dimension C-137",
      "residents": [
        "https://rickandmortyapi.com/api/character/38",
        "https://rickandmortyapi.com/api/character/45",
        ...(episodes array continued)
      ],
      "url": "https://rickandmortyapi.com/api/location/1",
      "created": "2017-11-10T12:42:04.162Z"
    },
    ...(results array continued)
```

## Episodes

Api endpoint: https://rickandmortyapi.com/api/episode/

```
{
  "info": {
    "count": 41,
    "pages": 3,
    "next": "https://rickandmortyapi.com/api/episode/?page=2",
    "prev": null
  },
  "results": [
    {
      "id": 1,
      "name": "Pilot",
      "air_date": "December 2, 2013",
      "episode": "S01E01",
      "characters": [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/35",
        ...(characters array continued)
      ],
      "url": "https://rickandmortyapi.com/api/episode/1",
      "created": "2017-11-10T12:56:33.798Z"
    },
    ...(results array continued)
```

# Tech Requirements

## Design and build out a functioning character listing page with pagination.

There should be a list of characters on page load, and if we have an infinite scroll, then users could scroll indefinitely through the pagination.

The character listing card should have the image of the character, their name and all info that appears from the api return to the side.
Under both there should be two accordion sections for location and episodes array.

## Users can filter the results

There should be a search bar on the page header somewhere users can search for their characters.

I could do a search that possibly submits a request for every keypress. I have to see how long it takes to get the results back.

Otherwise, I can just use a submit button.

## The app is responsive

This shouldn’t be an issue. I could use CSS grid along with column overflow to wrap the results when they reach the edge of the page.

I could do a media query to control the width of the cards, possibly.

## Bonus points if you take advantage of the location and episode endpoints to build your Rick and Morty user experience

I would like to see more info about the location and episodes of the character, so I could make a request from the characters api, get the return, then loop through the return and make a request for the location and episodes from the api return of the characters.

## Handling Populating the Location Information

On the Character API return, we see the origin property has the display name of the planet with name, and the next property is url. We can make a direct api request for location information from this url and display it directly.

## Handling Populating the Episodes

On the Character API return, there is an array of episodes urls. The names of the episodes are not included.
So we could loop through the episodes array, and display the names of the episodes. When the user clicks on the episode name, and accordion pops down and displays the rest of the information.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
