function toDoListMenu(){
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
    const bgfone = document.getElementById('bgfone');
    bgfone.classList.toggle('cover');
}
function CloseMenu(){
    const sidebar = document.getElementById('sidebar');
    const bgfone = document.getElementById('bgfone');
    sidebar.classList.remove('open');
    bgfone.classList.remove('cover')

}
let tasks = [];

function addTask(){
    const taskInput = document.getElementById('taskInput').value;
    const TaskList = document.getElementById('TaskList');
    tasks.push(taskInput);
    
    tasks.forEach(task => {
        if (task.trim() == ""){
            const sound = document.getElementById('soundEffect');
            sound.play();
            alert("Write a task please");
        }
        const li = document.createElement('li');
        li.textContent = task;
        TaskList.appendChild(li);
        tasks.length = 0;
    });
    
}
function deleteTask(){
   const listTasksClean = document.getElementById('TaskList');
    listTasksClean.innerHTML = '';
}