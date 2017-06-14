todoFactory.$inject = ['$http'];

export default function todoFactory($http) {

    const url = 'api/todos'
    function store(data) {
        return $http({
            url,
            data,
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' }
        });
    }

    function show(id) {
        return $http({
            url: url + `/${id}`,
            method: 'GET'
        }).then(res => res.data);
    }

    function getAll() {
        return $http({
            url: url,
            method: 'GET'
        }).then(res => res.data);
    }

    function destroy(todo) {
        console.log(`Todo to be deleted from factory: ${todo.task}`);
        return $http({
            url: url + `/${todo._id}`,
            method: 'DELETE'
        });
    }

    function update(todo) {
        console.log(`Todo is Completed is: ${todo.isCompleted}`);
        return $http({
            url: url + `/${todo._id}`,
            method: 'PUT',
            data: {
                task: todo.task,
                isCompleted: todo.isCompleted
            }
        });
    }

    return {
        store,
        show,
        getAll,
        destroy,
        update
    }
}