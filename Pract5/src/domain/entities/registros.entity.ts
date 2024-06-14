import { IdiomasEntity } from "./idiomas.entity";
import { PalabrasEntity } from "./palabras.entity";

export class  RegistroEntity {

    constructor(
        public id: number,
        public fecha: Date,
        public hora: Date,
        public ubicacion: string,
        public idIdioma: number,
        public idPalabra: number,
        public deletreo?: string,
        public silabas?: string,
        public fonetica?: string,
        public idioma?: IdiomasEntity,
        public palabra?: PalabrasEntity
    ) {}

    public static fromObject(object: { [key: string]: any }):  RegistroEntity{
        const { id, fecha, hora, ubicacion, idIdioma, idPalabra, deletreo, silabas, fonetica } = object;

        if (!id) {
            throw new Error('Id is required');
        }

        if (!fecha) {
            throw new Error('fecha is required');
        }

        if (!hora) {
            throw new Error('hora is required');
        }

        if (!ubicacion) {
            throw new Error('ubicacion is required');
        }

        if (!idIdioma) {
            throw new Error('idIdioma is required');
        }

        if (!idPalabra) {
            throw new Error('idPalabra is required');
        }

        const newFecha = new Date(fecha);
        const newHora = new Date(hora);

        return new  RegistroEntity(
            id,
            newFecha,
            newHora,
            ubicacion,
            idIdioma,
            idPalabra,
            deletreo || undefined,
            silabas || undefined,
            fonetica || undefined
        );
    }
}
