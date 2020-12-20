var input = document.querySelector("#addTask");
var addButton = document.querySelector("#addBtn");
var todoList = document.querySelector("#todoListe");
var todoElement = document.getElementsByTagName("li"); // HTMLCollectionOf<HTMLLIElement hat der Linter vorgeschlagen. Was genau ist das? //
var todoAnzahl = 0;
// Funktion zum Hinzufügen von ToDos//
function addTodo() {
    var inputText = input.value;
    if (inputText == "") {
        alert("type a task!!!!!");
    }
    else {
        var todoListElement_1 = document.createElement("li");
        todoListElement_1.setAttribute("class", "task");
        var todoValue = document.createTextNode(input.value);
        input.value = "";
        //Checkbox//
        var checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        //Delete Button //
        var deleteBtn = document.createElement("button");
        var trashIcon = document.createElement("i");
        trashIcon.setAttribute("class", "fas fa-trash");
        deleteBtn.appendChild(trashIcon);
        // Checkbox und Delete Button an Listen Element anhängen //
        todoListElement_1.appendChild(checkbox);
        todoListElement_1.appendChild(todoValue);
        todoListElement_1.appendChild(deleteBtn);
        todoList.appendChild(todoListElement_1);
        // Anzahl der Aufgaben in der Liste //
        function counter() {
            document.querySelector("#taskCounter").innerHTML = todoAnzahl + " in total";
        }
        todoAnzahl++;
        counter();
        // Aufgaben löschen bei Klick auf Trash Icon //
        trashIcon.addEventListener("click", function () {
            document.querySelector("#todoListe").removeChild(todoListElement_1);
            todoAnzahl--;
            counter();
        });
    }
}
document.querySelector("#addBtn").addEventListener("click", function () {
    addTodo();
});
// Funktion für erledigte Aufgaben //
//# sourceMappingURL=to-do-9.js.map