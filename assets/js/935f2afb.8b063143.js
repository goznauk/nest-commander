"use strict";(self.webpackChunknest_commander_monorepo=self.webpackChunknest_commander_monorepo||[]).push([[53],{2140:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"category","label":"Introduction","items":[{"type":"link","label":"Why nest-commander?","href":"/docs/","docId":"introduction/intro"},{"type":"link","label":"Installation","href":"/docs/introduction/installation","docId":"introduction/installation"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Features","items":[{"type":"link","label":"Commander","href":"/docs/features/commander","docId":"features/commander"},{"type":"link","label":"Inquirer","href":"/docs/features/inquirer","docId":"features/inquirer"},{"type":"link","label":"CommandFactory","href":"/docs/features/factory","docId":"features/factory"},{"type":"link","label":"Plugins","href":"/docs/features/plugins","docId":"features/plugins"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Testing","items":[{"type":"link","label":"Installation","href":"/docs/testing/installation","docId":"testing/installation"},{"type":"link","label":"TestFactory","href":"/docs/testing/factory","docId":"testing/factory"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Schematics","items":[{"type":"link","label":"Installation","href":"/docs/schematics/installation","docId":"schematics/installation"},{"type":"link","label":"Usage","href":"/docs/schematics/usage","docId":"schematics/usage"}],"collapsed":true,"collapsible":true},{"type":"link","label":"Execution and Publishing","href":"/docs/executing/local","docId":"executing/local"},{"type":"link","label":"API","href":"/docs/api","docId":"api"}]},"docs":{"api":{"id":"api","title":"API","description":"nest-commander","sidebar":"docs"},"executing/local":{"id":"executing/local","title":"Execution and Publishinig","description":"Before Running","sidebar":"docs"},"features/commander":{"id":"features/commander","title":"Commander","description":"For nest-commander, a command is something that the CLI runner should do. This could be like @nestjs/cli\'s start or build commands, or it could be something like git\'s add or commit. To specify a command, all you need to do is decorate a class that extends the CommandRunner abstract class with the @Command() decorator. No need to use @Injectable() or anything else, the @Command() decorator will take care of allowing dependencies to be injected into the class.","sidebar":"docs"},"features/factory":{"id":"features/factory","title":"CommandFactory","description":"Okay, so you\'ve got this fancy command set up, it takes in some user input, and is ready to go, but how do you start the CLI application? Well, just like in a Nest application where you can use NestFactory.create(), nest-commander comes with it\'s own CommandFactory.run() method. So let\'s wire everything up, set up the main.ts and see how this all works together.","sidebar":"docs"},"features/inquirer":{"id":"features/inquirer","title":"Inquirer","description":"So now you\'ve got a great CLI application, but what happens when someone runs the command and forgets to pass in a parameter? Well, right now it\'s going to throw an error back out and the process will fail. But what if we want to stop the execution and ask the user for input instead of failing outright? That\'s where the InquirerService comes in. With the InquirerService we\'re able to define a set of questions to ask and get the inputs back, then continue on with the normal execution.","sidebar":"docs"},"features/plugins":{"id":"features/plugins","title":"Plugins","description":"As of version 2.3.0, you can build your CLI with the ability to read for extra plugins that are developed by other people. By using the usePlugins option with the CommandFactory, you\'ll be setting up you shiny new CLI to expect to find a config file with a plugins property that is an array of strings, either as the locations of packages in a local environment, or npm package names.","sidebar":"docs"},"features/utility":{"id":"features/utility","title":"UtilityService","description":"As parsing booleans and numbers is a common occurrence, and the values only come in naturally as strings, nest-commander exposes a CliUtilityService to make parsing even easier and to add some extra utility. There are three methods, parseBoolean, parseInt, and parseFloat. parseInt and parseFloat are simple wrappers around the corresponding Number.parse*() method, but the parseBoolean method has a few more tricks to it."},"introduction/installation":{"id":"introduction/installation","title":"Installation","description":"To get started with nest-commander you can either add it to a nest new project, created using the @nestjs/cli, or you can set the project up from scratch and make sure to install nest-commander, @nestjs/common and @nestjs/core.","sidebar":"docs"},"introduction/intro":{"id":"introduction/intro","title":"Why nest-commander?","description":"Initial Motivation","sidebar":"docs"},"schematics/installation":{"id":"schematics/installation","title":"Installation","description":"So now you know about this awesome package and want quick ways to set up commands and questions and tie them to each other. You could write your own shell script, or use handlebars and some clever generation of code, maybe even write your own schematic, but why go through all that trouble when one already exists? Simply install the nest-commander-schematics collection as a devDependency","sidebar":"docs"},"schematics/usage":{"id":"schematics/usage","title":"Usage","description":"We\'ll show how to use the nest-commander-schematics with @nestjs/cli, but it works with @angular/cli and nx as well, as all of them use Angular\'s schematics under the hood.","sidebar":"docs"},"testing/factory":{"id":"testing/factory","title":"CommandTestFactory","description":"To get started with the CommandTestFactory you need to make use of the createTestingCommand, similar to TestingModule\'s createTestingModule. This command can take in general module metadata, including providers, but generally it\'s pretty easy to just take in the related module and use overrideProvider for mocking whatever providers are necessary to mock.","sidebar":"docs"},"testing/installation":{"id":"testing/installation","title":"Installation","description":"So now you\'ve got a fancy CLI application, and you\'ve got it unit tested just fine, but you need to do e2e testing. How do you do it? With express there\'s supertest, and fastify has light-my-request with its inject framework, but how do you pass in CLI commands without spawning another shell? That\'s where the nest-commander-testing package comes in! It\'s built on top of Nest\'s own @nestjs/testing package, so the API should be very familiar. To install, simple use your favorite package manager and set the package as a devDependency","sidebar":"docs"}}}')}}]);