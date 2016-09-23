react-redux-tutorial
=========================

This repository contains example code with tutorial to help grasp react-redux and more specifically [Redux](https://github.com/rackt/redux).

The official and very exhaustive Redux documentation is available [here](http://redux.js.org/) and should be your number one source of truth regarding Redux. The present tutorial will only offer you an introduction to Redux use. For further or more detailed info, please refer to the Redux documentation.

### Prerequisites
It is required for you to know a bit of ES6 and ES7 (Object Spread) to correctly understand some of the examples given in this repo. Also be aware that this tutorial targets redux 3.0.2 and react-redux 4.0.0.

### Clone the repository
`git clone https://github.com/bilaschandra/react-redux-tutorial.git`

### Move into repository
`cd react-redux-tutorial`

### Install dependencies
`npm install`

### Compile the code
`npm run build`

### Start an example

Being real js files, each example can be run to verify that it works as intended or to do your own experiments:

`npm start`

open http://localhost:3000

Enjoy!


Basic Content
==================

Installing Redux
 - npm install --save react-redux    

What is Redux?

- Redux is a framework that controls states in a JavaScript app. According to the official site:
- Redux is a predictable state container for JavaScript apps.

There are many states in an app that will change depending on time, user behavior, or a plethora of different reasons. Thus, if we consider an app as the process to change its own state, the view a user sees is how the states are presented.

For example, in a TODO list app, when we create a new todo item, we actually changed the state of an app from one without that TODO item to one with the TODO item. In addition, because the app’s state has changed, and the view is how a state is presented, we will see the new TODO item in our view.

How does Redux Work?

Redux can be broken down into the following:

– store: manages the states. Mainly there is a dispatch method to dispatch an action. In a Redux app, you can obtain its states via `store.getState()`
– middleware: the middleman between a `store.dispatch()` and a reducer. Its purpose is to intercept an action that has been dispatched, and modify or even cancel the action before it reaches the reducer.

– action: a simple, plain JavaScript object. An action can also be considered as a command to change a state.

Example:
```
// The action creator is just a function...
var actionCreator = function() {
    // ...that creates an action (yeah, the name action creator is pretty obvious now) and returns it
    return {
        type: 'AN_ACTION'
    }
}
```

– reducer: decides how to change a state after receiving an action, and thus can be considered the entrance of a state change. A reducer is comprised of functions, and it changes states by taking an action as an argument, in which it then returns a new state.


Example:
- Actions describe the fact that something happened, but don’t specify how the application’s state changes in response. This is the job of a reducer.
```
{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}
```

** combineReducers(reducers)
- The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.

- The resulting reducer calls every child reducer, and gathers their results into a single state object. The shape of the state object matches the keys of the passed reducers.

Example:
```
import { createStore, combineReducers } from 'redux'

var reducer = combineReducers({
    user: userReducer,
    items: itemsReducer
})

var store = createStore(reducer)
```


***Note that:

- We don’t mutate the state. We create a copy with `Object.assign()`. `Object.assign(state, { visibilityFilter: action.filter })` is also wrong: it will mutate the first argument. You must supply an empty object as the first parameter. You can also enable the object spread operator proposal to write `{ ...state, ...newState }` instead.

- We return the previous state in the default case. It’s important to return the previous state for any unknown action.

### SUMMARY:
- Basic Redux
- Reducer
- Combine Reducer
- Action & Action Type
- middleware (store.dispatch())

