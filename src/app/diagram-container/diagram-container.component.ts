import { Component, OnInit } from "@angular/core";
import { DomService } from "../dom.service";
import { CheckboxGroupComponent } from "../sidebar/items/checkbox.group.component";

@Component({
  selector: "app-diagram-container",
  templateUrl: "./diagram-container.component.html",
  styleUrls: ["./diagram-container.component.css"]
})
export class DiagramContainerComponent implements OnInit {
  constructor(private domService: DomService) {}

  ngOnInit() {}

  public onZoneDrop(event: any) {
    console.log("move OK");

    const component = this.domService.createComponent(CheckboxGroupComponent);
    this.domService.attachComponent(
      component,
      document.getElementById("diagramContainer")
    );
  }
}
