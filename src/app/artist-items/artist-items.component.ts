import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artist-items',
  templateUrl: './artist-items.component.html',
  inputs: ['artist']
})
export class ArtistItemsComponent implements OnInit {
  @Input() public artist: any;
  constructor() { }

  ngOnInit(): void {
  }

}
