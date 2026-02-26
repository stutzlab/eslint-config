SHELL := /bin/bash

build:
	cd lib && make build

test:
	cd example && make test

lint:
	echo "Nothing to link"

publish:
	cd lib && make publish

clean:
	@echo "Cleaning up cache and dist folders..."
	rm -rf lib/node_modules lib/dist lib/dist2
	rm -rf example/node_modules example/dist
	-rm -rf ~/.pnpm-store

all:
	make clean build test

fix-registry:
	@echo "Replacing artifactory URLs with official pnpm registry..."
	find . -name pnpm-lock.yaml -exec sed -i '' 's|https://artifactory\.insim\.biz/artifactory/api/npm/nn-npm|https://registry.npmjs.org|g' {} +
	@echo "Done! All pnpm-lock.yaml files have been updated."

prepare:
	brew install nvm
	@echo "NVM installed. Now following shell config instructions at https://formulae.brew.sh/formula/nvm"
	@echo "After that, open a shell and run:"
	@echo "nvm use"
	@echo "corepack enable"	
