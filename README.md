
## Install
`npm install`

## Running
`npm run start`

## Building a CSS file

- Pick a theme, for now the only one possible is `bootstrap`
- Visit [ColourLovers](http://www.colourlovers.com/patterns/most-loved/all-time/meta) and grab the ID of a cool pattern
- fire a `POST localhost:3000/build` with payload like:

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
```

Then you are able to get the CSS file with a `GET localhost:3000/css/bootstrap582552.css`