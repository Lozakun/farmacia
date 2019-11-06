import { Maquilador } from './maquilador.model';

export class Proveedor {
    constructor(
        public idProveedor: string,
        public nombre: string,
        public telefono: string,
        public correo: string,
        public rfcProveedor: string,
        public direccionProveedor: string,
        public responsableSanitario: boolean,
        public maquiladores: Maquilador[],
        public idAvisoLicencia: string) {}
}
