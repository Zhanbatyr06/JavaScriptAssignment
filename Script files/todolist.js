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
    const taskInput = document.getElementById('taskInput');
    const TaskList = document.getElementById('TaskList');
    let newTask = taskInput.value;
    if (taskInput){
        tasks.push(newTask);
        let li = document.createElement('li');
        li.textContent = newTask;
        TaskList.appendChild(li);
        taskInput.value = '';
    }
}