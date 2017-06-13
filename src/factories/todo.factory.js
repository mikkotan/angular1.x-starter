todoFactory.$inject = ['$http'];

export default function todoFactory($http) {

    const url = 'api/todos'
    function store(data) {
        let request = {
            url,
            data,
            method: 'POST'
        }

        return $http(request).then(res => data);
    }

    function show(id) {
        return $http({
            url: url + '/id',
            method: 'GET'
        }).then(res => res.data);
    }

    function getAll() {
        return $http({
            url: url,
            method: 'GET'
        }).then(res => res.data);
    }

    function destroy(id) {
        return $http({
            url: url + '/id',
            method: 'DELETE'
        }).then(res => res.data);
    }

    return {
        store,
        show,
        getAll,
        destroy
    }
}