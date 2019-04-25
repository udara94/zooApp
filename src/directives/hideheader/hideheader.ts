import { Directive,Input,ElementRef,Renderer } from '@angular/core';

/**
 * Generated class for the HideheaderDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[hideheader]', // Attribute selector
  host:{
    '(ionScroll)':'onContentScroll($event)'
  }
})
export class HideheaderDirective {

  @Input("header") header:HTMLElement;
  headerHeight:any;
  scrollContent:any;
  constructor(public element:ElementRef, public renderer:Renderer) {
    console.log('Hello HideheaderDirective Directive');
  }

  ngOnInit(){
    this.headerHeight=this.header.clientHeight;
    this.renderer.setElementStyle(this.header,'webkitTransition','top 700ms');
    this.scrollContent=this.element.nativeElement.getElementsByClassName("scroll-content")[0];
    this.renderer.setElementStyle(this.scrollContent,'webkitTransition','margin-top 700ms');
  }
  onContentScroll(event){
    console.log(event);
    if(event.scrollTop>56){
      this.renderer.setElementStyle(this.header,'top','-56px');
      this.renderer.setElementStyle(this.scrollContent,"margin-top", "0px");
    }
    else{
      this.renderer.setElementStyle(this.header,'top','0px')
      this.renderer.setElementStyle(this.scrollContent,"margin-top", "56px");
    }
  }

}
