declare  namespace data {
  export interface forecast {
    id: number; 
    data: Date; 
    temperature: number; 
    precipitations: number;
  }
}