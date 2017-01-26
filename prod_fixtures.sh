#!/bin/sh
pg_dump ##HEROKU DB URL > /tmp/db.dump
dropdb vagrant
createdb vagrant
psql -d vagrant < /tmp/db.dump

