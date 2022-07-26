"use strict";(self.webpackChunknest_commander_monorepo=self.webpackChunknest_commander_monorepo||[]).push([[491],{7942:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(959);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},219:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=n(2081),r=n(4604),o=(n(959),n(7942)),i=["components"],s={title:"Inquirer",sidebar_title:"Inquirer"},l=void 0,u={unversionedId:"features/inquirer",id:"features/inquirer",title:"Inquirer",description:"So now you've got a great CLI application, but what happens when someone runs the command and forgets to pass in a parameter? Well, right now it's going to throw an error back out and the process will fail. But what if we want to stop the execution and ask the user for input instead of failing outright? That's where the InquirerService comes in. With the InquirerService we're able to define a set of questions to ask and get the inputs back, then continue on with the normal execution.",source:"@site/docs/features/inquirer.md",sourceDirName:"features",slug:"/features/inquirer",permalink:"/docs/features/inquirer",draft:!1,editUrl:"https://github.com/jmcdo29/nest-commander/edit/main/apps/docs/docs/features/inquirer.md",tags:[],version:"current",lastUpdatedBy:"Jay McDoniel",lastUpdatedAt:1658792986,formattedLastUpdatedAt:"Jul 25, 2022",frontMatter:{title:"Inquirer",sidebar_title:"Inquirer"},sidebar:"docs",previous:{title:"Commander",permalink:"/docs/features/commander"},next:{title:"CommandFactory",permalink:"/docs/features/factory"}},p={},c=[{value:"Creating a QuestionSet",id:"creating-a-questionset",level:2},{value:"Inquirer Decorators",id:"inquirer-decorators",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"So now you've got a great CLI application, but what happens when someone runs the command and forgets to pass in a parameter? Well, right now it's going to throw an error back out and the process will fail. But what if we want to stop the execution and ask the user for input instead of failing outright? That's where the ",(0,o.kt)("inlineCode",{parentName:"p"},"InquirerService")," comes in. With the ",(0,o.kt)("inlineCode",{parentName:"p"},"InquirerService")," we're able to define a set of questions to ask and get the inputs back, then continue on with the normal execution."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If using the ",(0,o.kt)("inlineCode",{parentName:"p"},"InquirerService")," make sure to install ",(0,o.kt)("inlineCode",{parentName:"p"},"@types/inquirer")," as a ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependency")," to ensure typescript doesn't encounter any type errors")),(0,o.kt)("h2",{id:"creating-a-questionset"},"Creating a QuestionSet"),(0,o.kt)("p",null,"To ",(0,o.kt)("inlineCode",{parentName:"p"},"nest-commander")," a ",(0,o.kt)("inlineCode",{parentName:"p"},"QuestionSet"),", as it sounds, is a set of related questions that should all be asked together. To create a question set, simply create a class and decorate it with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@QuestionSet()")," decorator. Provide the decorator a name via the options as well, as this name will be used by the ",(0,o.kt)("inlineCode",{parentName:"p"},"InquirerService")," to know which question set to ask. Let's expand on the previous task runner. Say now maybe the user forgets to pass in a command, but we still want to let them define it at runtime. The first thing we need to do is change the ",(0,o.kt)("inlineCode",{parentName:"p"},"<task>")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"[task]")," to make Commander understand that the argument is optional, even though we know it's really not. After that we need to define the question set and question(s) to ask the user. We'll call the question set ",(0,o.kt)("inlineCode",{parentName:"p"},"task")," and define it as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/task.questions.ts"',title:'"src/task.questions.ts"'},"@QuestionSet({ name: 'task' })\nexport class TaskQuestions {\n  @Question({\n    message: 'What task would you like to execute?',\n    name: 'task'\n  })\n  parseTask(val: string) {\n    return val;\n  }\n}\n")),(0,o.kt)("p",null,"Once again, each ",(0,o.kt)("inlineCode",{parentName:"p"},"@Question()"),", just like each ",(0,o.kt)("inlineCode",{parentName:"p"},"@Option()"),", is its own method to allow for custom parsing of the value. You can use this in tandem with other decorators like ",(0,o.kt)("inlineCode",{parentName:"p"},"@ValidateFor()")," to allow for verifying the input is correct before returning back to the executing program. The ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," of the question maps back to the property of the object returned by the ",(0,o.kt)("inlineCode",{parentName:"p"},"InquirerService"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"ask")," command."),(0,o.kt)("p",null,"Now to make use of this question set, let's head back to our ",(0,o.kt)("inlineCode",{parentName:"p"},"TaskRunner")," class and make some modifications:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/task.command.ts"',title:'"src/task.command.ts"'},"@Command({\n  name: 'run',\n  arguments: '[task]',\n  options: { isDefault: true }\n})\nexport class TaskRunner extends CommandRunner {\n  constructor(private readonly inquirer: InquirerService) {\n    super();\n  }\n  async run(\n    inputs: string[],\n    options: Record<string, string>\n  ): Promise<void> {\n    let task = inputs[0];\n    if (!task) {\n      task = (\n        await this.inquirer.ask<{ task: string }>('task', undefined)\n      ).task;\n    }\n    const echo = spawn(task, {\n      shell: options.shell ?? userInfo().shell\n    });\n    echo.stdout.on('data', (data: Buffer) => {\n      console.log(data.toString());\n    });\n  }\n  @Option({\n    flags: '-s, --shell <shell>',\n    description: 'A different shell to spawn than the default'\n  })\n  parseShell(val: string) {\n    return val;\n  }\n}\n")),(0,o.kt)("p",null,"Now, so long as ",(0,o.kt)("inlineCode",{parentName:"p"},"TaskQuestions")," is added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"providers")," array, the ",(0,o.kt)("inlineCode",{parentName:"p"},"InquirerService")," will pull the correct question set, ask the user, and return the results as an object. We could also add in a question about which shell to use, but that will be left as is for now."),(0,o.kt)("h2",{id:"inquirer-decorators"},"Inquirer Decorators"),(0,o.kt)("p",null,"This will be a brief overview of the decorators that exist for the ",(0,o.kt)("inlineCode",{parentName:"p"},"InquirerService")," to make use of. Most of these all follow the same format and have functionalities that, hopefully, can be derived from their name. Every decorator takes in an object with a ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," property, which should match the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," in a ",(0,o.kt)("inlineCode",{parentName:"p"},"@Question()")," decorator."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@ValidateFor()")," validates the input for a named input. Say that in the above we didn't want to accept any numeric characters. The ",(0,o.kt)("inlineCode",{parentName:"li"},"@ValidateFor()")," decorated method can return a boolean if the input is valid or not."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@TransformFor()")," is a custom transformer on top of the method that already exists, in case you want to separate it out further"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@WhenFor()")," is a custom method that can determine if a question should be asked or not based on other inputs already gathered"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@ChoicesFor()")," returns the choices that should be available for a select question"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@DefaultFor()")," returns the default for the question, in the case of no input"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@MessageFor()")," returns the message for the question, instead of having it in the decorator. This is to allow for external services to act on the message itself.")),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api"},"api docs")," to learn more about the ",(0,o.kt)("inlineCode",{parentName:"p"},"InquirerService"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"ask")," command and extra decorators."))}m.isMDXComponent=!0}}]);