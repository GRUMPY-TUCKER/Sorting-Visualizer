# 🎨 Sorting Visualizer

An interactive **Sorting Algorithm Visualizer** built using **HTML**, **Tailwind CSS**, **JavaScript**, and **Chart.js**.  
It allows users to visualize how different sorting algorithms work step-by-step, understand their **time and space complexities**, and compare performance using dynamic charts.

---

## 🚀 Features

- 🧩 Visualize **Bubble Sort**, **Selection Sort**, **Merge Sort**, and **Quick Sort** in real-time  
- 📊 View and compare **time complexities (Best, Average, Worst)** dynamically  
- 💾 Display **space complexity** for each algorithm  
- 📈 Integrated **Chart.js** graphs to visualize time complexity growth  
- ⚡ Smooth animations using **Tailwind CSS**  
- 🔁 Generate new random arrays anytime  
- 💡 Responsive design with scrollable layout  

---

## 🧠 Tech Stack

| Technology | Usage |
|-------------|--------|
| **HTML5** | Structure and layout |
| **Tailwind CSS** | Responsive styling and animations |
| **JavaScript (ES6)** | Core logic and sorting algorithms |
| **Chart.js** | Visualization of algorithmic complexity |

---

## 🏗️ Project Structure

```bash
Sorting-Visualizer/
│
├── index.html # Main webpage
├── app.js # All JavaScript logic and algorithms
└── README.md # Project documentation
```
---

## ⚙️ How It Works

1. Click **"Generate New Array"** to create a random array of bars.  
2. Select a sorting algorithm from the dropdown:
   - Bubble Sort  
   - Selection Sort  
   - Merge Sort  
   - Quick Sort  
3. Press **"Start Sorting"** to visualize the algorithm step-by-step.  
4. The bars change color during comparisons and swaps, allowing you to follow the algorithm visually.  
5. Time and space complexities update dynamically, and the **Chart.js** graph shows the growth trend.

---

## 📊 Algorithm Complexities

| Algorithm | Best Case | Average Case | Worst Case | Space Complexity |
|------------|------------|---------------|--------------|------------------|
| **Bubble Sort** | O(n) | O(n²) | O(n²) | O(1) |
| **Selection Sort** | O(n²) | O(n²) | O(n²) | O(1) |
| **Merge Sort** | O(n log n) | O(n log n) | O(n log n) | O(n) |
| **Quick Sort** | O(n log n) | O(n log n) | O(n²) | O(log n) |

---

## 🧩 Implemented Algorithms

### 🫧 Bubble Sort
Compares adjacent elements and swaps them if they are in the wrong order.

### 🔍 Selection Sort
Finds the smallest element and places it at the beginning of the unsorted list.

### ⚙️ Merge Sort
A **divide and conquer** algorithm that recursively divides and merges sorted subarrays.

### ⚡ Quick Sort
Picks a **pivot element** and partitions the array into smaller and larger elements recursively.

---

## 🛠️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/sorting-visualizer.git
   ```
2. **Open the folder**
   ```bash
   cd sorting-visualizer
   ```
---

## 💡 Future Enhancements

Add more algorithms: Heap Sort, Insertion Sort, Counting Sort, etc.

Add speed control for visualization

Dark mode toggle 🌙

Add sound effects for swaps 🔊

Compare multiple algorithms simultaneously
