
## Install
`npm install`

## Running
`npm run start`

## Building a CSS file

- Pick a theme, for now the only one possible is `bootstrap`
- Visit [ColourLovers](http://www.colourlovers.com/patterns/most-loved/all-time/meta) and grab the ID of a cool pattern
- fire the request with payload like:

`POST localhost:3000/build`
```json
{
    "patternID": 582552,
    "theme": "bootstrap"
}
```

The response should be like:

```json
{
    "css": "css/bootstrap582552.css"
}
{ 
    "cssPath": "http://localhost:3000/css/582552",
    "demo": "http://localhost:3000/demo/bootstrap/582552"
}
```

Then you are able to get the CSS file with : 
`GET localhost:3000/css/bootstrap582552.css` 

Or point the browser to the demo to have a look on the new CSS.