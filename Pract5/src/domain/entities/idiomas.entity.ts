export class IdiomasEntity {
  constructor(
    public id: number,
    public descripcion: string,
  ) {}

  public static fromObject(object: { [key: string]: any }): IdiomasEntity {
    const { id, descripcion } = object;
    
    if (!id) {
      throw new Error('Id is required');
    }
    
    if (!descripcion) {
      throw new Error('descripcion is required');
    }

    const newDescripcion = descripcion.trim().toUpperCase();

    return new IdiomasEntity(id, newDescripcion);
  }
}
