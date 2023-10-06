import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit, AfterViewInit, AfterContentInit {
    @Input() label!: string;

    @ViewChild('labelContainer') labelContainer!: ElementRef<HTMLDivElement>;
    @ContentChild('image', { read: ElementRef<HTMLImageElement> }) image!: ElementRef<HTMLImageElement>;

    constructor() {
      console.groupCollapsed("%c<----------------------Constructor--------------------->", "background: #222; color: #bada55");
      console.log('@Input :' , this.label);
      console.log('@ViewChild : ' , this.labelContainer);
      console.log('@ContentChild : ',this.image);
      console.groupEnd();
    }

    ngOnInit(): void {
      console.groupCollapsed("%c<----------------------ngOnInit--------------------->", "background: #FF5722; color: #FFF");
      console.log('@Input :' , this.label);
      console.log('@ViewChild : ' , this.labelContainer);
      console.log('@ContentChild : ',this.image);
      console.groupEnd();
    }

    ngAfterViewInit(): void {
      console.groupCollapsed("%c<----------------------ngAfterViewInit--------------------->", "background: #9cebce; color: #3f51b5");
      console.log('@Input :' , this.label);
      console.log('@ViewChild : ' , this.labelContainer);
      console.log('@ContentChild : ',this.image);
      console.groupEnd();
    }
    
    ngAfterContentInit(): void {
      console.groupCollapsed("%c<----------------------ngAfterContentInit--------------------->", "background: #03a9f4; color: white");
      console.log('@Input :' , this.label);
      console.log('@ViewChild : ' , this.labelContainer);
      console.log('@ContentChild : ' ,this.image);
      console.groupEnd();
    }
}
