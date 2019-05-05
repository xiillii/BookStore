export class Book {

  constructor(
    public id?: number,
    public genre?: string,
    public author?: string,
    public name?: string,
    public stars?: number,
    public synopsis?: string,
    public price?: number,
    public coverImage?: string
  ) { }
}
