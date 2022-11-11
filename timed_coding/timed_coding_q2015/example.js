const Runner = require('../../_runners/runner.js')

function isValid(board, coordinate) {
    return coordinate >= 0 && coordinate < board.length
}

const UP = [-1, 0]
const DOWN = [1, 0]
const RIGHT = [0, 1]
const LEFT = [0, -1]

const move = (direction, position) => (
    position.map((coordinate, index) => direction[index] + coordinate)
)

function confirmCaptured(board, position, color, visited) {
    if (!isValid(board, position[0]) || !isValid(board, position[1])) return true
    if (visited.includes(`${position[0]},${position[1]}`)) return true
    
    const value = board[position[0]][position[1]]
    if (value === '.') return false
    if (value !== color) return true

    const newVisited = [...visited, `${position[0]},${position[1]}`]
    if (value === color) {
        return [UP, DOWN, LEFT, RIGHT].reduce((captured, direction) => {
            return captured && confirmCaptured(board, move(direction, position), color, newVisited)
        }, true)
    }
}

function is_captured(board, position) {
    const parsedBoard = board.split('\n').map(row => row.split(''))

    return true && confirmCaptured(parsedBoard, position, parsedBoard[position[0]][position[1]], [])
}

const run = Runner(is_captured)

console.log('Public: ')

const smallBoard = 
`...
.B.
...`
run([smallBoard, [1, 1]], false, 'Simplest uncaptured case.')

const smallCapturedBoard = 
`.W.
WDW
.W.`
run([smallCapturedBoard, [1, 1]], true, 'Simplest captured case.')

const almostCaptured =
`...
WBW
.W.`
run([almostCaptured, [1, 1]], false, 'Almost captured.')

const againstTopEdge =
`WBW
.W.
...`
run([almostCaptured, [0, 1]], false, 'Captured on top edge.')

const eyeInMiddle =
`WWWWW
WBBBW
WB.BW
WBBBW
WWWWW`
run([eyeInMiddle, [1, 1]], false, 'Eye in middle of circular group.')

const l_shapedGroupCaptured =
`.WWW.
WBBW.
.WBW.
.WBW.
..W..`
run([l_shapedGroupCaptured, [1, 1]], true, 'L-shaped group captured.')

console.log('\n\nPrivate: ')

const againstRightEdge =
`..W
.WB
..W`

run([againstRightEdge, [1, 2]], true, 'Captured on right edge.')

run([againstRightEdge, [0, 2]], false, 'Same board, other color.')

const capturedGroup =
`.BW
BWW
.BW`
run([capturedGroup, [1, 1]], true, 'Captured group against edge.')

const almostCapturedGroup =
`.BW
BWW
.B.`
run([almostCapturedGroup, [1, 1]], false, 'Almost captured group against edge.')

const onlyOneColor =
`BBB
BBB
BBB`
run([onlyOneColor, [1, 1]], true, 'Impossible, but captured.')