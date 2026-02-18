// const amount = 9;

// if(amount<10){
//     console.log('small number')
// }else{
//     console.log('large number')
// }

// console.log("Hey!! this is first node app!!!")

// console.log(__dirname)
// setInterval(()=>{
//     console.log("hello world")
// },1000)

// const john = 'john'
// const peter = 'peter'

// const SayHi = (names) =>{
//     console.log(`hello there ${name}`) //console.log("hello there"+ name);  //old
// }
// const names = require('./4-names');
//console.log(names)
// const SayHi = require('./5-utils')
// const data = require('./6-alternative')
// require('./7-mind-grenade')
//console.log(data)

// SayHi('susan')
// SayHi(names.john)
// SayHi(names.peter)

// OS module

const _ = require('lodash')

const items =[1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)