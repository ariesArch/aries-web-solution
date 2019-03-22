---
templateKey: blog-post
title: 'ES6: Declare a Read-Only Variable with the const Keyword'
date: 2019-03-22T20:44:19.068Z
description: using const
tags:
  - es6
  - const
  - variable
  - ''
---
let is not the only new way to declare variables. In ES6, you can also declare variables using the const keyword.

const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned.

    "use strict"
    const FAV_PET = "Cats";
    FAV_PET = "Dogs"; // returns error

As you can see, trying to reassign a variable declared with const will throw an error. You should always name variables you don't want to reassign using the const keyword. This helps when you accidentally attempt to reassign a variable that is meant to stay constant. A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.
