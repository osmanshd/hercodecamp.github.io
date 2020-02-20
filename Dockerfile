FROM jekyll/jekyll:3.8
RUN apk add imagemagick-dev=6.9.6.8-r1 --repository http://dl-3.alpinelinux.org/alpine/v3.5/main/
ADD Gemfile Gemfile.lock /srv/jekyll/
RUN bundle install
