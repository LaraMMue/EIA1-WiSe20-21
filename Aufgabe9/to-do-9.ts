let input: HTMLInputElement = document.querySelector("#addTask");
let addButton: HTMLInputElement = document.querySelector("#addBtn");
let todoList: HTMLElement = document.querySelector("#todoListe");
let todoElement: HTMLCollectionOf<HTMLLIElement> = document.getElementsByTagName("li"); // HTMLCollectionOf<HTMLLIElement hat der Linter vorgeschlagen. Was genau ist das? //
let todoAnzahl: number = 0;

// Funktion zum Hinzufügen von ToDos//

function addTodo(): void {
    let inputText: string = input.value;

    if (inputText == "") {
        alert("type a task!!!!!");
    }
    else {
        let todoListElement: HTMLLIElement = document.createElement("li");
        todoListElement.setAttribute("class", "task");
        let todoValue: Text = document.createTextNode(input.value);
        input.value = "";

        //Checkbox//
        let checkbox: HTMLInputElement = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");

        //Delete Button //
        let deleteBtn: HTMLButtonElement = document.createElement("button");
        let trashIcon: HTMLElement = document.createElement("i");
        trashIcon.setAttribute("class", "fas fa-trash");
        deleteBtn.appendChild(trashIcon);

        // Checkbox und Delete Button an Listen Element anhängen //
        todoListElement.appendChild(checkbox);
        todoListElement.appendChild(todoValue);
        todoListElement.appendChild(deleteBtn);

        todoList.appendChild(todoListElement);


        // Anzahl der Aufgaben in der Liste //
        function counter(): void {
            document.querySelector("#taskCounter").innerHTML = todoAnzahl + " in total";
        }
        
        todoAnzahl++;
        counter();


        // Aufgaben löschen bei Klick auf Trash Icon //
        trashIcon.addEventListener("click", function(): void {
            document.querySelector("#todoListe").removeChild(todoListElement);
            todoAnzahl--;
            counter();
        });

        
    }
}

document.querySelector("#addBtn").addEventListener("click", function(): void {
    addTodo();
});

// Funktion für erledigte Aufgaben //








