function numIslands(matrix) {
  let islands = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let nextJ = (j + 1) % matrix[i].length;
      if (matrix[i][j] === 1 && matrix[i][nextJ] === 1) {
        islands++;
      }

      let nextI = (i + 1) % matrix.length;
      if (matrix[i][j] === 1 && matrix[nextI][j] === 1) {
        islands++;
      }
    }
  }

  return islands;
}
