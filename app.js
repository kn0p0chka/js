const people = [
   {id:1, name:"Wiktor", age:22},
   {id:2, name:"Helena", age:17},
]

// let res = []
// people.forEach(function(el){
// res.push(el.name)
// })
function getValue(array,key){
let res =[]
array.forEach(function(el) {
    // res.push(el.key)
    console.log(el.key)
});
return res;
}


console.log(getValue(people,"name"))
