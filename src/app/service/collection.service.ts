import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor() { }

  // Método para obtener una lista de artículos simulada
  getArticles(): Observable<Article[]> {
    // Crear una lista vacía para almacenar los artículos
    const articles: Article[] = [];
    // Generar 100 artículos con nombres y descripciones aleatorios y precios aleatorios
    for (let i = 0; i < 100; i++) {
      articles.push(new Article(`Article ${i}`, `Description ${i}`, Math.random() * 100));
    }
    // Convertir la lista de artículos en un observable y devolverlo
    return of(articles);
  }
}
