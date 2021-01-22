const fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"],
];

let moves = ["up", "left", "right", "left", "left"];

function charactersHovered(i, j, moves) {
  let results = [];

  for (move of moves) {
    if (move == "left") {
      j = (j + fighters[i].length - 1) % fighters[i].length;
      results.push(fighters[i][j]);
    } else if (move == "right") {
      j = (j + 1) % fighters[i].length;
      results.push(fighters[i][j]);
    } else if (move == "up") {
      if (i !== 0) {
        i = i - 1;
      }
      results.push(fighters[i][j]);
    } else if (move == "down") {
      if (i !== fighters.length - 1) {
        i = i + 1;
      }
      results.push(fighters[i][j]);
    }
  }

  return results;
}
