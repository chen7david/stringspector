const dd = (val) => console.log(val)
const { regex, mutator, junk, examples, langcodes, extensions } = require('./index')
const inspector = require('./index')({
    regex,
    mutator,
    junk,
    langcodes,
    extensions
})

const str = examples.movies[6]
// dd(str)
const res = inspector.loadString(str).filter().inspect().get()

dd(res)