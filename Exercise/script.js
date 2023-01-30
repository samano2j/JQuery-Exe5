/**
 * Assign a click event handler to the add button with an id of addTask.
 *
 * When the add button is clicked:
 *  - If the textbox is empty, generate an alert with the text “Error: Please enter a task first”.
 *  - If the text box is not empty, generate an alert with the text containing the task name. For example, if the text in the input box is “Complete Assignment”, generate an alert with text “New Task: Complete Assignment”.
 *  - Clear the text inside the text box after the add button is clicked.
 */

$(document).ready(function () {

    $('#addTask').click(function(event){
        if($('.textbox').val().trim() == "") {
            alert("Error: Please enter a task first")
        }
        else {
            alert("New Task: " + $('.textbox').val())
            let newTask = $("<div><p>" + $('.textbox').val() + "</p><button>Done</button></div>" );
            newTask.css({"display":"flex", "justify-content":"space-between"});
            $('.notCompleted').append(newTask);
        }

        $('.textbox').val("");
    })

});