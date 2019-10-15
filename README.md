# github-section-5

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/github-section-5)

## How Components communicate with each other ??
  ***
  - server-element.component.ts
  ***
  ***
  - By default All properties of components are accessible only inside these components and not from outside
    that is why we have to add a decorator to the property(Input),we have to explicit about which property 
    is bindable to other components.
  - We add @Input to make a property bindable from outside.
  - With this decorator(@Input) we are sucessfully exposing this property,so now any
    parent component or any component hosting our ServerElementComponent(like we
    have done in app.component.html file) is now able to bind to the element.
  ***
  ***
  - **@Output** is used to communicate from child component to parent component.
  - **@Input** is used to communicate from parent component to child component.
  ***
## Understanding ViewEncapsulation( Lec-70 )
  ***
  - server-element.component.ts
  ***
```
   syntax:
    
    encapsulation : value.Mode

    There are three modes of this property , they are:  
    1.Emulated(default behavior)
    2.Native(Supported by the browsers who support shadow DOM otherwise use None)
    3.None (overwrites the View Encapsulation styles)

    This property will be imoprted from @angular/core.
    
    We can overwrite the view Encapsulation property on styles by adding the above property,so that this component
    will not use the ViewEncapsulation of styles the other Components will still use it where we can see the strange 
    attributes,but now when we define any styles in this component(in the css file of this component) they will get applied globally.   
```
## What is LOCAL REFERENCE & how it can be passed in the TypeScript Code ??( Lec-71 )
  ***
  - cockpit.component.html
  - cockpit.component.ts
  ***
```
    We are using two way data binding to get the Server Name and the Content 
    there is another approach to get this server name and content
    since we only want to save or use the data at the point of time when we 
    click the button the [Add Server] or the [Add Server Blueprint] it would
    be enough to get the value at this point of time and there is
    another way we can achieve that is, to place a local reference 
    on the element.
```
```
  A local reference can be placed on any HTML element so not only on the InputElement, 
  on anything  we see on the template.
  
  SYNTAX: 
            #nameofanychoice
  
  This reference will hold the reference to the element, 
  not only the value just entered there but to the whole HTML element
  with all it's properties,we can see this if we pass this local reference 
  as an argument to the function(onAddServer) here.
  [we can use the local references everywhere in the template but not inside 
  the typeScript code only in the template but we do call the method here 
  inside the template so that we can use our local reference to pass it as an argument]
  /*
    THIS is the way how we pass the local reference to the TypeScript code.
  */
```
```
    Local reference gives us the element with all it's properties so we can 
    also output the value of the properties.

    And we can see that in the console by inspecting the code.
```