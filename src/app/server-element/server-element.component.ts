import { 
    Component, 
    OnInit, 
    Input, 
    ViewEncapsulation, 
    OnChanges, 
    SimpleChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    ViewChild,
    ElementRef
  
  } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation : ViewEncapsulation.Emulated
  /*
    syntax:
    
    [encapsulation : value.Mode]

    This property will be imoprted from @angular/core.
    
    We can overwrite the view Encapsulation property on styles by adding the above property,so that this component
    will not use the ViewEncapsulation of styles the other Components will still use it where we can see the strange 
    attributes,but now when we define any styles in this component(in the css file of this component) they will get applied globally.
    
    There are three modes of this property , they are:  
    1.Emulated(default behavior)
    2.Native(Supported by the browsers who support shadow DOM otherwise use None)
    3.None (overwrites the View Encapsulation styles)
  */
})

export class ServerElementComponent implements 
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  /* By default All properties of components are accessible only inside these components and not from outside
  that is why we have to add a decorator to the property(Input),we have to explicit about which property 
  is bindable to other components.
  We add @Input to make a property bindable from outside */

  /* With this decorator(@Input) we are sucessfully exposing this property,so now any
  parent component or any component hosting our ServerElementComponent(like we
  have done in app.component.html file) is now able to bind to the element*/
 @Input('srvElement') element:{type: string, name: string, content: string};
 @Input() name: string; 
 @ViewChild('heading',{static:true}) header: ElementRef;
  constructor() {
    console.log('constructor called');
   }
   ngOnChanges(changes: SimpleChanges){
     /*
      This hook receives an argumnet & it's the only hook which does.
     */
     console.log('ngOnChanges called');
     console.log(changes);


   }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('TeXt Content'+this.header.nativeElement.textcontent);
  }
  ngDoCheck(){
    console.log('ngDoCheck called');
    /*
      It is called whenever angular checks for any changes.
    */
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit called');

  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called')
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }
}