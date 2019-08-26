#!/bin/sh
# https://stackoverflow.com/a/38732187/1935918

npm run migrate:up 2>/dev/null

exec yarn dev