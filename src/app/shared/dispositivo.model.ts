export class Dispositivo {
    constructor(
        public nombreDispositivo: string,
        public presentacion: string,
        public plantaProcesamiento: string,
        public idRegistroSanitario: string,
        public vigenciaRegistro: string,
        public idProrrogaRegSanitario: string,
        public idOficioCofepris: string
    ) {}
}
