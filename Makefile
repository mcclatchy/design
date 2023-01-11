.PHONY: dist hi

style ?= expanded

current != awk '/version/{print $$2}' package.json | egrep -o "([0-9]{1,}\.)+[0-9]{1,}"
# version != echo $(current) | awk -F "." '{ sub($$3, int($$3)+1); print }'
version != echo $(current) | awk '{ split($$0,v,"."); print v[1] "." v[2] "." int(v[3])+1 }'

dist:
	sass --style $(style) --no-source-map builds:dist

release: dist
	@echo $(current)
	@echo $(version)
	# git add dist
	# @ sed -E --in-place=.bak 's/([0-9]+\.){2}([0-9]+)/$(version)/' package.json
	# git add package.json
	# git commit -m "updating package.json to $(version)"
	# git push
	# git tag $(version)
	# git push origin $(version)

live: public
	rm -rf public/*
	hugo
	cd public && git add --all && git commit -m "Publishing to gh-pages" && git push

public:
	rm -rf public
	mkdir public
	git worktree prune
	rm -rf .git/worktree/public/
	git worktree add -B gh-pages public origin/gh-pages

clean:
	rm dist/*
