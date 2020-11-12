const p = require('path')

const dd = (val) => console.log(val)

class StringSpector {

    constructor(options = {}){
        Object.assign(this, options)
    }

    loadString(string){
        this.state = {}
        this.original = new String(string)
        this.string = this.original.toLowerCase()
        return this
    }

    inspect(){
        if(!this.regex) return this
        for(let key in this.regex){
            for(let regex of this.regex[key]){
                let match = this.string.match(regex)
                if(match) this.state[key] = match
            }
        }

        if(this.langcodes){
            let lang = this.langcodes.find(code => this.string.match(new RegExp(`\\b${code}\\b`)))
            if(lang) Object.assign(this.state, {lang})
        }

        if(this.extensions){
            const ext = p.extname(this.original.toLowerCase())
            let type = Object.keys(this.extensions).find(type => this.extensions[type].includes(ext))
            if(type && type) Object.assign(this.state, {type, ext})
        }

        if(this.mutator) Object.assign(this.state, this.mutator(this))
        return this
    }

    filter(){
        if(!this.string) return this
        let string = this.string.match(/[\w'-]+/g)
        if(this.junk) string = string.filter(el => !this.junk.some(e => e.test(el)))
        this.string = string.join(' ')
        return this
    }

    get(){
        return this.state
    }
}

exports = module.exports = (options = {}) => new StringSpector(options)

module.exports.junk = require('./junk'),
module.exports.regex = require('./regex'),
module.exports.mutator = require('./mutator')
module.exports.examples = require('./examples')
module.exports.langcodes = require('./langcodes')
module.exports.extensions = require('./extensions')