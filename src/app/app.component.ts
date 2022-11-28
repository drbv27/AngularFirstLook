import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sesion39-angular';

  usuarios = ['Alejandro', 'Guillermo', 'Juan']

  addItem(item){
    this.usuarios.push(item)
  }

  deleteItem(index: number) {
      this.usuarios.splice(index, 1)
  }


  products = [
    {
      id: '1',
      image: 'https://image.freepik.com/free-vector/polo-shirt_35735-249.jpg',
      title: 'Camiseta',
      price: 80000,
      description: 'Camiseta tipo polo...'
    },
    {
      id: '2',
      image: 'https://image.freepik.com/free-vector/polo-shirt_35735-249.jpg',
      title: 'Camiseta 2',
      price: 50000,
      description: 'Camiseta tipo polo...2 '
    },
  ]



}
