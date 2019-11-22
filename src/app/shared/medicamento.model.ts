export class Medicamento {
    constructor(
        public nombre: string,
        public presentacion: string,
        public principioActivo: string,
        public vigenciaRegistro: Date,
        public plantaProcesamiento: string,
        public idRegistroSanitario: string,
        public idProrrogaRegSanitario: string,
        public idConclusionEstabilidad: string,
        public idRevisionAnual: string
    ) {}
}
