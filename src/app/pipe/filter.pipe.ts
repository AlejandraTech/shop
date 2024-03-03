import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  // Método de transformación que filtra elementos basados en un texto de búsqueda
  transform(items: any[], searchText: string): any[] {
    // Si no hay elementos, devuelve un array vacío
    if (!items) return [];
    // Si no hay texto de búsqueda, devuelve todos los elementos sin filtrar
    if (!searchText) return items;

    // Convierte el texto de búsqueda a minúsculas para hacer una comparación (así no afectan las mayusculas)
    searchText = searchText.toLowerCase();

    // Filtra los elementos según el texto de búsqueda en el nombre de cada elemento
    return items.filter(item => {
      return item.name.toLowerCase().includes(searchText);
    });
  }
}
