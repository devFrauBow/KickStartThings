const barbaraTyped = ['aaaaaaaaa', 'bbbbc', 'IIllovecoding']
const textToType = ['aaaa','bbbbb','Ilovecoding']

function testHowMany(a, b){
    if (a.length < b.length) return console.log('IMPOSSIBLE TO DO ONLY DELETING')
    const aValues = Array.from(a)
    const bValues = Array.from(b)
    if (a.length == b.length){
        if (aValues !== bValues) return console.log('IMPOSSIBLE TO DO ONLY DELETING')
        return 0
    }
    var totalToRemove = 0
    for (let i = 0; i < aValues.length; i++){
        if (aValues[i] == bValues[i]) {continue}
        if (aValues[i] !== bValues[i]){
        totalToRemove += 1
        aValues.splice(i, 1)
        }
        if (aValues.length < bValues.length){
            return console.log('IMPOSSIBLE TO DO ONLY REMOVING')
        }
        if (bValues[bValues.length - 1] == aValues[i]){
            if (aValues.length > bValues.length){
                totalToRemove += aValues.length - bValues.length
                return console.log(`NEED TO REMOVE: ${totalToRemove}`)
            }
        }
    }return console.log(`NEED TO REMOVE: ${totalToRemove}`)

}
testHowMany(barbaraTyped[0], textToType[0]) 
testHowMany(barbaraTyped[1], textToType[1]) 
testHowMany(barbaraTyped[2], textToType[2]) 