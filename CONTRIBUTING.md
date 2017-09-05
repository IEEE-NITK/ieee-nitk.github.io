# Contributing to the IEEE-NITK blog

Members of our community are encouraged to write articles for our blogging platform. When we were deciding which website & blogging platform to use, [Jekyll](https://jekyllrb.com) was the obvious choice because it made it very easy for members to add new articles to it, assisting the platform to keep growing.

## Basic Setup

1. [Install Jekyll](http://jekyllrb.com)
2. Install jekyll-paginate, by
```
$ gem install jekyll-paginate
```
3. Fork the [IEEE NITK GitHub website repository](https://github.com/IEEE-NITK/ieee-nitk.github.io)
4. Clone the repo you just forked. You can do this using the `git clone` command. Check out this article for how to install Git on [Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-14-04) and on [Windows](http://www.jamessturtevant.com/posts/5-Ways-to-install-git-on-Windows/)
5. Check out the sample posts in `blog_src/_posts` to see examples for assigning categories and tags, and other YAML data. Posts are written in Markdown.
6. Read the documentation below for further customization pointers and documentation.

Here is a write up on how to start contributing to our blog:

## Step 1: Fork and clone this repo to your machine

Some experience with GitHub is required to accomplish this step.

Not sure how to fork and clone a GitHub repo? Do some googling, or if now, ask somebody on our Slack channel under #github. We'll be happy to help you out with this :)

## Step 2: First-time authors

Have you ever written an article for our platform? If so, feel free to skip over to the next section.

### Adding your self as an author:

**1. Go to the file `blog_src/_data/authors.yml`**

**2. There you will see a list of authors. It should look something like this:**

```yml

salman-bhai:
  name: Salman Shah
  github: salman-bhai
  author_image: 'salman_shah.jpg'
  user_description: 'Coder, Blogger and Developer interested in Machine Learning and Deep Learning'
  email: sbs.191197@gmail.com
```

**3. Add your username and subsequent info at the end of the file.**

At the top, we would like you to use the same `username` as your github account (for example `salman-bhai` is Salman's (my) Github username). This will allow us to avoid username collisions within our blog.

## Step 3: Adding your new post to the IEEE-NITK blog

Now that your username is under the list of authors, we get to the fun part: adding your article to our blog.

To get a grasp on we're about to do here, we highly recommend you the [Jekyll docs about Posts](http://jekyllrb.com/docs/posts).

**1. Add a new file to `blog_src/_posts` with the `.md` extension following these instructions. Make sure you add it to the `blog_src` folder and not the blog folder.**

- Use this convention when naming your file: `year-month-date-your-title-of-blog-post.md`
Here's an example: `_posts/2017-06-15-i-love-ieee-nitk.md`

**2. Add content to your newly created file.**

Here is an example:

```
---
layout: post
title: "Introduction to IEEE-NITK Chapter"
author_github: salman-bhai
date: 2017-05-14 23:32:44
image: '/assets/img/'
description: 'Introductory post to IEEE NITK'
tags:
- IEEE NITK
- CompSoc
categories:
- Compsoc/Diode/Piston
github_username: 'Salman Shah'
---
You should use Angular because it's trendy. Here's how to create a directive:

{% highlight javascript %}
angular
  .module('app')
  .directive('foo', function() {
    return {
      restrict: 'E',
      template: 'Sup yo'
    }
  });
{% endhighlight %}
```

We'll separate this file in two parts: **header** & **body**.

### Header

This is the information that lives in the top of each post, between the dashes (`---`).

Be sure to change the information on the header of your post file, it is very important that you add the following fields on the files on the header:

- layout _(should always be "post")_
- title _(your post's title)_
- author_github _your Github user name_
- date: _(Today's date and time in the format '2017-05-14 23:32:44')_
- image _(should always be '/assets/img/')_
- description _(A short description to what your post is about)_
- tags _(post tags separated by spaces)_
- categories _(category tags separated by spaces)_
- github_username _(Your GitHub username as it is)_

### Body

The body is where the actual content of your article will be located. Be sure to be comfortable using markdown to write content.

In this blog we use the [Github's flavor of markdown](https://guides.github.com/features/mastering-markdown/).

**3. Previewing your post**

You'll need to install Jekyll on your machine to preview your blog post. Be sure to preview your post before making a pull request. This is a community-based blog and we expect you to bullet-proof your article before making a pull request. By bullet-proofing we mean making sure that your content is properly formatted, etc.

- Learn how to install [Jekyll for GitHub Pages](https://help.github.com/articles/using-jekyll-with-pages)

- After that you need to build your blog to the blog repository by running the following command in the `blog_src` directory.
```
~/All-Projects/ieee-nitk.github.io/blog_src$ jekyll build --destination ../blog
```

- After that serve Jekyll locally by running this command in the root folder of the blog on your terminal: `jekyll serve`

The output of `jekyll serve` should look something like this:

```
> /ieee-nitk.github.io$ jekyll serve
Configuration file: none
            Source: /home/salman/All-Projects/ieee-nitk.github.io
       Destination: /home/salman/All-Projects/ieee-nitk.github.io/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
     Build Warning: Layout 'post' requested in blog_src/_posts/2017-05-14-introduction-to-ieee.md does not exist.
     Build Warning: Layout 'post' requested in blog_src/_posts/2017-05-18-vinay-bhat-interview.md does not exist.
     Build Warning: Layout 'default' requested in /blog_src/index.html does not exist.
     Build Warning: Layout 'minimal' requested in /blog_src/series.html does not exist.
     Build Warning: Layout 'minimal' requested in /blog_src/tags.html does not exist.
                    done in 0.103 seconds.
 Auto-regeneration: enabled for '/home/salman/All-Projects/ieee-nitk.github.io'
Configuration file: none
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.
```

- Visit your the address next to "Server address" on your browser to see the local version of your blog running, in my case http://127.0.0.1:4000

## Step 4: Publishing your article

Create a new branch in your local repo by the command `git checkout -b <branch_name>`


<<<<<<< HEAD
<<<<<<< HEAD
Commit and push your changes to your repository. Once those changes are in, go ahead and make a pull request to the [main blog's repo](https://github.com/IEEE-NITK/ieee-nitk.github.io).
=======
Commit and push your changes to your forked repo. Once those changes are in, go ahead and make a pull request to the [main blog's repo](https://github.com/IEEE-NITK/ieee-nitk.github.io).
>>>>>>> Added anirudh's post and modified contributing.md
=======
Commit and push your changes to your repository. Once those changes are in, go ahead and make a pull request to the [main blog's repo](https://github.com/IEEE-NITK/ieee-nitk.github.io).
>>>>>>> 5953afd225010c2698237837c76d92d34fb99ab0

Not sure how to do this? Do some googling first, and if no luck just ask somebody on our Slack channel under the #github channel and we'll be happy to help you out.

In an effort to maintain a clean commit history, if you have more than one commit for a single blog post, please squash them down to a single commit. If you're unsure of how to do this [check out this article](https://github.com/ginatrapani/todo.txt-android/wiki/Squash-All-Commits-Related-to-a-Single-Issue-into-a-Single-Commit).

When making the pull request please follow these guidelines:

1. Pull request title: `New post: (post name here)`

2. Pull request description: please provide a quick description on what your new article is about. This will help us get the right reviewers to take a look at your article before you push it.

Here's an example:

```
Title:
New post: Why you should use Angular?`

Description:
This article explains why every web developer should know Angular in 2015.
```
- Please ask someone to review the article, once you have submitted a Pull Request!

- As soon as your article is merged, it'll also be live on our blog (usually takes around 2 minutes to publish).
