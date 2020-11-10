# stringspector
```js
const inpector = require('stringspector')({
    junk: [/* some rex expression */, /* some string */],
    regex: { 
        episode: [/* some rex expression */, ...], 
        year: [/* some rex expression */, ...]
    },
    mutator: (state) => {
        if(state.episode){
            let [epId, s, e] = state.episode
            this.state.episode = {
                s: parseInt(s,10),
                e: parseInt(e,10),
                epId
            }
        }

        if(this.state.year){
            let [year] = this.state.year
            this.state.year = year
        }

        //add more conditions here ...

        return state
    }
})
const string = 'Rick.and.Morty.S04E06.1080p.WEBRip.x264-CAFFEiNE[TGx]'
const metadata = inpector.inspect().metadata(string)
console.log(metadata)
/*

*/
```

```js
const { regex, mutator, junk, examples } = require('stringspector')
const inspector = require('stringspector')({
    regex,
    mutator,
    junk
})

const str = examples.movies[0]
const res = inspector.loadString(str).filter().inspect().get()
```