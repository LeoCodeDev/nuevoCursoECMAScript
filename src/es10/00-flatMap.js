//Flat

const flatArr = [1,2,3,4,5,[1,2,3,4,5,[1,2,3,4,5],1,2,3,4,5],2,3,4,5,[1,2,3,4,5]]
console.log(flatArr)
console.log(flatArr.flat(2))

//flatMap

const flatMapArr = [1,2,3,4,5,6,7,8]
const flatedMapArr = flatMapArr.flatMap((v) => [v, v*2])
console.log(flatedMapArr)
