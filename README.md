# 🎮 Number Guessing & Dice Roll Game for Web Development Course

A simple, interactive, and responsive **Number Guessing and Dice Roll Web Application** built using **HTML, CSS, and JavaScript**.

The application combines two fun mini-games:

* 🎯 **Number Guessing Game** – Guess a randomly generated secret number.
* 🎲 **Dice Roll Game** – Roll a virtual dice and generate a random number from 1 to 6.

This project demonstrates fundamental JavaScript concepts including random number generation, conditional logic, DOM manipulation, event handling, input validation, and dynamic UI updates.

---

## 📌 Overview

The application provides a simple gaming interface where users can choose between different random-number-based activities.

### 🎯 Number Guessing

The application generates a secret number within a predefined range. The player enters guesses until they find the correct number.

The application provides feedback such as:

* ⬆️ **Too High**
* ⬇️ **Too Low**
* 🎉 **Correct!**

### 🎲 Dice Roll

The player can click the **Roll Dice** button to generate a random number between **1 and 6**.

Example:

```text
🎲 Rolling Dice...

Result: 4
```

---

# ✨ Features

## 🎯 Number Guessing Game

* 🎲 Random secret number generation
* 🔢 Number input
* ⬆️ Too High feedback
* ⬇️ Too Low feedback
* 🎉 Correct guess notification
* 📊 Attempt counter
* 🏆 Score calculation
* 🚫 Input validation
* 🔄 New Game functionality

## 🎲 Dice Roll Game

* 🎲 Virtual dice rolling
* 🔢 Random number between 1 and 6
* ⚡ Instant result
* 🎨 Animated dice result
* 🔄 Roll again functionality
* 📊 Roll counter
* 🏆 Optional highest-roll tracking

## 🌐 General Features

* Responsive design
* Interactive UI
* Smooth animations
* No page reload required
* Beginner-friendly implementation
* Works directly in a web browser

---

# 🎯 Number Guessing Game

## 🧠 How It Works

When a new game starts, JavaScript generates a random number.

For example:

```javascript
const secretNumber = Math.floor(Math.random() * 100) + 1;
```

This generates a number between:

```text
1 → 100
```

The user then enters a guess.

The application compares the guess with the secret number.

```javascript
if (guess < secretNumber) {
    message.textContent = "Too Low!";
}
else if (guess > secretNumber) {
    message.textContent = "Too High!";
}
else {
    message.textContent = "Correct!";
}
```

---

## 🔢 Number Guessing Example

Suppose the generated number is:

```text
Secret Number = 57
```

### Guess 1

```text
User enters: 30
```

Since:

```text
30 < 57
```

The application displays:

```text
⬇️ Too Low!
```

### Guess 2

```text
User enters: 80
```

Since:

```text
80 > 57
```

The application displays:

```text
⬆️ Too High!
```

### Guess 3

```text
User enters: 57
```

Since:

```text
57 = 57
```

The application displays:

```text
🎉 Correct! You guessed the number!
```

---

# 🎲 Dice Roll Game

## 🧠 Dice Roll Logic

A standard dice has six possible outcomes:

```text
1
2
3
4
5
6
```

JavaScript can generate a random dice result using:

```javascript
const diceResult = Math.floor(Math.random() * 6) + 1;
```

### How this works

`Math.random()` generates a value between:

```text
0 and less than 1
```

Multiplying by `6` gives:

```text
0 to less than 6
```

`Math.floor()` converts it to:

```text
0, 1, 2, 3, 4, 5
```

Adding `1` produces:

```text
1, 2, 3, 4, 5, 6
```

Therefore:

```javascript
Math.floor(Math.random() * 6) + 1;
```

generates a valid dice result.

---

## 🎲 Basic Dice Function

```javascript
function rollDice() {
    const result = Math.floor(Math.random() * 6) + 1;

    document.getElementById("diceResult").textContent =
        `You rolled: ${result}`;
}
```

When the player clicks **Roll Dice**, a new random number is generated.

---

# 🎲 Dice Result Examples

The player clicks:

```text
🎲 ROLL DICE
```

Possible results:

```text
🎲 You rolled: 1
```

or:

```text
🎲 You rolled: 3
```

or:

```text
🎲 You rolled: 6
```

Every roll has a random result from **1 to 6**.

---

# 🔄 Dice Roll Flow

```text
       Start
         │
         ▼
   Click Roll Dice
         │
         ▼
 Generate Random Number
      (1 - 6)
         │
         ▼
  Display Dice Result
         │
         ▼
     Roll Again?
      /       \
    Yes        No
     │          │
     ▼          ▼
   Roll       Finish
   Again
```

---

# 🎯 Number Guessing Flow

```text
       Start
         │
         ▼
Generate Secret Number
         │
         ▼
   Enter Guess
         │
         ▼
  Validate Input
         │
         ▼
   Compare Guess
      /    |    \
     /     |     \
    ▼      ▼      ▼
Too Low  Correct  Too High
    │       │        │
    │       ▼        │
    │    Game Over   │
    │                │
    └───────┬────────┘
            │
            ▼
       Guess Again
```

---

# 🕹️ Combined Application Flow

```text
             Game Application
                    │
          ┌─────────┴─────────┐
          │                   │
          ▼                   ▼
   🎯 Number Guessing    🎲 Dice Roll
          │                   │
          ▼                   ▼
 Generate Secret Number   Generate 1–6
          │                   │
          ▼                   ▼
    Enter Guess            Roll Dice
          │                   │
          ▼                   ▼
 Compare Guess             Show Result
          │                   │
     ┌────┼────┐              │
     ▼    ▼    ▼              ▼
   Low  Correct High       Roll Again
```

---

# 🧮 Attempt & Roll Tracking

The application can track both guessing attempts and dice rolls.

### Number Guessing

```javascript
attempts++;

attemptCount.textContent = attempts;
```

Example:

```text
Attempt 1 → Too Low
Attempt 2 → Too High
Attempt 3 → Correct

Total Attempts: 3
```

### Dice Rolling

```javascript
rollCount++;

rollCounter.textContent = rollCount;
```

Example:

```text
Roll 1 → 4
Roll 2 → 2
Roll 3 → 6

Total Rolls: 3
```

---

# 🏆 Scoring System

A scoring system can be implemented for the Number Guessing Game.

| Attempts | Score |
| -------: | ----: |
|        1 |   100 |
|      2–3 |    80 |
|      4–5 |    60 |
|       6+ |    40 |

For the dice game, the application can optionally track the highest result.

Example:

```text
Roll 1 → 3
Roll 2 → 5
Roll 3 → 2
Roll 4 → 6

🏆 Highest Roll: 6
```

---

# 🛡️ Input Validation

The Number Guessing Game validates the user's input.

```javascript
if (guess === "" || isNaN(guess)) {
    message.textContent = "Please enter a valid number.";
    return;
}

if (guess < 1 || guess > 100) {
    message.textContent =
        "Please enter a number between 1 and 100.";
    return;
}
```

This prevents invalid values from being processed.

---

# 🔄 New Game

The player can reset the Number Guessing Game.

```javascript
function newGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;

    attempts = 0;

    attemptCount.textContent = attempts;

    message.textContent =
        "Make your first guess!";

    guessInput.value = "";
}
```

---

# 🎲 Dice Animation

A dice animation can be added to make the game more interactive.

Example:

```javascript
function rollDice() {

    dice.classList.add("rolling");

    setTimeout(() => {

        const result =
            Math.floor(Math.random() * 6) + 1;

        dice.textContent = result;

        dice.classList.remove("rolling");

    }, 500);
}
```

This creates a short delay before displaying the final dice result.

---

# 🛠️ Technologies Used

### Frontend

* **HTML5** – Application structure
* **CSS3** – Styling, layout, animations, and responsive design
* **JavaScript** – Game logic and interactivity

### JavaScript Concepts

* Variables
* Functions
* `Math.random()`
* `Math.floor()`
* Conditional statements
* Event listeners
* DOM manipulation
* Input validation
* Counters
* Game state management
* Random number generation

---

# 📂 Project Structure

```text
NumberGuessingDiceGame/
│
├── index.html
├── style.css
├── script.js
│
├── assets/
│   ├── images/
│   └── icons/
│
├── screenshots/
│   ├── number-guessing.png
│   └── dice-roll.png
│
└── README.md
```

---

# 🖥️ Application Components

## 🎯 Number Guessing Section

Contains:

* Game title
* Number input
* Guess button
* Feedback message
* Attempt counter
* Score
* New Game button

## 🎲 Dice Roll Section

Contains:

* Dice display
* Roll Dice button
* Current result
* Roll counter
* Highest roll
* Roll Again functionality

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/NumberGuessingDiceGame.git
```

## 2. Navigate to the Project

```bash
cd NumberGuessingDiceGame
```

## 3. Open the Application

Open:

```text
index.html
```

in a modern web browser.

No backend, database, or server is required.

---

# 🌐 Deployment

The application can be deployed using any static hosting platform.

Recommended options:

* GitHub Pages
* Netlify
* Vercel
* Cloudflare Pages

Since the application uses HTML, CSS, and JavaScript, it can run entirely on the client side.

---

# 🔮 Future Improvements

Possible future features include:

* 🎚️ Multiple difficulty levels
* 🎯 Different number ranges
* ⏱️ Countdown timer
* ❤️ Limited lives
* 🏆 Global leaderboard
* 💾 LocalStorage score persistence
* 🎲 Multiple dice support
* 🎲 Two-player dice mode
* 🥇 Best score tracking
* 🔊 Sound effects
* ✨ Advanced dice animations
* 🌙 Dark/Light mode
* 📱 Improved mobile interface
* 📊 Game statistics
* 🔥 Winning streaks
* 🎨 Custom themes

---

# 📚 Learning Objectives

This project helps beginners understand:

* Random number generation
* JavaScript comparison operators
* Conditional statements
* Functions
* Event handling
* DOM manipulation
* User input handling
* Input validation
* Game state management
* Counters and scoring
* CSS animations
* Responsive web design

---

# 📸 Screenshots

Add your application screenshots here:

```markdown
![Number Guessing Game](screenshots/number-guessing.png)

![Dice Roll Game](screenshots/dice-roll.png)
```

Recommended screenshot structure:

```text
screenshots/
│
├── number-guessing.png
└── dice-roll.png
```

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/new-feature
```

3. Make your changes.
4. Commit the changes.

```bash
git commit -m "Add new feature"
```

5. Push the branch.

```bash
git push origin feature/new-feature
```

6. Open a Pull Request.

---

# 📄 License

This project is open-source and available for educational and personal use.

---

# 👨‍💻 Author

**Samir Pokhrel**

B.Sc. CSIT Student

---

⭐ If you found this project useful, consider giving the repository a **star**!
