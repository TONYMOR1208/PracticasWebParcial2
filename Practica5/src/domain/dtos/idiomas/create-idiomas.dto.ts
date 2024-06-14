

  export class CreateidiomasDto {

    private constructor(
        public readonly descripcion: string,
    ){}

    static create(props: { [key: string]: any }): [string?, CreateidiomasDto?] {

        const { descripcion } = props;

        if (!descripcion) return ['descripcion es requerido', undefined];

        return [undefined, new CreateidiomasDto(descripcion)];
    }
}
