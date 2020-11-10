const dd = (val) => console.log(val)

class StringSpector {

    constructor(options = {}){
        Object.assign(this, options)
        this.state = {}
    }

    loadString(string){
        this.original = new String(string)
        this.string = this.original.toLowerCase()
        return this
    }

    inspect(string){
        if(!this.regex) return this
        if(string) this.loadString(string)
        for(let key in this.regex){
            for(let regex of this.regex[key]){
                let match = this.string.match(regex)
                if(match) this.state[key] = match
            }
        }
        if(this.mutator) Object.assign(this.state, this.mutator(this))
        this.clean()
        return this
    }

    filter(){
        if(!this.string) return this
        let string = this.string.match(/[\w'-]+/g)
        if(this.junk) string = string.filter(el => !this.junk.includes(el))
        this.string = string.join(' ')
        return this
    }

    clean(){
        const remove = []
        if(this.state.year) remove.push(this.state.year)
        if(this.state.id) remove.push('ff'+this.state.id)
        if(this.state.episode) remove.push(this.state.episode.epId)
        return remove
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