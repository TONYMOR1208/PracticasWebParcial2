export class CreatepalabrasDto {

  private constructor(
      public readonly palabra: string,
      public readonly deletreo: string,
  ){}

  static create(props: { [key: string]: any }): [string?, CreatepalabrasDto?] {

      const { palabra, deletreo } = props;

      if (!palabra) return ['palabra es requerido', undefined];
      if (!deletreo) return ['deletreo es requerido', undefined];

      return [undefined, new CreatepalabrasDto(palabra, deletreo)];
  }
}
