export class UpdateidiomasDto {

  private constructor(
      public readonly id: number,
      public readonly descripcion?: string,
  ){}

  get values() {
      const returnObj: { [key: string]: any } = {};
      if (this.descripcion) {
          returnObj.descripcion = this.descripcion;
      }
      return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateidiomasDto?] {

      const { id, descripcion } = props;
      let newDescripcion = descripcion;

      if (!id || isNaN(Number(id))) {
          return ['id debe ser un número válido'];
      }

      if (descripcion) {
          newDescripcion = descripcion.trim().toUpperCase();
          if (newDescripcion !== descripcion) {
              return ['Se requieren mayúsculas para descripcion'];
          }
      }

      return [undefined, new UpdateidiomasDto(id, descripcion)];
  }
}
