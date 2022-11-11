const obj = {
    prop: 1
}
console.log(obj.prop)

Object.defineProperty(obj, 'prop', {
    writable: false,
    value: 2
})
console.log(obj.prop)

obj.prop = 3
console.log(obj.prop)