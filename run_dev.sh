#!/bin/bash
export JEKYLL_VERSION=3.8
docker run --name hccblog --volume="$PWD:/srv/jekyll" -p 4000:4000 -it jekyll/jekyll:$JEKYLL_VERSION jekyll serve --watch --drafts
