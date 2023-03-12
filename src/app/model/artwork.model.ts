import { ArtworkType } from "../enum/artworktype.enum";
import { Artist } from "./artist.model";
import { Image } from "./image.model";

export class Artwork{
 id: number;
 name: string;
 year: number;
 description: string;
 type: ArtworkType;
 mainImage: string;
 images: Image[];
 artist: Artist;

 constructor(
  id: number,
  name: string,
  year: number,
  description: string,
  type: ArtworkType,
  mainImage: string,
  images: Image[],
  artist: Artist
) {
  this.id = id;
  this.name = name;
  this.year = year;
  this.description = description;
  this.type = type;
  this.mainImage = mainImage;
  this.images = images;
  this.artist = artist;
}
}
