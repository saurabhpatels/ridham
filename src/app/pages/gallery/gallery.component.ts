import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

   HEROES = [
    { name: 'https://firebasestorage.googleapis.com/v0/b/login-349e8.appspot.com/o/1555074252164_michael-d?alt=media&token=41227519-6d20-43a2-8e1a-e46e773c238d'},
    { name: 'https://firebasestorage.googleapis.com/v0/b/login-349e8.appspot.com/o/1555074252164_michael-d?alt=media&token=41227519-6d20-43a2-8e1a-e46e773c238d'},
    { name: 'https://firebasestorage.googleapis.com/v0/b/login-349e8.appspot.com/o/1555074252164_michael-d?alt=media&token=41227519-6d20-43a2-8e1a-e46e773c238d'},
    { name: 'https://firebasestorage.googleapis.com/v0/b/login-349e8.appspot.com/o/1555074252164_michael-d?alt=media&token=41227519-6d20-43a2-8e1a-e46e773c238d'},
    { name: 'https://firebasestorage.googleapis.com/v0/b/login-349e8.appspot.com/o/1555073434414_matheus-f?alt=media&token=ec3f6fde-59a9-494c-848f-88ec557c6215'},
     { name: 'https://firebasestorage.googleapis.com/v0/b/login-349e8.appspot.com/o/1555074252164_michael-d?alt=media&token=41227519-6d20-43a2-8e1a-e46e773c238d'},
     { name: 'https://firebasestorage.googleapis.com/v0/b/login-349e8.appspot.com/o/1555074252164_michael-d?alt=media&token=41227519-6d20-43a2-8e1a-e46e773c238d'},
     { name: 'https://firebasestorage.googleapis.com/v0/b/login-349e8.appspot.com/o/1555074252164_michael-d?alt=media&token=41227519-6d20-43a2-8e1a-e46e773c238d'},
     { name: 'https://firebasestorage.googleapis.com/v0/b/login-349e8.appspot.com/o/1555074252164_michael-d?alt=media&token=41227519-6d20-43a2-8e1a-e46e773c238d'},
     { name: 'https://firebasestorage.googleapis.com/v0/b/login-349e8.appspot.com/o/1555073434414_matheus-f?alt=media&token=ec3f6fde-59a9-494c-848f-88ec557c6215'},
     { name: 'https://firebasestorage.googleapis.com/v0/b/login-349e8.appspot.com/o/1555074252164_michael-d?alt=media&token=41227519-6d20-43a2-8e1a-e46e773c238d'},
     { name: 'https://firebasestorage.googleapis.com/v0/b/login-349e8.appspot.com/o/1555074252164_michael-d?alt=media&token=41227519-6d20-43a2-8e1a-e46e773c238d'},
     { name: 'https://firebasestorage.googleapis.com/v0/b/login-349e8.appspot.com/o/1555074252164_michael-d?alt=media&token=41227519-6d20-43a2-8e1a-e46e773c238d'},
     { name: 'https://firebasestorage.googleapis.com/v0/b/login-349e8.appspot.com/o/1555074252164_michael-d?alt=media&token=41227519-6d20-43a2-8e1a-e46e773c238d'},
     { name: 'https://firebasestorage.googleapis.com/v0/b/login-349e8.appspot.com/o/1555073434414_matheus-f?alt=media&token=ec3f6fde-59a9-494c-848f-88ec557c6215'},
     { name: 'https://firebasestorage.googleapis.com/v0/b/login-349e8.appspot.com/o/1555074252164_michael-d?alt=media&token=41227519-6d20-43a2-8e1a-e46e773c238d'},
     { name: 'https://firebasestorage.googleapis.com/v0/b/login-349e8.appspot.com/o/1555074252164_michael-d?alt=media&token=41227519-6d20-43a2-8e1a-e46e773c238d'},
     { name: 'https://firebasestorage.googleapis.com/v0/b/login-349e8.appspot.com/o/1555074252164_michael-d?alt=media&token=41227519-6d20-43a2-8e1a-e46e773c238d'},
     { name: 'https://firebasestorage.googleapis.com/v0/b/login-349e8.appspot.com/o/1555074252164_michael-d?alt=media&token=41227519-6d20-43a2-8e1a-e46e773c238d'},
     { name: 'https://firebasestorage.googleapis.com/v0/b/login-349e8.appspot.com/o/1555073434414_matheus-f?alt=media&token=ec3f6fde-59a9-494c-848f-88ec557c6215'},
     { name: 'https://firebasestorage.googleapis.com/v0/b/login-349e8.appspot.com/o/1555074252164_michael-d?alt=media&token=41227519-6d20-43a2-8e1a-e46e773c238d'},
     { name: 'https://firebasestorage.googleapis.com/v0/b/login-349e8.appspot.com/o/1555074252164_michael-d?alt=media&token=41227519-6d20-43a2-8e1a-e46e773c238d'},
     { name: 'https://firebasestorage.googleapis.com/v0/b/login-349e8.appspot.com/o/1555074252164_michael-d?alt=media&token=41227519-6d20-43a2-8e1a-e46e773c238d'},
     { name: 'https://firebasestorage.googleapis.com/v0/b/login-349e8.appspot.com/o/1555074252164_michael-d?alt=media&token=41227519-6d20-43a2-8e1a-e46e773c238d'},
     { name: 'https://firebasestorage.googleapis.com/v0/b/login-349e8.appspot.com/o/1555073434414_matheus-f?alt=media&token=ec3f6fde-59a9-494c-848f-88ec557c6215'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
