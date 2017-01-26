# The Excusinator

A Term Project app for MET CS 633 that will generate excuses for you based on your type selection.


## Docker setup:
-------------

Download this:
https://docs.docker.com/docker-for-mac/

Make sure you have an active dockerhub account

- cd into project root

- Terminal Window 1:
```
$ docker login
$ docker-compose up -d
```

- Terminal Window (or Tab) 2:
if you are initiating a new box, or have downed your container and re-upped it:
```
$ make init
```
else:
```
$ make shell
$ make serve
```


- You'll need to hit `localhost:8000` to see the dev server, no need to edit any host files

- In order to build scss, you need to open yet another Terminal Window (or Tab):
```
$ make shell
$ make css
```


- most of the things you need to run are now run using make
- run the help command to view what you can all run
    - some commands are meant for inside the box, some for outside the box:
```
$ make help
```



notes:
------------


- shows active docker processes
```
docker ps
```


- shows all docker containers running or terminated

```
docker ps -a
```



- Stops the box, keeps containers intact (paused)
    - Use this if you need to switch projects to another docker container

```
docker-compose stop
```



- kills + deletes all containers

```
docker-compose down
```



- restart all docker

```
docker-compose down
```


```
docker-compose up
```
