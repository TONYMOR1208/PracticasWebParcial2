export class UpdateregistrosDto  {

  private constructor(
      public readonly id: number,
      public readonly fecha?: Date,
      public readonly hora?: Date,
      public readonly ubicacion?: string,
      public readonly idIdioma?: number,
      public readonly idPalabra?: number,
      public readonly deletreo?: string,
      public readonly silabas?: string,
      public readonly fonetica?: string,
  ){}

  get values() {
      const returnObj: { [key: string]: any } = {};
      if (this.fecha) {
          returnObj.fecha = this.fecha;
      }
      if (this.hora) {
          returnObj.hora = this.hora;
      }
      if (this.ubicacion) {
          returnObj.ubicacion = this.ubicacion;
      }
      if (this.idIdioma) {
          returnObj.idIdioma = this.idIdioma;
      }
      if (this.idPalabra) {
          returnObj.idPalabra = this.idPalabra;
      }
      if (this.deletreo) {
          returnObj.deletreo = this.deletreo;
      }
      if (this.silabas) {
          returnObj.silabas = this.silabas;
      }
      if (this.fonetica) {
          returnObj.fonetica = this.fonetica;
      }
      return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateregistrosDto ?] {

      const { id, fecha, hora, ubicacion, idIdioma, idPalabra, deletreo, silabas, fonetica } = props;

      if (!id || isNaN(Number(id))) {
          return ['id debe ser un número válido'];
      }

      return [undefined, new UpdateregistrosDto (id, fecha, hora, ubicacion, idIdioma, idPalabra, deletreo, silabas, fonetica)];
  }
}
