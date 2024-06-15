export class PalabrasEntity {

  constructor(
    public id: number,
    public palabra: string,
    public deletreo: string,
  ) {}

  public static fromObject(object: { [key: string]: any }): PalabrasEntity {
      const { id, palabra, deletreo } = object;
      
      if (!id) {
          throw new Error('Id is required');
      }
      
      if (!palabra) {
          throw new Error('palabra is required');
      }

      const newPalabra = palabra.trim();

      return new PalabrasEntity(id, newPalabra, deletreo || '');
  }
}
