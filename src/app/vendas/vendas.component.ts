import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent {
  OfertasEspeciais = [
    { produto: 'Camiseta 3 São Paulo 2022', preco:'R$250,00'},
    { produto: 'Camiseta 1 São Paulo 2023', preco:'R$320,00', detalhes: 'Camiseta do time Campeão da Copa do Brasil de 2023' },
  ];

  // Estrutura de dados para marcas, modelos e preços de celulares
  celulares = [
    {
      marca: 'SPFC',
      modelos: [
        { nome: 'Camisa 2022', preco: '$250,00' },
        { nome: 'Camisa 2023', preco: '$320,00' }, 
      ]
    },
  ];

  MarcaSelecionada: any;
  ModeloSelecionado: any;
  modelos: any;


  updateListaModelo() {
    // Lógica para atualizar a lista de modelos com base na marca selecionada
    const MarcaSelecionada = this.MarcaSelecionada;
    if (MarcaSelecionada) {
      this.modelos = MarcaSelecionada.modelos;
    } else {
      this.modelos = [];
    }
  }


  DesejoUsuario: string = '';
  desejos: string[] = []; // Array para armazenar os desejos dos clientes

  AdicionarDesejo() {
    if (this.DesejoUsuario.trim() !== '') {
      this.desejos.push(this.DesejoUsuario);
      this.DesejoUsuario = '';
    }
  }
  LimparListaDesejo() {
    this.DesejoUsuario = ''; // Limpa o campo de entrada
  }

  LimparDesejos() {
    this.desejos = []; // Limpa a lista de desejos
  }
}

