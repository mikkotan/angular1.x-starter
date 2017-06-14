var todosRoutes = require('./todos/routes.js');

module.exports = function routes(app) {
    app.use('/api/todos', todosRoutes);
}