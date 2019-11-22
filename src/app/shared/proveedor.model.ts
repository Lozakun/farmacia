import { Maquilador } from './maquilador.model';
import { Medicamento } from './medicamento.model';
import { Suplemento } from './suplemento.model';
import { Dispositivo } from './dispositivo.model';
import { Cosmetico } from './cosmetico.model';

export class Proveedor {
    public idProveedor: number;
    constructor(
        public nombre: string,
        public telefono: string,
        public correo: string,
        public rfcProveedor: string,
        public direccionProveedor: string,
        public responsableSanitario: string,
        public utilizaMaquiladores: string,
        public maquiladores: Maquilador[],
        public medicamentos: Medicamento[],
        public suplementos: Suplemento[],
        public dispositivos: Dispositivo[],
        public cosmeticos: Cosmetico[],
        public idAvisoLicencia: string,
        public aprobado: boolean) {
            this.idProveedor = Math.floor(Math.random() * (999999 - 1)) + 1;
        }
}
