export interface Student {
  id?: number;
  name: string;
  age: number;
  mark: number;
  gender: 'male' | 'female';
  createdAt?: number;
  updatedAt?: number;
  city: string;
}
