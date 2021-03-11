# 7GUIs in ClojureScript

[7GUIs](https://eugenkiss.github.io/7guis/tasks) is a programming benchmark consisting of seven GUI programming tasks, increasing in complexity from a simple counter to a fully-functional spreadsheet.
Here, they are implemented in React, via [ClojureScript](https://clojurescript.org/) and [Reagent](https://reagent-project.github.io/).

Try the live demo [here](https://stoic-franklin-71dc69.netlify.app).

Or, to run it on your own machine:

- First, ensure `node`, `npm`, and a Java SDK version 8 or later are installed.
These are the dependencies of the [`shadow-cljs`](https://github.com/thheller/shadow-cljs) build tool.
- Then, run the following:

```
git clone 'git@github.com:aparkerdavid/cljs-7guis.git'
cd cljs-7guis
npm install
npm run dev
```