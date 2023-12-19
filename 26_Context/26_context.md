<div align="center">

  <h1> 30 Days Of React: JavaScript Refresher</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/jade-ivan-bringcola-bb9466272/">
    <img src="https://avatars.githubusercontent.com/u/113174497?v=4">
  </a>

  <a class="header-badge" target="_blank" href="https://github.com/Blacklion567">
    <img alt="GitHub" src="https://avatars.githubusercontent.com/u/113174497?v=4">
  </a>

<sub>Author:
<a href="https://www.linkedin.com/in/jade-ivan-bringcola-bb9466272/" target="_blank">Blacklion567</a><br>
<small> October 2023</small>
</sub>

</div>

[<< Day 25](../25_Custom_Hooks/25_custom_hooks.md) | [Day 27>>](../27_Ref/27_ref.md)

![30 Days of React banner](../images/30_days_of_react_banner_day_26.jpg)

# Context

Context allow as to pass data through the component tree without having to pass props down manually to every child component at every level.

In React, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

## When to Use Context

Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. For example, in the code below we manually thread through a “theme” prop in order to style the Button component:

The above text has been taken from [react documentation](https://reactjs.org/docs/context.html) without any change.

It seems the react documentation has pretty good information about context, you can go through the [react documentation](https://reactjs.org/docs/context.html).

# Exercises

🎉 CONGRATULATIONS ! 🎉
[<< Day 25](../25_Custom_Hooks/25_custom_hooks.md) | [Day 27>>](../27_Ref/27_ref.md)
