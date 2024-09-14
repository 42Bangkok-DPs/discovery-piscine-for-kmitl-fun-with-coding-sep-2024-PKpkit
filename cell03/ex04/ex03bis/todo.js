const inputBox = $("#input-box");
const listContainer = $("#list-container");

function addTask() {
    if (inputBox.val() === '') {
        alert("You must write something!");
    } else {
        let li = $("<li></li>").text(inputBox.val());
        listContainer.append(li);

        let span = $("<span>\u00d7</span>");
        li.append(span);
    }
    inputBox.val("");
    saveData();
}

listContainer.on("click", "li", function() {
    $(this).toggleClass("checked");
    saveData();
});

listContainer.on("click", "span", function() {
    if (confirm("Are you sure you want to remove this task?")) {
        $(this).parent().remove();
        saveData();
    }
});

function saveData() {
    document.cookie = "tasks=" + encodeURIComponent(listContainer.html()) + ";path=/;expires=" + getExpiryDate(365);
}

function showTask() {
    const cookies = document.cookie.split(';');
    const tasksCookie = cookies.find(cookie => cookie.trim().startsWith("tasks="));
    if (tasksCookie) {
        const tasksHtml = decodeURIComponent(tasksCookie.split('=')[1]);
        listContainer.html(tasksHtml);
    }
}

function getExpiryDate(days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    return date.toUTCString();
}

$(document).ready(function() {
    showTask();
});