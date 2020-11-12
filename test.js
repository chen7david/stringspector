const dd = (val) => console.log(val)
const { regex, mutator, junk, examples, langcodes } = require('./index')
const inspector = require('./index')({
    regex,
    mutator,
    junk,
    langcodes
})

const str = examples.movies[0]
dd(str)
const res = inspector.loadString(str).filter().inspect().get()

dd(res)