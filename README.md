# github-section-5

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/github-section-5)

## How Components communicate with each other ??

By default All properties of components are accessible only inside these components and not from outside
that is why we have to add a decorator to the property(Input),we have to explicit about which property 
is bindable to other components.
We add @Input to make a property bindable from outside 

  With this decorator(@Input) we are sucessfully exposing this property,so now any
  parent component or any component hosting our ServerElementComponent(like we
  have done in app.component.html file) is now able to bind to the element
