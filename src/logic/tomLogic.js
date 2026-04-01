// --- TOM'S INTERACTIVE LOGIC ---

// 1. The Dining Room (1b)
// This handles the 4-second eating animation you requested
function startEating() {
    console.log("Tom is sitting at the table...");
    console.log("Animation Started: Tom is eating 👄🍔");

    // This timer waits for 4 seconds (4000 milliseconds)
    setTimeout(() => {
        console.log("Animation Finished: Tom is full!");
        alert("Tom finished his meal!");
    }, 4000); 
}

// 2. The Bedroom (1c)
function goToSleep() {
    console.log("Tom is walking to the bed...");
    console.log("Status: Tom is now Sleeping 😴");
    // In a real app, this would trigger your "Cartoon Style" bedroom interface
}

// 3. Room Switching Logic
function changeRoom(roomName) {
    console.log("Switching Tom to: " + roomName);
    // 1a = Hallway, 1b = Dining, 1c = Bedroom
}
