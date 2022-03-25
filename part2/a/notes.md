## Console.log
> What's the difference between an experienced JavaScript programmer and a rookie? The experienced one uses console.log 10-100 times more.

<strong>Note</strong>:

When you use console.log, don't concatenate things 'the Java way' with a plus, separate things to be printed with a comma:
``` Javascript
    console.log('props value is', props)
```

## Protip: Visual Studio Code snipppets
With Visual Studio Code it's easy to create 'snippets',i.e shortcuts for quickly generating commonly re-used portions of code.

The most important snippet is the one for the ``console.log`` command, for example ``clog``. This can be created like so:
``` Javascript
{
  "console.log": {
    "prefix": "clog",
    "body": [
      "console.log('$1')",
    ],
    "description": "Log output to console"
  }
  ```




