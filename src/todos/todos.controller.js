export default class TodosController {
    constructor() {
        this.task = '';
        this.todos = [
            {
                task: 'Learn AngularJS v1.0',
                isCompleted: false,
                isEditing: false
            },
            {
                task: 'Kotlin for Android Development',
                isCompleted: false,
                isEditing: false
            }
        ]
    }

    onCompletedClick(todo) {
        todo.isCompleted = !todo.isCompleted;
    }

    addTask() {
        if (this.task) {
            let task = {
                task: this.task,
                isCompleted: false,
                isEditing: false
            }
            this.todos.push(task);
            this.task = '';
        }
    }

    onDeleteClick(todo) {
        let index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
    }

    onEditClick(todo) {
        todo.isEditing = true;
    }

    onEditCancelClick(todo) {
        todo.isEditing = false;
    }

    updateTask(todo) {
        if (todo.updatedTask) {
            todo.task = todo.updatedTask;
            todo.isEditing = false;
        }
    }
}