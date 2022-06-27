+++
title = 'Git-Commit-Message-Conventions'
date = 2020-05-15T10:40:18+08:00
tags = []
draft = false
+++

# Git Commit Message Conventions

## Goals
- auto-generate CHANGELOG.md
- specify commit-logs of sepcial types (ignore unimportant commits)

## Format
```
        git commit -m "[header]<type>(<scope>):<subject>[/header]
        [blankline/]
        [body]<body>[/body]
        [blankline/]
        [footer]
        <breaking changes>
        <referencing issues>
        [/footer]
"
```

### type
- feat(feature)
- fix(bug fix)
- docs(documentation)
- style(formatting, missing semi colons,...)
- refactor
- test(when adding missing tests)
- chore(maintain)

### scope
Anything specifying place of commit change. 
For example $browser, $compile, $rootScope...

### subject(text)
Short description of the change.
- imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- not dot(.) at the end

### body(Message)
- use imperative, present tense
- includes motivation for the change and contrasts with previous behavior

### footer
####breaking changes
```
BREAKING CHANGE: isolate scope bindings definition has changed and
    the inject option for the directive controller injection was removed.
    
    To migrate the code follow the example below:
    
    Before:
    
    scope: {
      myAttr: 'attribute',
      myBind: 'bind',
      myExpression: 'expression',
      myEval: 'evaluate',
      myAccessor: 'accessor'
    }
    
    After:
    
    scope: {
      myAttr: '@',
      myBind: '@',
      myExpression: '&',
      // myEval - usually not useful, but in cases where the expression is assignable, you can use '='
      myAccessor: '=' // in directive's template change myAccessor() to myAccessor
    }
    

```
#### referencing issues
Close #123, #245


[reference: google](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.uyo6cb12dt6w)
