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
        if (tasks.trim() == ""){
            // const sound = document.getElementById('soundEffect')
            // sound.onplay();
            alert('напиши задание');
        }
        const li = document.createElement('li');
        li.textContent = task;
        TaskList.appendChild(li);
    });
    
}
function deleteTask(){
    const TaskListClean = document.getElementById('TaskList');
    TaskListClean.innerHTML = '';
        
}