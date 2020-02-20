#!/bin/bash
set -e
docker build -t hcc/blog .
docker run --rm --name hccblog --volume="$PWD:/srv/jekyll" -p 4000:4000 -it hcc/blog:latest jekyll serve --watch --drafts
