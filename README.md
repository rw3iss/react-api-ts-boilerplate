To run locally for development:

Prerequisites:
node v10.11+
npm v6.4.1+
mysql


Install:
npm install webpack webpack-cli webpack-dev-server forever -g
npm install (Install and use 'yarn install'  if you run into package errors running the code)


Start the apps:
There's a tmux shortcut if you want to use tmux, just run: ./tmux.sh

Otherwise, run individually/manually:

Server:
Start the dev rebuild on file changes:
cd api && webpack -w
forever build/server.js
(forever restarts the server app anytime app.js is rebuilt by the above watcher. I use forever because nodemon and pm2 are both buggy)

Client: 
Start the client app on localhost:5000 with hot module reloading enabled:
cd client && webpack-dev-server --hot

