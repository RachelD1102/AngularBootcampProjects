import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>

  ) { }

  @Input('appTimes') set render(times: number){
    this.viewContainer.clear();//first clear what in container

    for(let i = 0; i< times; i++){
      this.viewContainer.createEmbeddedView(this.templateRef, {
        //context object, all the properties on this object available for aliasing inside of 
        //our directive
        index: i,
      });
    }
  }

}
