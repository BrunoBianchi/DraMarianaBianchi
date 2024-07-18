import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent implements OnInit {
  ngOnInit(): void {
    window.location.href = 'https://api.whatsapp.com/send?l=pt-BR&phone=5511940239043&text=Ol%C3%A1+Dra.+Mariane!+Gostaria+de+fazer+um+agendamento.'
  }
}
