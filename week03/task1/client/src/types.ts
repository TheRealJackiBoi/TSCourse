export type Person = {
  id: string;
  name: string;
  email: string;
  age: number;
  address?: Address | null;
};

export type Address = {
  id?: string
  street: string
  houseNumber: string
  zip: number | null
  residents?: Person[]
}