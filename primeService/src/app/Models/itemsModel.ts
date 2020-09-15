export class Items2{
   public _about?: string;
   public accessURL?: string;
   public byteSize?: number;
   public format?: string;
   public title?: string;
   public type?: string;

  constructor(
    _about?: string,
    accessURL?: string,
    byteSize?: number,
    format?: string,
    title?: string,
    type?: string
  ){
    this._about = _about;
    this.accessURL = accessURL;
    this.byteSize = byteSize;
    this.format = format;
    this.title = title;
    this.type = type;
  }
}
