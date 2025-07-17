.PHONY: dist
.ONESHELL:

style ?= expanded

version = $(error Missing version number)
current = $(shell grep -Eo '([0-9]{1,}\.?){3}' package.json)

dist:
	sass --style $(style) --no-source-map builds:dist

release: dist
	git add dist
	awk -v c="$(current)" -v n="$(version)" "{sub(c,n); print}" package.json > tmp.json
	mv tmp.json package.json
	git add package.json
	git commit -m "updating package.json to $(version)"
	git push
	git tag $(version)
	git push origin $(version)

live: public
	./hugo
	cd public; \
	git add --all; \
	git commit -m "publishing to gh-pages"; \
	git fetch; \
	git merge -s ours -m "merging with origin"; \
	git push origin HEAD:gh-pages

public:
	git worktree add -B gh-pages public origin/gh-pages

clean:
	rm dist/*
