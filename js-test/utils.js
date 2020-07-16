// console.log('utils.js.called')

// const name = 'Mike'

// const add = function(a, b){
//     return a + b
// }

// const minus = function(a, b){
//     return a - b
// }

// // name을 노출시켜줘야 다른파일에서 받을수있다.
// module.exports = {name, add, minus}


console.log('utils.js.called')

module.exports = {
    name : 'Mike',

    add : function(a, b){
    return a + b
    },

    minus : function(a, b){
    return a - b
    }
}