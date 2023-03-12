import { Sponsor } from "./sponsor.model";

export class Exhibition {
  id: number;
  name: string;
  description: string;
  sponsor!: Sponsor

  constructor(
   id: number,
   name: string,
   description: string
 ) {
   this.id = id;
   this.name = name;
   this.description = description;
 }
}
