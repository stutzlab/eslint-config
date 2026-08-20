SHELL := /bin/bash

.DEFAULT_GOAL := all

%:
	@echo ''
	@echo '>>> Running /lib:$@...'
	$(MAKE) -C lib $@
	@echo ''
	@echo '>>> Running /example:$@...'
	$(MAKE) -C example $@

publish:
	@echo '>>> lib: publish'
	$(MAKE) -C lib publish

setup:
	mise install

fix-registry:
	@echo "Replacing artifactory URLs with official pnpm registry..."
	find . -name pnpm-lock.yaml -exec sed -i '' 's|https://artifactory\.insim\.biz/artifactory/api/npm/nn-npm|https://registry.npmjs.org|g' {} +
	@echo "Done!"
