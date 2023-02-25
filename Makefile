SHELL := /bin/bash

build:
	cd lib && make build

test:
	cd example && make test

publish:
	cd lib && make publish

clean:
	@echo "Cleaning up cache and dist folders..."
	rm -rf lib/node_modules lib/dist lib/dist2
	rm -rf example/node_modules example/dist
	-find $$(yarn cache dir) -name '*stutzlab*' | xargs rm -r

all:
	make clean build test

