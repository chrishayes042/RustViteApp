export interface Person extends Array<Person> {
  name: string;
  age: number;
  favorite_food?: string[];
}
