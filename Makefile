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

prepare:
	brew install nvm
	@echo "NVM installed. Now following shell config instructions at https://formulae.brew.sh/formula/nvm"
	@echo "After that, open a shell and run:"
	@echo "nvm use"
	@echo "corepack enable"	
