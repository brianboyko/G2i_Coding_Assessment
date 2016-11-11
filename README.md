# G2i Coding Assessment
This assessment is designed to test your ability and style as a developer so that we (G2i) will know how best to utilize your unique skillset. The assessment itself is fairly standard, we want you to build your own copy of [TodoMVC](http://todomvc.com/) using React/Redux.

The idea behind picking such a simple challenge is that we don’t want to test the product you create, only the code you wrote to make it. This is because G2i focuses on hiring developers, not designers.

The end TodoMVC product should be completely functional in the same way as every other TodoMVC example. State does not have to persist across refreshes, you aren’t required to have a server, the most beautiful Webpack setup is optional, unit tests don’t have to be written (this once!), and so on. However, bonus points to you if your app does have any of these things. Feel free to customize your development setup, and ultimately your app, with tools you are comfortable with and want to demonstrate proficiency in. You will not be penalized for showing as much as you know. The only technical requirement is that you use React and Redux for the functionality of the app as that demonstrates an ability to handle the work G2i is best known for.

There are plenty of React/Redux TodoMVC examples out their, you may even have written one in your past. Whatever code you choose to give to us, be ready to explain every line of it. We want to see your style as a developer as of right now, and that’s why we have this assessment.

Please time yourself when working on this app. It’s important that we know how long it takes you to deliver a feature. If you want to go above and beyond and add more features/technologies to your app, we’ll understand if it takes longer. We also don’t want you to spend all your time on this assessment, please don’t spend more than four hours. If you hit four hours and the app still isn’t done, it’s fine. Submit it as it is.

Ultimately, we can’t enforce these rules so it’s the honor system. Because we work remotely, trust is a big part of our business. We wish you the best of luck.

## Resources
- [TodoMVC website with examples](http://todomvc.com/).
- [TodoMVC CSS](https://npmcdn.com/todomvc-app-css@2.0.6/index.css).
- [React documentation](https://facebook.github.io/react/).
- [Redux documentation](http://redux.js.org/).

----------------------

## Notes

Just some notes for my own use:

1) Let's do the front-end first.
2) Unit tests for the simple stuff; but not 100% coverage.
3) Explain every line of code? Docblokr? Docblokr.
4) Let's do this thing.  LEEROY JENKINS!

Step 1: let's create code pretty much based on prior work.  I've used a *lot* of React/Redux in the past, so it wouldn't be entirely implausible to just fork CanYouHearUs.IS or my Canada MMP project -- but those are way overscoped for the project.  Still, we can get the Package.json file to install a bunch of dependencies at once.

One note is that I will be using the NPM package 'reduxify' - I actually *wrote* this package, so I'll try to explain a bit about it when it comes up.  

-------

## More notes

Okay, so we have things set up.  Now, how do we proceed?  Well, let's look at the TodoMVC from a story prospective.

Based on the React example at TodoMVC, we should do the following:

As a USER:

1) I want to add a TODO and have it be remembered.
2) I want go be able to see all the todos.
3) I want to be able to click on a todo's button to mark it complete.
4) I want to show ALL todos, ACTIVE Todos, and COMPLETED todos.
5) I want to be able to mark an Active todo as completed.
6) I want to be able to mark a completed todo as active.  
7) I want to clear all completed todos with a click. 
