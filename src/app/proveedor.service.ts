import { Proveedor } from './shared/proveedor.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Maquilador } from './shared/maquilador.model';

@Injectable({providedIn: 'root'})
export class ProveedorService {

    provTemporal: Proveedor;
    nuevoMaquilador = new Subject<Maquilador>();
    public proveedores: Proveedor[] = [
        {
            idProveedor: 234243,
            nombre: 'Proveedor Prueba',
            telefono: '2343243',
            correo: 'correo@correo.com',
            rfcProveedor: 'ABC010101DEF',
            direccionProveedor: 'Dirección Conocida',
            responsableSanitario: 'Aplica',
            utilizaMaquiladores: 'Aplica',
            maquiladores: [
                {
                    nombre: 'Maquilador 1',
                    telefono: '23423434',
                    correo: 'correo@maquilador1.com',
                    rfcMaquilador: 'DEF010101ABC',
                    direccionMaquilador: 'Dirección Conocida',
                    idAvisoFuncionamientoMaquilador: '23423434',
                    responsableMaquilador: 'Aplica',
                    idResponsableMaquilador: 'Aplica' },
                    {
                        nombre: 'Maquilador 2',
                        telefono: '234343434',
                        correo: 'correo@maquilador2.com',
                        rfcMaquilador: 'FAS010101DLS',
                        direccionMaquilador: 'Dirección Conocida',
                        idAvisoFuncionamientoMaquilador: '23423434',
                        responsableMaquilador: 'No Aplica',
                        idResponsableMaquilador: 'Aplica' }
            ],
            medicamentos: [],
            suplementos: [],
            dispositivos: [],
            cosmeticos: [],
            idAvisoLicencia: '123435',
            aprobado: true
        },
        {
            idProveedor: 234243,
            nombre: 'Proveedor Prueba 2',
            telefono: '2343243',
            correo: 'correo@correo.com',
            rfcProveedor: 'ABC010101DEF',
            direccionProveedor: 'Dirección Conocida',
            responsableSanitario: 'Aplica',
            utilizaMaquiladores: 'Aplica',
            maquiladores: [
                {
                    nombre: 'Maquilador 1',
                    telefono: '23423434',
                    correo: 'correo@maquilador1.com',
                    rfcMaquilador: 'DEF010101ABC',
                    direccionMaquilador: 'Dirección Conocida',
                    idAvisoFuncionamientoMaquilador: '23423434',
                    responsableMaquilador: 'Aplica',
                    idResponsableMaquilador: 'Aplica' }
            ],
            medicamentos: [],
            suplementos: [],
            dispositivos: [],
            cosmeticos: [],
            idAvisoLicencia: '123435',
            aprobado: true
        }];

    constructor() {}

    getProveedores() {
        return this.proveedores;
    }

    addProveedor(prov: Proveedor) {
        this.proveedores.push(prov);
    }

    removeProveedor(provId: number) {
        this.proveedores.splice(provId);
    }

    getProveedor(provId: number) {
        return this.proveedores.find((prov) => provId === +prov.idProveedor);
    }

}
