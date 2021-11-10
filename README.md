# Contributing

To make changes to the website you must first install the required packages:

`yarn install`

To test locally you can then do:

```
yarn start
```

And the page will be available at [localhost:8000](http://localhost:8000).

To deploy the changes you can run:

```
yarn deploy
```

Which rebuilds the website HTML, adds it to the `gh-pages` branch and then pushes it, effectively deploying the site. The changes might take a few minutes to take effect.

This builds and deploys using your local files, so you could undo your changes by checking out a previous version like `git checkout HEAD~1` and then running `yarn deploy` again. Make sure to commit and push the changes you made to the `master` branch afterwards.

## Program Pages

Program pages use markdown, and the frontmatter determines where and how they show up across the site. Currently the frontmatter supported looks as follows:

```{yml}
tags:
  - 💻 Workshop
  - 🔨 Project
title: Data Science
creators:
  - Heather Gibling
  - Mariana D’Angelo
blurb: Learn popular tools used for machine learning.
date: 2021-12-11
slug: data-science
```

You can add tags which will populate across the site (the emojis are important), a title for the program, creators, a short blurb for places where not much text is needed, a `slug` which determines the URL, i.e. hercodecamp.com/programs/{slug} or [hercodecamp.com/programs/data-science](hercodecamp.com/programs/data-science), and a `date` which determines which programs are "upcoming".
