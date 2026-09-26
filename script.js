var board = null;
var game = new Chess();

function onDrop(source, target) {
  var move = game.move({ from: source, to: target, promotion: 'q' });
  if (move === null) return 'snapback';
}

function onSnapEnd() {
  board.position(game.fen());
}

var config = {
  draggable: true,
  position: 'start',
  onDrop: onDrop,
  onSnapEnd: onSnapEnd
};

board = Chessboard('board', config);

// Simple lesson switching
const lessons = [
  {
    title: "The Knight",
    text: [
      "The knight moves in an L-shape.",
      "It can jump over other pieces.",
      "A knight is worth about three pawns."
    ]
  },
  {
    title: "The Pawn",
    text: [
      "The pawn moves forward one square.",
      "On its first move, it can move two squares.",
      "Pawns capture diagonally."
    ]
  }
];

let current = 0;

document.getElementById('next-lesson').addEventListener('click', () => {
  current = (current + 1) % lessons.length;
  const lesson = lessons[current];

  document.querySelector('#lesson-section h2').textContent = lesson.title;

  const p = document.querySelectorAll('#lesson-section p');
  lesson.text.forEach((t, i) => {
    if (p[i]) p[i].textContent = t;
  });
});
