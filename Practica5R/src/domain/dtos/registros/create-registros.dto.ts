export class CreateregistrosDto {

  private constructor(
      public readonly fecha: Date,
      public readonly hora: Date,
      public readonly ubicacion: string,
      public readonly idIdioma: number,
      public readonly idPalabra: number,
      public readonly deletreo?: string,
      public readonly silabas?: string,
      public readonly fonetica?: string,
  ){}

  static create(props: { [key: string]: any }): [string?, CreateregistrosDto?] {

      const { fecha, hora, ubicacion, idIdioma, idPalabra, deletreo, silabas, fonetica } = props;

      if (!fecha) return ['fecha es requerida', undefined];
      if (!hora) return ['hora es requerida', undefined];
      if (!ubicacion) return ['ubicacion es requerida', undefined];
      if (idIdioma == null) return ['idIdioma es requerido', undefined]; // verificar null y undefined
      if (idPalabra == null) return ['idPalabra es requerido', undefined]; // verificar null y undefined

      return [undefined, new CreateregistrosDto(fecha, hora, ubicacion, idIdioma, idPalabra, deletreo, silabas, fonetica)];
  }
}
