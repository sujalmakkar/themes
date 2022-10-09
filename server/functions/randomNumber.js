function randomNumber(length){
    const r = (Date.now() + Math.random())
    return parseInt(((Math.floor(r)).toString()).slice(-length))
}

module.exports = randomNumber;