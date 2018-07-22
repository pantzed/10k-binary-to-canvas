#!/bin/bash
parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")")

cd "$parent_path"

node "$(dirname "$0")/server.js"