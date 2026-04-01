// --- HABIT & RUNNING TRACKER LOGIC ---

// 1. Storage for your data
let habits = [
    { id: 1, name: "Evening Exercise", completed: false },
    { id: 2, name: "Drink 4 Liters of Water", completed: false }
];

let runLogs = []; // Stores distance and dates

// 2. Add and Delete Logic
function addHabit(newName) {
    const newHabit = { id: Date.now(), name: newName, completed: false };
    habits.push(newHabit);
    console.log("New habit added: " + newName);
}

function deleteHabit(id) {
    habits = habits.filter(habit => habit.id !== id);
    console.log("Habit deleted.");
}

// 3. Analysis Graph Logic (Daily, Weekly, Monthly)
function calculateAnalysis(timeframe) {
    console.log("Calculating " + timeframe + " analysis...");
    
    // In a real app, this would draw the bar chart or heatmap
    // from your 1000172524.jpg screenshot
    if (timeframe === "weekly") {
        return "You completed 80% of your goals this week! 🏆";
    }
}

// 4. Milestone Trigger (For the Love Space)
function checkMilestone(distance) {
    if (distance >= 3) {
        // This sends the "3 km run" message to the Cheers tab
        console.log("Milestone Reached: 3km Run! Sending to Love Space...");
    }
}
