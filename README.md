# JS Minor Projects Collection 🚀

Welcome to the **JS Minor Projects Collection**! This repository is a showcase of 8 interactive, responsive, and fully functional front-end web applications built using vanilla **HTML5**, **CSS3**, and **JavaScript (ES6+)**. 

Each project is designed to demonstrate key web development principles, including DOM manipulation, event handling, asynchronous operations (APIs), dynamic state updates, and client-side data persistence.

---

## 📂 Project Overview Table

| # | Project Name | Description | Key Tech / APIs | Folder Link |
|---|--------------|-------------|-----------------|-------------|
| 1 | **CRUD Task List** | Add, edit, update, and delete tasks dynamically. | In-Memory State, DOM Manipulation | [Project-1 Crud Task](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-1%20Crud%20Task) |
| 2 | **Stopwatch App** | Tracks time (Hours, Minutes, Seconds) with pause, resume, reset, and lap logging. | `setInterval`, Date Formats | [Project-2 stopwatch](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-2%20stopwatch) |
| 3 | **Password Generator** | Generates secure passwords with customizable options and strength indicator. Saves history. | `localStorage`, Regex, Clipboard API | [Project-3 Password Generator](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-3%20Password%20Generator) |
| 4 | **Age Calculator** | Calculates a user's exact age based on date of birth selection. | JS Date Arithmetic | [Project-4 Age Calculator](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-4%20Age%20Calculator) |
| 5 | **Rock-Paper-Scissors** | Play the classic Rock-Paper-Scissors game against a randomized computer opponent. | Randomization, Score Keeping | [Project-5%20Rock-Paper-Scissors-Game](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-5%20Rock-Paper-Scissors-Game) |
| 6 | **Image Search App** | Searches high-quality photos dynamically with paging using Unsplash. | Unsplash Photo Search API, Fetch | [Project-6 Image-Search](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-6%20Image-Search) |
| 7 | **Quote Generator** | Fetches random inspiration quotes, copies them, and saves a list of favorites. | DummyJSON Quotes API, Clipboard API | [Project-7 Quote-Generator](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-7%20Quote-Generator) |
| 8 | **Interactive Quiz App** | A timed 5-question web development quiz complete with score summary and reviews. | Timers, State Machines, Grade Evaluation | [Project-8 QUIZ](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-8%20QUIZ) |

---

## 🛠️ Detailed Project Breakdown

### 1. CRUD Task List
A task manager showcasing standard Create, Read, Update, and Delete operations entirely in the browser DOM.
* **Features**:
  * Real-time list generation from an in-memory array.
  * Update utility: clicking "Edit" populates the input field and changes the action button to "Update".
  * Basic validation preventing blank tasks.
* **Core Code Files**:
  * [index.html](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-1%20Crud%20Task/index.html)
  * [index.css](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-1%20Crud%20Task/index.css)
  * [task.js](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-1%20Crud%20Task/task.js)

### 2. Stopwatch App
A clean, visual timer application that allows users to capture precise timings.
* **Features**:
  * Accurate time tracking formatted as `HH : MM : SS`.
  * Controls: Start, Pause, Resume, Reset.
  * Lap feature: captures and appends current time to a scrolling lap log.
* **Core Code Files**:
  * [index.html](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-2%20stopwatch/index.html)
  * [style.css](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-2%20stopwatch/style.css)
  * [script.js](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-2%20stopwatch/script.js)

### 3. Password Generator
A password utility helper focusing on security parameters and persistent storage.
* **Features**:
  * Options to toggle Uppercase, Lowercase, Numbers, and Special Characters.
  * Configurable length (minimum 6 characters).
  * Strength checker: Dynamically updates status to **Weak**, **Medium**, or **Strong** using RegExp validation.
  * Clipboard API integration for quick copy.
  * Saves generated passwords locally, showing a persistent history panel across page refreshes.
* **Core Code Files**:
  * [index.html](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-3%20Password%20Generator/index.html)
  * [style.css](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-3%20Password%20Generator/style.css)
  * [script.js](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-3%20Password%20Generator/script.js)

### 4. Age Calculator
A simple calculation tool utilizing JavaScript's native date arithmetic.
* **Features**:
  * Date picker input constraints.
  * Accurately calculates exact years, accounting for whether the current date has passed the birthday in the current calendar year.
* **Core Code Files**:
  * [index.html](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-4%20Age%20Calculator/index.html)
  * [style.css](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-4%20Age%20Calculator/style.css)
  * [script.js](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-4%20Age%20Calculator/script.js)

### 5. Rock Paper Scissors Game
An interactive arcade game implementing game-loop score keeping.
* **Features**:
  * User plays Rock, Paper, or Scissors via graphical action buttons.
  * Computer generates options randomly.
  * Real-time score counting (Player Score, Computer Score) that updates dynamically.
  * Restart option resets all match details and scores.
* **Core Code Files**:
  * [index.html](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-5%20Rock-Paper-Scissors-Game/index.html)
  * [style.css](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-5%20Rock-Paper-Scissors-Game/style.css)
  * [script.js](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-5%20Rock-Paper-Scissors-Game/script.js)

### 6. Image Search App
An API-integrated photo search engine fetching high-resolution photography.
* **Features**:
  * Connected to the **Unsplash API** using a secure query structure.
  * Layout renders cards containing dynamic images inside a responsive grid.
  * Enter-key keypress search submissions supported.
  * Loading state spinner and custom error handling templates.
  * "Load More" pagination that appends subsequent pages of results to the current view.
* **Core Code Files**:
  * [index.html](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-6%20Image-Search/index.html)
  * [style.css](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-6%20Image-Search/style.css)
  * [script.js](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-6%20Image-Search/script.js)

### 7. Quote Generator
A random quote engine displaying motivational quotes dynamically.
* **Features**:
  * Connects to **DummyJSON Quotes API** to download random quotes with author information.
  * Clipboard action to copy the quote text.
  * Session-based favorite logger to record preferred quotes in a list at the bottom of the card.
* **Core Code Files**:
  * [index.html](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-7%20Quote-Generator/index.html)
  * [style.css](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-7%20Quote-Generator/style.css)
  * [script.js](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-7%20Quote-Generator/script.js)

### 8. Interactive Quiz App
A timed, multiple-choice quiz testing essential HTML foundations.
* **Features**:
  * Timed quiz: tracks seconds elapsed during the quiz session.
  * Dynamic option rendering from local objects.
  * Instant feedback state and score calculations.
  * Grading structure based on percentages (A+, A, B, C, F) alongside custom feedbacks.
  * Review screen: lists every question with the user's selected choice, correct answer, status indicators (✅/❌), and detailed written explanations.
* **Core Code Files**:
  * [index.html](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-8%20QUIZ/index.html)
  * [style.css](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-8%20QUIZ/style.css)
  * [script.js](file:///C:/Users/ASUS/OneDrive/Desktop/JavaScript%20Project/Project-8%20QUIZ/script.js)

---

## 🚀 How to Run the Projects

Since all projects are standard client-side applications built with Vanilla HTML, CSS, and JS, you do not need any build step or compilation! 

1. **Option A: Run Directly in the Browser**
   * Navigate to any project folder.
   * Double-click the `index.html` file to open it in Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari.

2. **Option B: Live Server Extension (Recommended)**
   * Open this repository in a code editor like VS Code.
   * Install the **Live Server** extension.
   * Right-click the `index.html` file of any project and select **Open with Live Server**. This enables hot-reloading for code edits.

---

## 🎨 Design and Development Practices

* **Clean Separation of Concerns**: Structure split cleanly between HTML (Markup), CSS (Presentation), and JavaScript (Logic).
* **Responsive Styling**: Styles use flexbox layouts, centering alignments, and media queries to support desktop, tablet, and mobile views.
* **Modern CSS Themes**: Smooth hover transitions, box shadows, customizable checkboxes, and button gradients are utilized to offer an elevated user interface.
* **Web APIs**: Demonstrates modern fetch protocols, promise-based clipboards, and persistent storage arrays in native browser runtimes.
