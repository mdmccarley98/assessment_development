const mySet = new Set()
mySet.add(1)
mySet.add(1)
mySet.add('a')
mySet.add('a')
mySet.add(undefined)
mySet.add(undefined)
mySet.add({prop: true})
mySet.add({prop: true})

console.log('Size:', mySet.size)

// 5
// 4
// 3
// 8