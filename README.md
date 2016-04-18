<h1 align="center">Expense Watch API</h1>

> *« API for Expense Watch app »*

App can be found at: https://github.com/sachinb94/expense-watch-app

Features:

* **[Express](https://github.com/strongloop/express) server** with nested routing architecture.
* **[Nodemon](https://github.com/remy/nodemon)** with **[LiveReload](https://github.com/vohof/gulp-livereload)** for the development process.
* **Automatic bower dependencies injection** on package install.
* **[JSHint](https://github.com/jshint/jshint)** & **[JSCS](https://github.com/jscs-dev/node-jscs)** integration.
* **MongoDB**, with [Mongoose ODM](https://github.com/learnboost/mongoose)

# Install

    git clone https://github.com/sachinb94/expense-watch.git
    npm install && bower install


# Manage project

    gulp

**Default task, run the server.** Build `sass` files, inject all scripts and styles to the project, watch them and open your default browser.

    gulp build

Wipe old generated `dist` directory while keeping the `.git` to preserve your remotes configuration. Concat all the scripts and vendors in one minified `.js` file, same thing for your styles. Rev all resources for caching purposes; copy the server part.

    gulp preview

Run the `gulp build` process and serve the `dist` directory.

    npm start:prod

Run the `gulp build` process and serve the `dist` directory.


## License

MIT