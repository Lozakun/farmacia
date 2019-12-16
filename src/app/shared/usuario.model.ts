export class Usuario {
    constructor(
        public nombreUsuario: string,
        public contrasena: string,
        public rol: number,
        public activo: boolean) {}
}