const arrayContainer = document.getElementById('array-container');
const generateArrayBtn = document.getElementById('generate-array');
const startSortBtn = document.getElementById('start-sort');
const algorithmSelect = document.getElementById('algorithm-select');

// Elements for displaying complexities
const bestCaseEl = document.getElementById('best-case');
const avgCaseEl = document.getElementById('avg-case');
const worstCaseEl = document.getElementById('worst-case');
const spaceComplexityEl = document.getElementById('space-complexity');
const ctx = document.getElementById('complexity-chart').getContext('2d');

// Complexity data for each algorithm
const complexities = {
    bubble: {
        time: {
            best: 'O(n)',
            avg: 'O(n²)',
            worst: 'O(n²)'
        },
        space: 'O(1)',
        data: [1, 4, 9, 16, 25] // Example data for visualization
    },
    selection: {
        time: {
            best: 'O(n²)',
            avg: 'O(n²)',
            worst: 'O(n²)'
        },
        space: 'O(1)',
        data: [1, 4, 9, 16, 25] // Example data for visualization
    },
    merge: {
        time: {
            best: 'O(n log n)',
            avg: 'O(n log n)',
            worst: 'O(n log n)'
        },
        space: 'O(n)',
        data: [1, 2, 3, 4, 5] // Example data for visualization
    },
    quick: {
        time: {
            best: 'O(n log n)',
            avg: 'O(n log n)',
            worst: 'O(n²)'
        },
        space: 'O(log n)',
        data: [1, 2, 3, 6, 10] // Example data for visualization
    }
};

// Initialize Chart.js chart
let complexityChart;

function initializeChart() {
    complexityChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['10', '20', '30', '40', '50'], // Example input sizes
            datasets: [{
                label: 'Time Complexity',
                data: [], // Placeholder for actual data
                borderColor: '#4A90E2',
                backgroundColor: 'rgba(74, 144, 226, 0.2)',
                fill: true
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Input Size'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Time Complexity'
                    }
                }
            }
        }
    });
}

function updateComplexityChart(data) {
    complexityChart.data.datasets[0].data = data;
    complexityChart.update();
}

// Function to generate a random array
let array = [];

function generateArray() {
    array = [];
    arrayContainer.innerHTML = '';
    for (let i = 0; i < 20; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        array.push(randomNumber);
        const bar = document.createElement('div');
        bar.style.height = `${randomNumber * 3}px`;
        bar.classList.add('bg-blue-500', 'w-8', 'transition-all', 'duration-200');
        arrayContainer.appendChild(bar);
    }
}

// Bubble Sort Algorithm
async function bubbleSort() {
    const bars = arrayContainer.children;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            bars[j].classList.add('bg-red-500');
            bars[j + 1].classList.add('bg-red-500');
            if (array[j] > array[j + 1]) {
                await swap(bars, j, j + 1);
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
            bars[j].classList.remove('bg-red-500');
            bars[j + 1].classList.remove('bg-red-500');
        }
    }
}

// Selection Sort Algorithm
async function selectionSort() {
    const bars = arrayContainer.children;
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        bars[minIndex].classList.add('bg-red-500');
        for (let j = i + 1; j < array.length; j++) {
            bars[j].classList.add('bg-red-500');
            if (array[j] < array[minIndex]) {
                bars[minIndex].classList.remove('bg-red-500');
                minIndex = j;
                bars[minIndex].classList.add('bg-red-500');
            }
            bars[j].classList.remove('bg-red-500');
        }
        if (minIndex !== i) {
            await swap(bars, i, minIndex);
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }
        bars[minIndex].classList.remove('bg-red-500');
    }
}

// Merge Sort Algorithm
async function mergeSort(start = 0, end = array.length - 1) {
    if (start >= end) return;
    const mid = Math.floor((start + end) / 2);
    await mergeSort(start, mid);
    await mergeSort(mid + 1, end);
    await merge(array, start, mid, end);
    updateBars();
}

async function merge(array, start, mid, end) {
    const tempArray = [];
    let i = start, j = mid + 1;

    while (i <= mid && j <= end) {
        if (array[i] <= array[j]) {
            tempArray.push(array[i++]);
        } else {
            tempArray.push(array[j++]);
        }
    }
    while (i <= mid) tempArray.push(array[i++]);
    while (j <= end) tempArray.push(array[j++]);

    for (let i = start; i <= end; i++) {
        array[i] = tempArray[i - start];
        await new Promise(resolve => setTimeout(resolve, 100)); // Animation delay
    }
    updateBars();
}

// Quick Sort Algorithm
async function quickSort(start = 0, end = array.length - 1) {
    if (start >= end) return;
    const pivotIndex = await partition(start, end);
    await quickSort(start, pivotIndex - 1);
    await quickSort(pivotIndex + 1, end);
    updateBars();
}

async function partition(start, end) {
    const pivot = array[end];
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
        if (array[i] < pivot) {
            await swap(arrayContainer.children, i, pivotIndex);
            [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
            pivotIndex++;
        }
    }
    await swap(arrayContainer.children, pivotIndex, end);
    [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];
    return pivotIndex;
}

// Helper function to swap bars
function swap(bars, i, j) {
    return new Promise(resolve => {
        setTimeout(() => {
            const tempHeight = bars[i].style.height;
            bars[i].style.height = bars[j].style.height;
            bars[j].style.height = tempHeight;
            resolve();
        }, 100);
    });
}

// Update bars after sorting
function updateBars() {
    const bars = arrayContainer.children;
    for (let i = 0; i < array.length; i++) {
        bars[i].style.height = `${array[i] * 3}px`;
    }
}

// Update complexity display based on selected algorithm
function updateComplexityDisplay() {
    const algorithm = algorithmSelect.value;
    const { time, space, data } = complexities[algorithm];
    bestCaseEl.textContent = time.best;
    avgCaseEl.textContent = time.avg;
    worstCaseEl.textContent = time.worst;
    spaceComplexityEl.textContent = space;
    updateComplexityChart(data);
}

// Initialize chart and add event listeners
initializeChart();
generateArrayBtn.addEventListener('click', generateArray);
startSortBtn.addEventListener('click', () => {
    const algorithm = algorithmSelect.value;
    switch (algorithm) {
        case 'bubble':
            bubbleSort();
            break;
        case 'selection':
            selectionSort();
            break;
        case 'merge':
            mergeSort();
            break;
        case 'quick':
            quickSort();
            break;
    }
});
algorithmSelect.addEventListener('change', updateComplexityDisplay);

// Initial call to generate the array and update complexity display
generateArray();
updateComplexityDisplay();
