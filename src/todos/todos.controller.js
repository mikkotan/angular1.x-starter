import _ from 'lodash';

export default class TodosController {
    constructor(TodoFactory, $scope) {
        'ngInject';
        this._TodoFactory = TodoFactory;
        this.task = '';
        this.todos = [];
        this.populateTasks();
    }

    onCompletedClick(todo) {
        todo.isCompleted = !todo.isCompleted;
        // console.log(`Todo is completed from controller: ${todo.isCompleted}`)
        this._TodoFactory.update(todo)
            .then(res => {
                console.log(`Res: ${JSON.stringify(res)}`)
            })
            .catch(err => console.log(`Err: ${err}`))
    }

    addTask() {
        if (this.task) {
            let task = {
                task: this.task,
                isCompleted: false,
                isEditing: false
            }
            this._TodoFactory.store(task)
                .then(res => {
                    this.populateTasks();
                    this.task = '';
                })
                .catch(err => {
                    alert(`Err: ${JSON.stringify(err)}`);
                })
        }
    }

    onDeleteClick(todo) {
        console.log(`Todo to be deleted: ${todo.task}`);
        this._TodoFactory.destroy(todo)
            .then(res => this.populateTasks())
            .catch(err => console.log(`Err: ${err}`))
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
            this._TodoFactory.update(todo)
                .then(res => {
                    todo.isEditing = false;
                    this.populateTasks();
                })
                .catch(err => {
                    console.log(`Err: ${err}`);
                })
        }
    }

    populateTasks() {
        this._TodoFactory.getAll()
            .then(response => {
                this.todos = response.todos;
            })
            .catch(err => alert(err))
    }
}