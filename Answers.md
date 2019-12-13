# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is one of many JS libraries available to web developers. React is component based and interfaces directly with the DOM which allows for easy management of complex apps. React is unique in that it 'reacts' to the state (data) changing and updates seamlessly and effeciently due to the component driven nature.

React tries to make it as easy as possible to interact with the DOM and simplify the syntax needed for those interactions by reducing the need for utilizing document.getElementByClassname syntax and employing a virtual DOM to maximize efficiency by only updating when new changes have been made.

2. What does it mean to think in react?

It means to break down the app/site into components and determining the function of those components in relation to the overall function of the app/site. It's thinking about What pieces have changing states, which pieces need to access certain state or properties, etc.

3. Describe state.

State is an object that determines how a component renders or appears. State is what allows for dynamic interactions - our interaction will impact the component state in some form or another, much like changing the temperature can move an icecube from a solid state into a liquid state or vice versa.

4. Describe props.

Props or properties are passed down from parent to child and represent a component's configuration. Props are effectively read-only. A Component cannot change its props, but it is responsible for putting together the props of its child Components.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is anything that affects something outside the scope of the function being executed. You can sync effects in a Reac component to state or prop changes by utilizing a useEffect hook that either only fetches data once as the component mounts, or watches to make an API call that could fire again during the life of the component, depending on a piece of state or a prop.

