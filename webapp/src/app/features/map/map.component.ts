import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { AfterViewInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  @ViewChild('map') mapRef!: ElementRef;
  @ViewChild('modal') modalRef!: ElementRef;

  map!: GoogleMap;

  user: { name: string } = { name: 'Alex' }

  locations: { street: string, area: string, distance: string }[] = [
    { street: 'Calea București', area: 'Brașov', distance: '3.3km' },
    { street: 'Calea București', area: 'Brașov', distance: '3.3km' },
    { street: 'Calea București', area: 'Brașov', distance: '3.3km' },
    { street: 'Calea București', area: 'Brașov', distance: '3.3km' },
    { street: 'Calea București', area: 'Brașov', distance: '3.3km' },
    { street: 'Calea București', area: 'Brașov', distance: '3.3km' },
    { street: 'Calea București', area: 'Brașov', distance: '3.3km' },
    { street: 'Calea București', area: 'Brașov', distance: '3.3km' },
    { street: 'Calea București', area: 'Brașov', distance: '3.3km' },
    { street: 'Calea București', area: 'Brașov', distance: '3.3km' },
    { street: 'Calea București', area: 'Brașov', distance: '3.3km' },
    { street: 'Calea București', area: 'Brașov', distance: '3.3km' },
    { street: 'Calea București', area: 'Brașov', distance: '3.3km' },
    { street: 'Calea București', area: 'Brașov', distance: '3.3km' },
    { street: 'Calea București', area: 'Brașov', distance: '3.3km' },
    { street: 'Calea București', area: 'Brașov', distance: '3.3km' }
  ];

  constructor(private _menuCtrl: MenuController) { }

  ngAfterViewInit(): void {
    this.createMap();

    this._menuCtrl.enable(true);
  }

  async createMap(): Promise<void> {
    this.map = await GoogleMap.create({
      id: 'map',
      apiKey: 'AIzaSyCu2LWsmBZnoLmYxnSm4vUUWL6t4DYHryA',
      element: this.mapRef.nativeElement,
      forceCreate: true,
      config: {
        center: {
          lat: 33.6,
          lng: -117.9
        },
        zoom: 8,
        streetViewControl: false,
        panControl: false,
        scaleControl: false,
        fullscreenControl: false,
        zoomControl: false,
      },
    });
  }

  openMenu(): void {
    console.log(333)
    this._menuCtrl.toggle('menu');
  }
}
