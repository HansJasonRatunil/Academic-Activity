const operatorList = document.getElementById('operator-list');
const levelButtons = document.querySelectorAll('.sidebar > button[data-level]');
const generateBtn = document.getElementById('generate-btn');
const checkBtn = document.getElementById('check-btn');
const hintBtn = document.getElementById('hint-btn');
const num1El = document.getElementById('num1');
const num2El = document.getElementById('num2');
const answerEl = document.getElementById('answer');
const operatorSymbolEl = document.getElementById('operator-symbol');
const feedbackEl = document.getElementById('feedback');
const hintEl = document.getElementById('hint');
const timerEl = document.getElementById('timer');
const scoreEl = document.getElementById('score');
const streakEl = document.getElementById('streak');
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const musicToggle = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');
const correctSound = document.getElementById('correct-sound');
const mascotEl = document.getElementById('mascot');

// MUSIC
bgMusic.volume = 0.4;
let musicPlaying = false;

function updateMusicButton() {
    if (musicPlaying) {
        musicToggle.classList.add('playing');
        musicToggle.classList.remove('muted');
        musicToggle.innerHTML = '&#127925;';
        musicToggle.setAttribute('aria-label', 'Turn off background music');
    } else {
        musicToggle.classList.remove('playing');
        musicToggle.classList.add('muted');
        musicToggle.innerHTML = '&#128263;';
        musicToggle.setAttribute('aria-label', 'Turn on background music');
    }
}

musicToggle.addEventListener('click', () => {
    if (musicPlaying) {
        bgMusic.pause();
        musicPlaying = false;
    } else {
        bgMusic.play().catch(() => {
            // Autoplay was blocked; user can try the button again
            musicPlaying = false;
            updateMusicButton();
        });
        musicPlaying = true;
    }
    updateMusicButton();
});

updateMusicButton();

// SIDEBAR
function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
}

function toggleSidebar() {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
}

menuToggle.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', closeSidebar);

// Close the mobile sidebar automatically after picking an operator or difficulty
operatorList.addEventListener('click', closeSidebar);
document.querySelectorAll('.sidebar > button[data-level]').forEach(btn => {
    btn.addEventListener('click', closeSidebar);
});

// GAME STATE
let currentOp = '+';
let currentLevel = 'easy';
let correctAnswer = null;
let currentOpSymbol = '+';
let hintUsed = false;

let score = 0;
let streak = 0;

let elapsedSeconds = 0;
let timerInterval = null;

const points = { easy: 10, medium: 20, hard: 30 };

// TIMER
function startTimer() {
    if (timerInterval) return;
    timerInterval = setInterval(() => {
        elapsedSeconds++;
        const mins = String(Math.floor(elapsedSeconds / 60)).padStart(2, '0');
        const secs = String(elapsedSeconds % 60).padStart(2, '0');
        timerEl.textContent = `${mins}:${secs}`;
    }, 1000);
}

// PROBLEM GENERATION
const ranges = {
    easy:   { min: 0,  max: 10 },
    medium: { min: 10, max: 50 },
    hard:   { min: 50, max: 200 }
};

// Operator selection
operatorList.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (!li) return;
    operatorList.querySelectorAll('li').forEach(item => item.classList.remove('active'));
    li.classList.add('active');
    currentOp = li.dataset.op;
});

// Difficulty selection
levelButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        levelButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentLevel = btn.dataset.level;
    });
});

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickOperator() {
    if (currentOp === 'random') {
        const ops = ['+', '-', '×', '÷'];
        return ops[randomInt(0, ops.length - 1)];
    }
    return currentOp;
}

// GENERATE PROBLEM
function generateProblem() {
    const { min, max } = ranges[currentLevel];
    const op = pickOperator();
    let a = randomInt(min, max);
    let b = randomInt(min, max);

    if (op === '÷') {
        b = randomInt(1, Math.max(1, Math.floor(max / 2)));
        const multiplier = randomInt(1, Math.max(1, Math.floor(max / b)));
        a = b * multiplier;
        correctAnswer = multiplier;
    } else if (op === '-') {
        if (b > a) [a, b] = [b, a];
        correctAnswer = a - b;
    } else if (op === '×') {
        b = randomInt(min, Math.min(max, 12));
        correctAnswer = a * b;
    } else {
        correctAnswer = a + b;
    }

    num1El.value = a;
    num2El.value = b;
    operatorSymbolEl.innerHTML = op;
    currentOpSymbol = op;
    answerEl.value = '';
    checkBtn.classList.remove('correct', 'incorrect');
    feedbackEl.textContent = '';
    hintEl.textContent = '';
    hintUsed = false;

    startTimer();
}

// HINT SYSTEM
function showHint() {
    if (correctAnswer === null) {
        hintEl.textContent = 'Press Generate first! 🙂';
        return;
    }

    const a = num1El.value;
    const b = num2El.value;

    if (!hintUsed) {
        // First hint: a friendly, concrete strategy using everyday objects
        const strategies = {
            '+': `🍎 Imagine ${a} apples, then ${b} more apples join in. Count them all up!`,
            '-': `🍪 You have ${a} cookies and eat ${b} of them. How many are left?`,
            '×': `🐝 Picture ${b} groups with ${a} bees in each group. Count all the bees!`,
            '÷': `🍕 You have ${a} pizza slices to share equally between ${b} friends. How many slices does each friend get?`
        };
        hintEl.textContent = strategies[currentOpSymbol] || '🧩 Try breaking the problem into smaller, easier steps!';
        hintUsed = true;
    } else {
        // Second hint: a friendly number-range nudge instead of abstract digit talk
        const window = Math.max(1, Math.round(correctAnswer * 0.15)) + 1;
        const low = Math.max(0, correctAnswer - window);
        const high = correctAnswer + window;
        hintEl.textContent = `🔍 You're getting close! The answer is somewhere between ${low} and ${high}.`;
    }
}

// ANSWER CHECKING & SCORING
function playMascotReaction(mood) {
    mascotEl.classList.remove('happy', 'sad');
    // Force a reflow so the animation re-triggers even if the same class was just used
    void mascotEl.offsetWidth;
    mascotEl.classList.add(mood);
    setTimeout(() => mascotEl.classList.remove(mood), 700);
}

function checkAnswer() {
    if (correctAnswer === null) {
        feedbackEl.textContent = 'Press Generate first!';
        return;
    }
    const userAnswer = parseInt(answerEl.value, 10);
    checkBtn.classList.remove('correct', 'incorrect');

    if (isNaN(userAnswer)) {
        feedbackEl.textContent = 'Type a number first!';
        return;
    }

    if (userAnswer === correctAnswer) {
        checkBtn.classList.add('correct');
        streak++;
        score += hintUsed ? Math.round(points[currentLevel] / 2) : points[currentLevel];
        scoreEl.textContent = score;
        streakEl.textContent = streak;
        feedbackEl.textContent = hintUsed ? 'Correct! (hint used) 🎉' : 'Correct! 🎉';
        correctSound.currentTime = 0;
        correctSound.play().catch(() => {
            // Playback blocked (e.g. before any user interaction) — safe to ignore
        });
        playMascotReaction('happy');
    } else {
        checkBtn.classList.add('incorrect');
        streak = 0;
        streakEl.textContent = streak;
        feedbackEl.textContent = 'Almost! Give it another try! 💪';
        playMascotReaction('sad');
    }
}

// EVENT WIRING & INITIAL LOAD
generateBtn.addEventListener('click', generateProblem);
checkBtn.addEventListener('click', checkAnswer);
hintBtn.addEventListener('click', showHint);
answerEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') checkAnswer();
});

// Generate an initial problem on load
generateProblem();