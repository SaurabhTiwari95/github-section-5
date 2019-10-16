import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"]
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  //newServerName = "";
  //We don't need the newServerName because we are using the local reference approach.
  //newServerContent = "";
  @ViewChild("serverContentInput", { static: true })
  serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() { }
  onAddServer(serverNameInput: HTMLInputElement) {
    // console.log(serverNameInput.value);
    console.log(this.serverContentInput);
    // by logging this we can analyze this,what it actually means
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      //  serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated .emit({
    serverName: serverNameInput.value,
    //serverContent: this.newServerContent
    serverContent: this.serverContentInput.nativeElement.value

    });
  }
}
