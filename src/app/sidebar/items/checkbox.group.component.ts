import { Component, OnInit } from "@angular/core";
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "checkboxgroup",
  templateUrl: "./checkbox.group.component.html"
})
export class CheckboxGroupComponent implements OnInit {
  private pid: string;
  private cbname: string;
  constructor() {
    this.pid = uuidv4();
    this.cbname = this.pid + "_checkbox";
  }

  ngOnInit() {}
}
