export class UpdatepalabrasDto {

  private constructor(
      public readonly id: number,
      public readonly palabra?: string,
      public readonly deletreo?: string,
  ){}

  get values() {
      const returnObj: { [key: string]: any } = {};
      if (this.palabra) {
          returnObj.palabra = this.palabra;
      }
      if (this.deletreo) {
          returnObj.deletreo = this.deletreo;
      }
      return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdatepalabrasDto?] {

      const { id, palabra, deletreo } = props;
      let newPalabra = palabra;
      let newDeletreo = deletreo;

      if (!id || isNaN(Number(id))) {
          return ['id debe ser un número válido'];
      }

      if (palabra) {
          newPalabra = palabra.trim().toUpperCase();
          if (newPalabra !== palabra) {
              return ['Se requieren mayúsculas para palabra'];
          }
      }

      if (deletreo) {
          newDeletreo = deletreo.trim().toUpperCase();
          if (newDeletreo !== deletreo) {
              return ['Se requieren mayúsculas para deletreo'];
          }
      }

      return [undefined, new UpdatepalabrasDto(id, palabra, deletreo)];
  }
}
