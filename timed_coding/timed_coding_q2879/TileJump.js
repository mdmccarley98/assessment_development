function pathToExit(tiles, i = 0, j = 0, visited = {}, path = []) {
  if (i >= tiles.length || j >= tiles[0].length || visited[[i, j]]) {
    return [];
  }

  path.push([i, j]);

  if (i === tiles.length - 1 && j === tiles[0].length - 1) {
    return path;
  }

  visited[[i, j]] = true;

  let paths = [
    pathToExit(tiles, i + tiles[i][j], j, visited, path),
    pathToExit(tiles, i, j + tiles[i][j], visited, path)
  ];

  for (const p of paths) {
    if (p?.length > 0) {
      return path;
    }
  }
}

function canReachExit(tiles) {
  return Boolean(pathToExit(tiles, 0, 0));
}

const tiles = [[
  [1, 2, 0],
  [3, 2, 1],
  [5, 1, 1]
], [
  [1, 3, 2, 4],
  [2, 2, 0, 1],
  [5, 1, 1, 2]
]];

console.assert(canReachExit(tiles[0]) === true);
console.assert(canReachExit(tiles[1]) === false);

