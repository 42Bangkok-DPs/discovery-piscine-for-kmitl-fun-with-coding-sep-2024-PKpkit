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
    localStorage.setItem("data", listContainer.html());
}

function showTask() {
    listContainer.html(localStorage.getItem("data"));
}

showTask();
