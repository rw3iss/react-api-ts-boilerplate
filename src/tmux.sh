#!/bin/sh 
tmux new-session -d
tmux split-window -h
tmux split-window -v
#tmux split-window -v -t 0

tmux send-keys -t 0 'cd ~/Sites/kkjay/src/api && forever build/server.js' Enter
tmux send-keys -t 1 'cd ~/Sites/kkjay/src/client && webpack-dev-server --hot' Enter
tmux send-keys -t 2 'cd ~/Sites/kkjay/src/api && webpack -w' Enter
#tmux send-keys -t 2 'cd ~/Sites/blobs_new2  && mysqld' Enter

tmux select-pane -t 2

tmux -2 attach-session -d 
