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
    { street: 'Fundătura roșiorilor', area: 'Brașov', distance: '2.7km' },
    { street: 'Strada Păltiniș', area: 'Brașov', distance: '5.1km' }
  ];

  waypoints: { x: number, y: number, our: boolean }[] = [
    { x: 44.17798947641087, y: 28.535632780493092, our: false },
    { x: 44.27246355105068, y: 25.986804655493092, our: false },
    { x: 44.70352948202553, y: 26.261462858618092, our: false },
    { x: 45.53302022390235, y: 25.569324186743092, our: false },
    { x: 47.133426926154826, y: 27.502917936743092, our: false },
    { x: 46.668023892585026, y: 23.536853483618092, our: false },
    { x: 47.00621838244672, y: 23.745593717993092, our: false },
    { x: 47.66882837859688, y: 22.822742155493092, our: false },
    { x: 46.878706181355135, y: 26.261462858618092, our: false },
    { x: 44.27246355105068, y: 24.371814421118092, our: false },
    { x: 44.20949768119011, y: 26.085681608618092, our: false },
    { x: 44.107034423746505, y: 23.163318327368092, our: false },
    { x: 44.921757406876324, y: 21.811999967993092, our: false },
    { x: 45.91649904996536, y: 21.086902311743092, our: false },
    { x: 45.35573592039365, y: 22.899646452368092, our: false },
    { x: 46.23658730698398, y: 24.360828092993092, our: false },
    { x: 45.54071559924889, y: 25.690173796118092, our: false },
    { x: 46.95375013894622, y: 25.316638639868092, our: false },
    { x: 47.72798166967436, y: 25.800037077368092, our: false },
    { x: 46.03310045483981, y: 20.957881135172627, our: true },
    { x: 45.311494112670275, y: 21.836787385172627, our: true },
    { x: 44.95497646974888, y: 22.298213166422627, our: true },
    { x: 45.956776043195056, y: 22.056513947672627, our: true },
    { x: 47.291765631133494, y: 22.649212073476995, our: true },
    { x: 47.440588573270055, y: 23.484173010976995, our: true },
    { x: 47.32156381170443, y: 24.648723792226995, our: true },
    { x: 47.48515358806863, y: 25.703411292226995, our: true },
    { x: 47.707412122733516, y: 26.494426917226995, our: true },
    { x: 47.32156381170443, y: 27.043743323476995, our: true },
    { x: 46.79766931660977, y: 27.571087073476995, our: true },
    { x: 45.59622272084711, y: 27.571087073476995, our: true },
    { x: 45.05553503642969, y: 28.515911292226995, our: true },
    { x: 44.58798069848149, y: 28.274212073476995, our: true },
    { x: 44.41559409773676, y: 27.153606604726995, our: true },
    { x: 44.94134417082365, y: 23.93937659158291, our: true },
    { x: 44.59816053599369, y: 25.23576331033291, our: true },
    { x: 45.11217130326498, y: 25.58732581033291, our: true },
    { x: 45.313400662817074, y: 24.84025549783291, our: true },
    { x: 45.23608901679202, y: 23.91740393533291, our: true },
    { x: 45.7597313584259, y: 23.258224247832914, our: true },
    { x: 46.00446648597287, y: 24.57658362283291, our: true },
    { x: 45.71372349591117, y: 25.76310706033291, our: true },
    { x: 46.308869623759065, y: 25.82902502908291, our: true },
    { x: 45.06563264368654, y: 26.18058752908291, our: true },
    { x: 46.536067128740385, y: 25.69718909158291, our: true },
    { x: 47.017591925503666, y: 25.74113440408291, our: true },
    { x: 45.91281714774772, y: 23.58781409158291, our: true },
    { x: 45.1896514726183, y: 22.972579716582914, our: true },
    { x: 45.1896514726183, y: 22.862716435332914, our: true },
    { x: 45.74439961605535, y: 21.742110966582914, our: true },
    { x: 45.989202123253435, y: 21.698165654082914, our: true },
    { x: 46.2177254871958, y: 22.005782841582914, our: true },
    { x: 46.32404558177577, y: 22.752853154082914, our: true },
    { x: 45.89752751974283, y: 23.214278935332914, our: true },
    { x: 45.498518899221466, y: 24.53263831033291, our: true },
    { x: 46.490703368816426, y: 25.30168127908291, our: true },
    { x: 47.152245160112145, y: 24.24699377908291, our: true },
    { x: 44.121333137255014, y: 23.340822413418433, our: true },
    { x: 43.987106707933734, y: 24.516359522793433, our: true },
    { x: 44.67863649312701, y: 24.120851710293433, our: true },
    { x: 44.10555758383538, y: 25.527101710293433, our: true },
    { x: 44.46732975981419, y: 25.109621241543433, our: true },
    { x: 44.34960539212011, y: 26.548830225918433, our: true },
    { x: 44.811287568956764, y: 26.548830225918433, our: true },
    { x: 45.16095343610299, y: 27.515627100918433, our: true },
    { x: 44.01871676770063, y: 28.515382960293433, our: true },
    { x: 45.88448592004225, y: 26.570802882168433, our: true },
    { x: 45.39287907162297, y: 27.164064600918433, our: true },
    { x: 46.58361675333946, y: 27.614504054043433, our: true },
    { x: 46.37178060682175, y: 26.812502100918433, our: true },
    { x: 47.10960062728034, y: 26.384035304043433, our: true },
    { x: 46.98233516027227, y: 24.714113429043433, our: true },
    { x: 46.636446944992834, y: 23.879152491543433, our: true },
    { x: 47.13950132067226, y: 22.945314600918433, our: true },
    { x: 45.84623444826221, y: 22.626711085293433, our: true },
    { x: 46.92984347257363, y: 22.077394679043433, our: true },
    { x: 45.20741439778774, y: 24.736086085293433, our: true },
    { x: 45.953272243659676, y: 25.142580225918433, our: true },
    { x: 45.83858099541525, y: 26.823488429043433, our: true },
    { x: 45.83858099541525, y: 23.615480616543433, our: true },
    { x: 45.11445455618843, y: 25.043703272793433, our: true },
    { x: 44.87360627753285, y: 24.120851710293433, our: true },
    { x: 44.097668227939565, y: 23.384767725918433, our: true },
    { x: 43.86841898776306, y: 24.406496241543433, our: true },
    { x: 43.75743012846, y: 25.428224757168433, our: true },
    { x: 44.31031128370866, y: 25.219484522793433, our: true },
    { x: 44.23164409310881, y: 23.395754054043433, our: true },
    { x: 44.21589801968087, y: 24.791017725918433, our: true },
    { x: 44.826873565804256, y: 23.604494288418433, our: true },
    {x: 47.01877787330268, y: 28.87115097682857, our: true }
  ];

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
        iconUrl: point.our ? '../../../assets/pin.png' : '../../../assets/pin2.png',
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

  addPoint(e: any) {
    console.log(e)
  }
}
