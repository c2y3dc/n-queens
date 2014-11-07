/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
var findSolution = function (board, n, row, verifier, callback) {
  // if all rows exhausted?
  if(row === n){
    // increase count
    return callback();
  }

  for (var i = 0; i < n; i++) {
  //iterate over a row, making each decision once
    // place a piece
    board.togglePiece(row, i);
    // if !conflicts
    if(!board[verifier]()){
      // recurse
      return findSolution(board, n, row + 1, verifier, callback);
    }
  // remove a piece
    board.togglePiece(row, i);
  }
}

window.findNRooksSolution = function(n) {
  var board = new Board({n:n});
  var solution = board.rows();

  return findSolution(board, n, 0, 'hasAnyRooksConflicts', function() {
    // return solution
    solution = board.rows();
    return solution;
  });

  return solution;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({n:n});
  var solution = 0;

  var findSolution = function (row) {
    debugger;
    // if all rows exhausted?
    if(row === n){
      // increase count
      solution++;
      // stop
      return;
    }

    for (var i = 0; i < n; i++) {
    //iterate over a row, making each decision once
      // place a piece
      board.togglePiece(row, i);
      // if !conflicts
      if(!board.hasAnyRooksConflicts()){
        // recurse
        findSolution(row + 1);
      }
    // remove a piece
      board.togglePiece(row, i);
    }
  }

  findSolution(0);

  return solution;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n:n});
  var solution = board.rows();

  return findSolution(board, n, 0, 'hasAnyQueenConflictsOn', function() {
    // return solution
    solution = board.rows();
    return solution;
  });

  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

   var findSolution = function (row) {
    debugger;
    // if all rows exhausted?
    if(row === n){
      // increase count
      solutionCount++;
      // stop
      return;
    }

    for (var i = 0; i < n; i++) {
    //iterate over a row, making each decision once
      // place a piece
      board.togglePiece(row, i);
      // if !conflicts
      if(!board.hasAnyQueenConflictsOn()){
        // recurse
        findSolution(row + 1);
      }
    // remove a piece
      board.togglePiece(row, i);
    }
  }

  findSolution(0);

  return solutionCount;
};
