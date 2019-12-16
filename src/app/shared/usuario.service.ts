import { Usuario } from './usuario.model';
import { Subject } from 'rxjs';

export class UsuarioService {
    usuarios: Usuario[] = [
        new Usuario('maloza1', 'asdf1234', 1, true),
        new Usuario('mafran5', 'asdf1234', 2, true),
        new Usuario('miflo11', 'asdf1234', 3, true),
    ];
    loggeado = false;
    onStatusChange =  new Subject<boolean>();

    getUsuarios() {
        return this.usuarios;
    }

    validarUsuario(nombreUsuario: string, contrasena: string) {
        console.log(nombreUsuario + ' ' + contrasena);
        const user = this.getUsuarios().find((usuario) => {
            return usuario.nombreUsuario === nombreUsuario && usuario.contrasena === contrasena && usuario.activo === true;
        });
        if(user !== undefined){
            this.login();
            return user.rol;
        }else {
            this.logout();
            console.log('usuario o contraseña erróneos');
        }
        
    }

    login() {
        this.onStatusChange.next(true);
    }

    logout() {
        this.onStatusChange.next(false);
    }
}