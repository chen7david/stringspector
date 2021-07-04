global.z = (v) => console.log(v)
const { movies, shows } = require('./sample')
// const name = movies[2]
const name = shows[2]
const Inspector = require('./Inspector')
const search = new Inspector(name)
const string = Inspector.inspect(name)
    .lowercase()
    .whitespace()
    .specialchar()
    .movie()
    .episode()
    .year()
    .resolution()
    .filter()
    .done()

    // .match('junk',[
    //     /\bx\d*/g,
    //     /\bh26\d\.*/g,
    //     /\b26\d\.*/g,
    //     /\b\d*mb/g,
    //     /\b\d{3,4}p/g,
    //     /\byts*/g,
    //     /\bweb*/g,
    //     /\btgx\b/g,
    //     /\blt\b/g,
    //     /\bmp4\b/g,
    //     /\bmvk\b/g,
    //     /\bamzn\b/g,
    //     /\bddp5\b/g,
    //     /\brartv\b/g,
    // ])
    
z({metadata: string})

