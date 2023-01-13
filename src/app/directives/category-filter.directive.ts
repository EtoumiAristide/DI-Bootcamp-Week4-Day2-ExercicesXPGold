import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCategoryFilter]'

})

export class CategoryFilterDirective {
  hasview: boolean = true;
  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set appCategoryFilter(data: any) {

    if (data.selectedCategorie === '') { //Initialisation
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);

    } else if (data.selectedCategorie === data.actualCategorie) {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);

    } else {
      this.viewContainer.clear();
      this.hasview = false;
    }
  }

}
