import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA
} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TopMenuComponent } from "./top-menu/top-menu.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { PagetabComponent } from "./pagetab/pagetab.component";
import { DiagramContainerComponent } from "./diagram-container/diagram-container.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { DraggableDirective } from "./draggable.directive";
import { DroppableDirective } from "./droppable.directive";
import { DragService } from "./drag.service";
import { CheckboxGroupComponent } from "./sidebar/items/checkbox.group.component";
import { DomService } from "./dom.service";
import { FormatContainerComponent } from './format-container/format-container.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    TopMenuComponent,
    SidebarComponent,
    PagetabComponent,
    DiagramContainerComponent,
    ToolbarComponent,
    DraggableDirective,
    DroppableDirective,
    CheckboxGroupComponent,
    FormatContainerComponent
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [DragService, DomService],
  entryComponents: [CheckboxGroupComponent]
})
export class AppModule {}
