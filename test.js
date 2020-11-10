const dd = (val) => console.log(val)
const regex = require('./regex')
const mutator = require('./mediaMutator')
const junk = require('./junk')
// const { regex }= require('./index')
// dd(regex)
const inspector = require('./index')({
    regex,
    mutator,
    junk
})
dd(inspector.inspect("Rick's.and.Morty.S04E06.1080p.WEBRip.x264-CAFFEiNE[TGx]").filter())