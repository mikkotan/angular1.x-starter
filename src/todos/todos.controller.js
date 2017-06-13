import _ from 'lodash';

export default class TodosController {
    constructor(TodoFactory) {
        'ngInject';

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

    onDeleteClick(todoToDelete) {
        _.remove(this.todos, todo => todo.task === todoToDelete.task)
    }

    onEditClick(todo) {
        todo.isEditing = true;
        todo.updatedTask = todo.task;
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