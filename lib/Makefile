build:
	@echo "Building lib..."
	rm -rf lib/node_modules lib/dist lib/dist2
	yarn install --frozen-lockfile
	yarn esbuild src/index.js --bundle --platform=node --outfile=dist/index.js
	mkdir -p dist2
	npm pack --pack-destination dist2

publish:
	git config --global user.email "flaviostutz@gmail.com"
	git config --global user.name "Flávio Stutz"
	npm version from-git --no-git-tag-version
	echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc
	yarn publish
