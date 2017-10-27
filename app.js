function onReady(){

  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

    function createNewToDo(){
      const newToDoText = document.getElementById('newToDoText');
      if(!newToDoText.value) { return }

      toDos.push({
        title: newToDoText.value,
        complete: false
    });
    newToDoText.value = '';

    renderTheUI(toDos);
    }

    function renderTheUI(toDos){
      const toDoList = document.getElementById('toDoList');

      toDoList.textContent = '';

      toDos.forEach(function(toDo){
        const newLi = document.createElement('Li');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        newLi.textContent= toDo.title;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
           deleteButton.addEventListener('click' , event =>{
             console.log('delete button clicked', event.target.parentElement);
             event.target.parentElement.remove();

           });

           

        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
        newLi.appendChild(deleteButton);


      });
    }

 addToDoForm.addEventListener('submit' , event => {
   event.preventDefault();
   createNewToDo();



 });
 renderTheUI(toDos);
}

window.onload = function (){
  onReady();
};
