#!/bin/bash

touch random-bin-data.txt

dd bs=10k count=1 if=/dev/random > random-bin-data.txt

cat random-bin-data.txt

node server.js

# I would ideally like to open a new browser window
# to localhost:8000 after initiating the server with
# node.

