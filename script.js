var board = null;
var game = new Chess();

// 1. Chess Board Logic
function onDrop(source, target) {
  // Check if the move is legal
  var move = game.move({
    from: source,
    to: target,
    promotion: 'q' // Always promote to Queen for simplicity
  });

  // If illegal move, snap back
  if (move === null) return 'snapback';
}

function onSnapEnd() {
  board.position(game.fen());
}

// Fix for the pieces not showing up!
var config = {
  draggable: true,
  position: 'start',
  onDrop: onDrop,
  onSnapEnd: onSnapEnd,
  pieceTheme: 'https://unpkg.com/@chrisoakman/chessboardjs@1.0.0/img/chesspieces/wikipedia/{piece}.png'
};

board = Chessboard('board', config);

// 2. Lesson Content
const lessons = [
  {
    title: "Lesson 1: The Knight",
    text: [
      "The knight moves in an L-shape.",
      "It can jump over other pieces.",
      "A knight is worth about three pawns."
    ]
  },
  {
    title: "Lesson 2: The Pawn",
    text: [
      "The pawn moves forward one square.",
      "On its first move, it can move two squares.",
      "Pawns capture diagonally."
    ]
  },
  {
    title: "Lesson 3: The Bishop",
    text: [
      "The bishop moves diagonally.",
      "It can move any number of squares.",
      "Each player starts with two bishops."
    ]
  },
  {
    title: "Lesson 4: The Rook",
    text: [
      "The rook moves horizontally or vertically.",
      "It is worth about five pawns.",
      "Rooks are very powerful on open files."
    ]
  }
];

let currentLessonIndex = 0;

// Function to display a lesson
function displayLesson(index) {
  const lesson = lessons[index];
  document.getElementById('lesson-title').textContent = lesson.title;
  
  const textContainer = document.getElementById('lesson-text');
  textContainer.innerHTML = ''; // Clear old text
  
  lesson.text.forEach(sentence => {
    const p = document.createElement('p');
    p.textContent = sentence;
    textContainer.appendChild(p);
  });
}

// Event Listener for the button
document.getElementById('next-lesson').addEventListener('click', () => {
  currentLessonIndex = (currentLessonIndex + 1) % lessons.length; // Loop back to 0
  displayLesson(currentLessonIndex);
});

// Load the first lesson on startup
displayLesson(0);
