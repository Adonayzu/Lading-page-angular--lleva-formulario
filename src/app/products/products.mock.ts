export const productsList: Product[]= [
    {id: 1, name: 'Lavandina', price: 10, description: 'Botella de 1 Litro'},
    {id: 2, name: 'Detergente', price: 5, description: ' Dura 120 lavados'},
    {id: 3, name: 'Limpia Vidrios', price: 7, description: ' Tus vidrios transparentes'},
    {id: 4, name: 'Quita Grasa', price: 9},
    {id: 5, name: 'Perfumina', price: 2, description: ' el olor a campo mas realista'},



]

export interface Product {
    id: number | string;
    name: string;
    price: number;
    description?: string;


}