import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss'
})
export class HomeComponentComponent {
  modalVisible = false;
  modalImageSrc = '';
  modalImageAlt = '';
  public imagesHarmonizacao = [
    { src: '../../../assets/harmonizacao/1.jpeg', alt: 'Image 1' },
    { src: '../../../assets/harmonizacao/2.jpeg', alt: 'Image 2' },
    { src: '../../../assets/harmonizacao/3.jpeg', alt: 'Image 3' },
    { src: '../../../assets/harmonizacao/4.jpeg', alt: 'Image 4' },
    { src: '../../../assets/harmonizacao/5.jpeg', alt: 'Image 5' },
    { src: '../../../assets/harmonizacao/6.jpeg', alt: 'Image 6' },
    { src: '../../../assets/harmonizacao/7.jpeg', alt: 'Image 7' },
    { src: '../../../assets/harmonizacao/8.jpeg', alt: 'Image 8' },
    { src: '../../../assets/harmonizacao/9.jpeg', alt: 'Image 9' },
    { src: '../../../assets/harmonizacao/10.jpeg', alt: 'Image 10' },
    { src: '../../../assets/harmonizacao/11.jpeg', alt: 'Image 11' },
    { src: '../../../assets/harmonizacao/12.jpeg', alt: 'Image 12' },
    // Adicione mais imagens conforme necessário
  ];
  public imagesLentes = [
    { src: '../../../assets/lentes/1.jpeg', alt: 'Image 1' },
    { src: '../../../assets/lentes/2.jpeg', alt: 'Image 2' },
    { src: '../../../assets/lentes/3.jpeg', alt: 'Image 3' },
    { src: '../../../assets/lentes/4.jpeg', alt: 'Image 4' },
    { src: '../../../assets/lentes/5.jpeg', alt: 'Image 5' },
    { src: '../../../assets/lentes/6.jpeg', alt: 'Image 6' },
    { src: '../../../assets/lentes/7.jpeg', alt: 'Image 7' },
    { src: '../../../assets/lentes/8.jpeg', alt: 'Image 8' },
    { src: '../../../assets/lentes/9.jpeg', alt: 'Image 9' },
    { src: '../../../assets/lentes/10.jpeg', alt: 'Image 10' },
    { src: '../../../assets/lentes/11.jpeg', alt: 'Image 11' },
    { src: '../../../assets/lentes/12.jpeg', alt: 'Image 12' },
    // Adicione mais imagens conforme necessário
  ];
  openDialog(imageSrc: string, imageAlt: string): void {
    this.modalImageSrc = imageSrc;
    this.modalImageAlt = imageAlt;
    this.modalVisible = true;
  }

  closeModal(): void {
    this.modalVisible = false;
  }
}
