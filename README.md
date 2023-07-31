# Todo-list
#### Video Demo:  <URL HERE>
#### Description:
For my final CS50 project, I decided to use an assignment from another open-source course called The Odin Project. In this assignment we are tasked with creating a to-do list web application using Webpack, NPM, JavaScript, CSS, and HTML. I had never used webpack before and a todo-list application seemed like a great choice for a final project. This project is a simple to-do list. You can add tasks, edit them, delete them, and check them off to mark their completion. You also can create and switch between different projects for organizing tasks you want grouped together. 

To make this project I used NPM (Node Package Manager) and Webpack. NPM is a library and registry for JavaScript software packages. NPM makes it easier for developers to share and collaborate on projects together, as it makes sure that developers are working with the same dependicies and versions. This allows for more consistency between develpment environments. The package.json file contains all the relevant information about my project(like name, version, author, license, etc.) and the dependencies installed. The package-lock.json file contains the exact version of every installed dependency, including its sub-dependencies and their versions.

Next, I used Webpack, which is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve your content from. The webpack.config.js file contains all the configuration settings for the project. Here is where I added my entry points and settings I needed to make the project. Webpack helps immensely with organizing your JavaScript code and allows you to put ypur code into separate modules which helps make the code more maintainable and shorter. 

The src folder contains all the html, css, images, and JavaScript code that I created and used for the project. Once I was finished with the project I used webpack to create a dist folder that contains all the code bundled together.

I wanted to use NPM and Webpack to get used to developing in a production-like setting and work on my ability to write clean and simple code. I also have a strong interest in web development, which is why I have chosen to make a application using HTML, CSS, and JavaScript. Many of my project features like creating projects and overall layout are inspired from todoist.com. In the future, I would like to add more features. For example, like adding a way to delete projects and a save feature so that users can see all of their tasks and projects created.


