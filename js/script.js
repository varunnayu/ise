// Check if user is logged in
function checkLogin() {
    if (!sessionStorage.getItem("loggedIn")) {
        // Redirect to login page
        window.location.href = "login.html";
    }
}

// Logout function
function logout() {
    // Remove session data
    sessionStorage.removeItem("loggedIn");
    // Redirect to login page
    window.location.href = "login.html";
}

// Call checkLogin function to ensure user is logged in before accessing the dashboard
checkLogin();

// Global variables
var staffCount = 1; // Initial staff count

// Function to display the selected tab
function showPage(pageName) {
    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    document.getElementById(pageName).style.display = "block";
}

// Function to preview image before uploading
function previewImage(event) {
    var preview = document.getElementById("imagePreview");
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        var img = document.createElement("img");
        img.src = reader.result;
        img.style.maxWidth = "200px";
        preview.innerHTML = "";
        preview.appendChild(img);
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.innerHTML = "";
    }
}

// Function to change profile picture
function changeProfilePic() {
    var profilePicInput = document.getElementById("profilePic");
    var currentProfilePic = document.getElementById("currentProfilePic");

    if (profilePicInput.style.display === "block") {
        profilePicInput.style.display = "none";
        currentProfilePic.style.display = "block";
    } else {
        profilePicInput.style.display = "block";
        currentProfilePic.style.display = "none";
    }
}

// Function to mark attendance
function markAttendance() {
    var date = document.getElementById("date").value;
    var status = document.getElementById("status").value;

    // You can handle attendance submission here, for now just logging
    console.log("Date: " + date + ", Status: " + status);
}

// Function to add staff feedback
function addStaffFeedback() {
    var staffFeedbackDiv = document.getElementById("staffFeedback");

    // Create a new div for staff feedback
    var staffDiv = document.createElement("div");
    staffDiv.classList.add("staff");

    // Create staff image
    var img = document.createElement("img");
    img.src = "staff" + staffCount + ".jpg"; // Assuming staff images are named as staff1.jpg, staff2.jpg, ...
    img.alt = "Staff " + staffCount;

    // Create staff name paragraph
    var nameParagraph = document.createElement("p");
    nameParagraph.textContent = "Staff " + staffCount;

    // Create checkboxes for feedback options
    var goodCheckbox = document.createElement("input");
    goodCheckbox.type = "checkbox";
    goodCheckbox.id = "staff" + staffCount + "_good";
    goodCheckbox.name = "staff" + staffCount + "_feedback";
    goodCheckbox.value = "good";
    var goodLabel = document.createElement("label");
    goodLabel.textContent = "Good";
    goodLabel.htmlFor = "staff" + staffCount + "_good";

    var averageCheckbox = document.createElement("input");
    averageCheckbox.type = "checkbox";
    averageCheckbox.id = "staff" + staffCount + "_average";
    averageCheckbox.name = "staff" + staffCount + "_feedback";
    averageCheckbox.value = "average";
    var averageLabel = document.createElement("label");
    averageLabel.textContent = "Average";
    averageLabel.htmlFor = "staff" + staffCount + "_average";

    var poorCheckbox = document.createElement("input");
    poorCheckbox.type = "checkbox";
    poorCheckbox.id = "staff" + staffCount + "_poor";
    poorCheckbox.name = "staff" + staffCount + "_feedback";
    poorCheckbox.value = "poor";
    var poorLabel = document.createElement("label");
    poorLabel.textContent = "Poor";
    poorLabel.htmlFor = "staff" + staffCount + "_poor";

    // Append elements to staff div
    staffDiv.appendChild(img);
    staffDiv.appendChild(nameParagraph);
    staffDiv.appendChild(goodCheckbox);
    staffDiv.appendChild(goodLabel);
    staffDiv.appendChild(averageCheckbox);
    staffDiv.appendChild(averageLabel);
    staffDiv.appendChild(poorCheckbox);
    staffDiv.appendChild(poorLabel);

    // Append staff div to staff feedback section
    staffFeedbackDiv.appendChild(staffDiv);

    // Increment staff count
    staffCount++;
}

// Function to submit feedback
function submitFeedback() {
    // Display success message
    var feedbackMessage = document.getElementById("feedbackMessage");
    feedbackMessage.textContent = "Submitted successfully!";
    feedbackMessage.style.display = "block";
}
