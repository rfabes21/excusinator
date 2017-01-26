NAME := $(shell basename $$PWD | sed -e s/-//g)

install-test-reqs: ## install npm test dependencies
	npm install

install-test-cli: ## install npm test cli dependencies
	npm install -g karma-cli

install-test-coverage: ## install npm test coverage dependencies
	npm install

reqs:
	docker exec -it ${NAME}_django_1 apt-get install libffi-dev
	docker exec -it ${NAME}_django_1 pip install -U pip
	docker exec -it ${NAME}_django_1 pip install -U -r requirements/local.txt

init: reqs resetdb

resetdb: ## resets django db
	docker exec -it ${NAME}_django_1 ./manage.py reset_db --noinput
	docker exec -it ${NAME}_django_1 ./manage.py migrate
	docker exec -it ${NAME}_django_1 ./manage.py createsuperuser

prod_fixtures:
	docker exec -u postgres -it ${NAME}_postgres_1 /usr/app/prod_fixtures.sh

up: ## bring docker containers up
	docker-compose up -d


serve: ## run django dev server
	./manage.py runserver 0.0.0.0:8000

celery: ## run django dev server
	./manage.py celeryd -E -B --loglevel=INFO --autoreload

css: ## run django dev server
	compass watch --poll ./project/static -c ./config.rb

test:
	./manage.py test

collectstatic: ## Collect static for prod
	export DJANGO_SETTINGS_MODULE="project.settings.prod" && ./manage.py collectstatic --noinput

docker-up: ## bring docker containers up
	docker-compose up -d

shell: ## start docker shell
	docker exec -it ${NAME}_django_1 /bin/bash

killall:
	@ps ax | grep '[m]anage.py runserver' | awk '{ print $$1 }' | xargs kill -9


docker-help: ## can't remember how to run docker...
	@cat docker-help.txt

vmware-edit-nat: ## open vmware nat conf in sublime
	subl /Library/Preferences/VMware\ Fusion/vmnet8/nat.conf


help: ## This help dialog.
	@IFS=$$'\n' ; \
    help_lines=(`fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//'`); \
    for help_line in $${help_lines[@]}; do \
        IFS=$$'#' ; \
        help_split=($$help_line) ; \
        help_command=`echo $${help_split[0]} | sed -e 's/^ *//' -e 's/ *$$//'` ; \
        help_info=`echo $${help_split[2]} | sed -e 's/^ *//' -e 's/ *$$//'` ; \
        printf "%-30s %s\n" $$help_command $$help_info ; \
    done
