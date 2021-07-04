# stringspector
```js
const example_string = 'Rick.and.Morty.S05E01.Mort.Dinner.Rick.Andre.1080p.AS.WEBRip.AAC2.0.H264-BTN[TGx]'
const inspector = require('stringspector')
const metadata = inspector.inspect(example_string)
    .lowercase()   // sets example_string to lowercase
    .whitespace()  // removes all double or greater white space and trims
    .specialchar() // removes all non alpha-nymerical characters
    .movie()       // extracts movie data if available
    .episode()     // extracts tv-show data if available
    .year()        // extracts year if available
    .resolution()  // extracts resolution if available
    .filter()      // removes all metadata from example_string
    .done()        // returns all matadata

console.log({metadata})
```
##### console output
```cmd
{
  metadata: {
    episode: 1,
    episode_id: 's05e01',
    season: 5,
    showname: 'rick and morty',
    resolution: '1080p',
    string: 'rick and morty mort dinner rick andre as webrip aac2 0 h264-btn tgx'
  }
}
```