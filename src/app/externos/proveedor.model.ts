import { Maquilador } from './maquilador.model';

export class Proveedor {
    public idProveedor: number;
    constructor(
        public nombre: string,
        public telefono: string,
        public correo: string,
        public rfcProveedor: string,
        public direccionProveedor: string,
        public responsableSanitario: boolean,
        public maquiladores: Maquilador[],
        public idAvisoLicencia: string) {
            this.idProveedor = Math.floor(Math.random() * (999999 - 1)) + 1;
        }
}
