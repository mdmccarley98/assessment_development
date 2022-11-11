const Runner = require('../../_runners/runner.js')

function Node(value) {
    return {
        value,
        children: []
    }
}

function parseTree(treeString) {
    let nodes = {}
    treeString.split(',').forEach(relationship => {
        const [parent, child] = relationship.split('->')

        if (nodes[parent] === undefined) {
            nodes[parent] = Node(parent)
        }

        if (child !== undefined) {
            if (nodes[child] === undefined) {
                nodes[child] = Node(child)
            }
            nodes[parent].children.push(nodes[child])
        }
    })

    return nodes[treeString.charAt(0)]
}

function findShortestPath(tree) {
    if (tree.children.length === 0) return 1

    const distances = tree.children.map(child => findShortestPath(child))

    return result = 1 + Math.min(...distances)
}

function shortestPath(treeString) {
    const tree = parseTree(treeString)

    return findShortestPath(tree)
}

const run = Runner(shortestPath)

console.log('Public')
run(['A->B,A->C,B->D'], 2, 'Simple case.')
run(['1->2,2->3,3->4'], 4, 'Just one path.')
run(['C'], 1, 'Just one node.')

console.log('Private')
run(['4->2,4->6,2->1,6->3,6->9,3->0,3->8'], 3, 'Slightly bigger tree')
run(['4->2,4->6,2->1,6->3,6->9,3->0,3->8'], 3, 'Same, but different order of input.')
run(['A->B,A->C'], 2, 'Just two children.')
run(['A->B,A->C,C->D'], 2, 'Like the simple case, but the longer path comes from C.')
