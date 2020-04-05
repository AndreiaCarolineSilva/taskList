/**
 * App TaskList
 */

var taskList = document.querySelector('#app ul#tasks');
var inputTask = document.querySelector('#app input#newTask');
var buttonAddTask = document.querySelector('#app button#addTask');

// var tasks = [
//     'Fritar batatas',
//     'Refogar feijão',
//     'Temperar salada'
// ];

var tasks = JSON.parse(localStorage.getItem('task_list')) || [];

function renderTasks() {
    taskList.innerHTML = '';

    for (task of tasks) {
        // Remove link
        var linkRemove = document.createElement('a');
        var linkRemoveText = document.createTextNode('excluir');
        var position = tasks.indexOf(task);
        linkRemove.setAttribute('href', '#');
        linkRemove.setAttribute('onclick', 'removeTask(' + position + ')');
        linkRemove.appendChild(linkRemoveText);

        // Item list
        var taskListItem = document.createElement('li');
        var taskListItemText = document.createTextNode(task + ' ');
        taskListItem.appendChild(taskListItemText);
        taskListItem.appendChild(linkRemove);

        // List
        taskList.appendChild(taskListItem);
    }
}

function addTask() {
    var taskListItemText = inputTask.value;

    tasks.push(taskListItemText);

    inputTask.value = '';

    renderTasks();
    saveTasksToStorage();
}

function removeTask(position) {
    tasks.splice(position, 1);

    renderTasks();
    saveTasksToStorage();
}

function saveTasksToStorage() {
    localStorage.setItem('task_list', JSON.stringify(tasks));
}

buttonAddTask.onclick = addTask;

renderTasks();