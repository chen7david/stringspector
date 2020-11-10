const dd = (val) => console.log(val)
const { regex, mutator, junk, examples } = require('./index')
const inspector = require('./index')({
    regex,
    mutator,
    junk
})

const str = examples.shows[6]
dd(str)
const res = inspector.loadString(str).filter().inspect().get()

dd(res)