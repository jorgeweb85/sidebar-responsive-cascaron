import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  ngAfterViewInit(): void{

    const contenedor_vista = document.querySelector('#contenedor-vista-sistema');
    const side_menu = document.querySelector("#menu__side")
      //Sie le ancho de la pagina es menor a 760px , ocultara el menu al recargar la pagina
    if( window.innerWidth < 760){

 ;
    /*   console.log(contenedor_vista); */

      contenedor_vista?.classList.add('contenedor-vista-sistema_move');
      side_menu?.classList.add("menu__side_move");
    }

    //hAciendo el menu responsive

      window.addEventListener("resize", function(){

        if(this.window.innerWidth > 760){

          contenedor_vista?.classList.remove('contenedor-vista-sistema_move');
          side_menu?.classList.remove("menu__side_move");
        }

        if(this.window.innerWidth < 760){

          contenedor_vista?.classList.add('contenedor-vista-sistema_move');
          side_menu?.classList.add("menu__side_move");
        }
      });
  }

 

  Togglemenu_side(){

    const contenedor_vista = document.querySelector('#contenedor-vista-sistema');
    const side_menu = document.querySelector("#menu__side");

    console.log(contenedor_vista);

    contenedor_vista?.classList.toggle("contenedor-vista-sistema_move");
    side_menu?.classList.toggle("menu__side_move");
  }


}
