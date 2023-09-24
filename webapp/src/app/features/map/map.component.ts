import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  @ViewChild('map') mapRef!: ElementRef;
  @ViewChild('modal') modalRef!: ElementRef;
  @ViewChild('modal2') modalRef2!: ElementRef;

  map!: GoogleMap;

  user: { name: string } = { name: 'Alex' }

  locations: { street: string, area: string, distance: string }[] = [
    { street: 'Calea București', area: 'Brașov', distance: '3.3km' },
    { street: 'Calea București', area: 'Brașov', distance: '3.3km' },
    { street: 'Calea București', area: 'Brașov', distance: '3.3km' },
    { street: 'Calea București', area: 'Brașov', distance: '3.3km' },
    { street: 'Calea București', area: 'Brașov', distance: '3.3km' }
  ];

  waypoints: { x: number, y: number }[] = [
    { x: 45.642488, y: 25.592794}
  ]

  constructor() { }

  ngAfterViewInit(): void {
    this.createMap();
    }

  async createMap(): Promise<void> {
    this.map = await GoogleMap.create({
      id: 'map',
      apiKey: 'AIzaSyCu2LWsmBZnoLmYxnSm4vUUWL6t4DYHryA',
      element: this.mapRef.nativeElement,
      forceCreate: true,
      config: {
        center: {
          lat: 45.642488,
          lng: 25.592794
        },
        zoom: 11,
        streetViewControl: false,
        panControl: false,
        scaleControl: false,
        fullscreenControl: false,
        zoomControl: false,
        minZoom: 4
      },
    });

    for (let point of this.waypoints) {
      this.map.addMarker({
        coordinate: {
          lat: point.x,
          lng: point.y
        },
        iconUrl: '../../../assets/pin.png',
        iconSize: new google.maps.Size(46.8, 56.68),
        iconAnchor: new google.maps.Point(23.4, 56.68)
      });

      await this.map.setOnMarkerClickListener((event) => this.openWaypointModal(event.markerId));
    }
  }

  openWaypointModal(id: string): void {
    this.modalRef2.nativeElement.present();
    //this.modalRef.nativeElement.dismiss();
  }


  xxx(e: any) {
    console.log(e.detail.breakpoint)
    return e.detail.breakpoint;
  }

  x = false;

  test2(): boolean {
    return this.x;
  }
}
