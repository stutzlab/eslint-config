build:
	yarn install --frozen-lockfile
	cd lib && make build

test:
	cd example && make test

