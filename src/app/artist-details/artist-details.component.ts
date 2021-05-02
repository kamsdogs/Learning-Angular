import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  inputs: ['artist']
})
export class ArtistDetailsComponent implements OnInit {
  @Input() public artist: any;
  constructor() { }

  ngOnInit(): void {
  }

}
