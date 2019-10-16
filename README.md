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
### Getting access to template & DOM with @ViewChild(Lec-74)
  @ViewChild('serverContentInput',{static:true}) serverContentInput: ElementRef;
  ***
    - ViewChild is a decorator which will be used.
    - We need to import it from @angular/core.
    - Then we need to pass an argument in the selector(Refer-Lec 73).
    - We can pass the local reference here as a string in the argument.
    - If we don't want to pass the string but want to select the component,
      we could pass the component type there. 
   ***
### Projecting Content  into components with ng-content
#### Another way of passing data without using Property Binding

*** 
  - This is another way of passing data, which is used ,
  - When we have a complex HTML code like the above which we want to pass into a component from outside.
  - The above tag is pasted in the app.component.html file to use the ```<ng-content></ng-content>``` directive.
  - Everything which is placed between opening and cosing of our own component is lost by default, it is 
      simply removed from the DOM and angular will not take care about it but we can change this by the special
      directive call 'ng-content'.
  - ng-content looks like a component but it doesn't have it's own template.
  - we can add this directive in the template in the place where we want to render the content.
  - It serves as a hook we can place in our component to mark the place for angular,where it should 
      add any content it finds between opening and closing tag of the component(in this case it is 
      ```<app-server-element></app-server-element>``` located in the app.component.html file).
  - Now the app will look exactly the way it looked before but now technically something totally different happened
      here.
  - Now we add this via the ng-content hook and we have added between opening and closing tags therefore
      it will be projected into our component(i.e. app-server-element component).
    
***
### Lec-76 : Lifecycle
***
  - **ngOnchanges** : *Called after a bound input property changes.*
  - **ngOnInIt** : *Called once the component is initialized.* 
      - **ngOnInit** *runs after the constructor*
  - **ngDoCheck** : *Called during every change detection run.*
  - **ngAfterContentInit** : *Called after content(ng-content) has been projected into view.*
  - **ngAfterContentChecked** : *Called every time the projected content has been checked.*
  - **ngAfteViewInit** : *Called after the component's view(and child views) has been initialized.*
  - **ngAfterViewChecked** : *Called every time the view(and child views) have been checked.*
  - **ngOnDestroy** : *Called once the component is about to be destroyed.*
