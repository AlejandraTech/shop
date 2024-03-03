import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../service/collection.service';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  articles: Article[] = [];
  allArticles: Article[] = [];
  pageSizeOptions: number[] = [5, 10, 20];
  pageSize: number = 5;
  searchName: string = '';
  currentPage: number = 1;

  constructor(private collectionService: CollectionService) { }

  ngOnInit(): void {
    this.loadArticles(); // Cargar los artículos al inicializar el componente
  }

  // Método para cargar los artículos desde el servicio
  loadArticles() {
    this.collectionService.getArticles().subscribe(articles => {
      this.allArticles = articles;
      this.updateDisplayedArticles();
    });
  }

  // Método para actualizar los artículos mostrados en la página actual
  updateDisplayedArticles() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.allArticles.length);
    this.articles = this.allArticles.slice(startIndex, endIndex);
  }

  // Método para cambiar a otra página
  onPageChange(page: number) {
    this.currentPage = page;
    this.updateDisplayedArticles();
  }

  // Método para cambiar el tamaño de página
  onPageSizeChange(event: any) {
    this.pageSize = event.target.value;
    this.currentPage = 1;
    this.updateDisplayedArticles();
  }

  // Método para manejar el cambio en el texto de búsqueda
  onSearchChange(event: any) {
    this.searchName = event.target.value;
    this.loadArticles();
  }
}
