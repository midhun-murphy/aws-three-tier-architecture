document.getElementById("loginButton").addEventListener("click", function () {
    const responseEl = document.getElementById("response");
    
    // Provide visual feedback that the request is starting
    responseEl.innerText = "Fetching data from server...";
    responseEl.style.color = "#ffbd2e"; // Temporary yellow for 'loading'

    // Backend API URL
    const backendURL = "http://BackendLB-url.com/login"; 

    fetch(backendURL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        responseEl.style.color = "#8b949e"; // Reset to standard gray
        if (data.username && data.email) {
            responseEl.innerText = `User: ${data.username} - Email: ${data.email}`;
        } else {
            responseEl.innerText = "No user data found!";
        }
    })
    .catch(error => {
        console.error("Error fetching data:", error);
        responseEl.style.color = "#ff5f56"; // Change to red on error
        responseEl.innerText = "Failed to load data! Check console for details.";
    });
});