.PHONY: dist/saratoga.min.css

live: public
	cd public && git pull
	rm -rf public/*
	hugo
	cd public && git add --all && git commit -m "Publishing to gh-pages" && git push

public:
	rm -rf public
	mkdir public
	git worktree prune
	rm -rf .git/worktree/public/
	git worktree add -B gh-pages public origin/gh-pages

dist/saratoga.min.css:
	minify static/css/atoms.css static/css/molecules.css static/css/organisms.css static/css/templates.css > $@
	git add $@
