# stringspector
```js
const inpector = require('stringspector')({
    junk: [/* some rex expression */, ...],
    regex: { 
        episode: [/* some rex expression */, ...], 
        year: [/* some rex expression */, ...]
    },
    mutator: (self) => {
        const {state, string} = self 
        if(state.episode){
            let [epId, s, e] = state.episode
            const name = string.split(epId)
            state.episode = {
                s: s && epId.includes('s') ? parseInt(s,10): null,
                e: e && epId.includes('e') ? parseInt(e,10): null,
                epId,
                name: name[1].replace(/^\s+|\s+$/g, '')   
            }
            state.show = name[0].replace(/^\s+|\s+$/g, '')
        }

        if(state.year){
            let [year] = state.year
            state.year = year
            state.movie = string.split(year)[0].replace(/^\s+|\s+$/g, '')
        }

        if(state.id){
            let [id] = state.id
            state.id = id.replace('ff', '')
        }

        state.query = self.string

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
const { regex, mutator, junk, examples, langcodes } = require('stringspector')
const inspector = require('./index')({
    regex,
    mutator,
    junk,
    langcodes
})

const str = examples.movies[0]
const res = inspector.loadString(str).filter().inspect().get()
```