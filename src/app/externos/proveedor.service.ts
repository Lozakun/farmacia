import { Proveedor } from './proveedor.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Maquilador } from './maquilador.model';

@Injectable({providedIn: 'root'})
export class ProveedorService {

    provTemporal: Proveedor;
    nuevoMaquilador = new Subject<Maquilador>();
    private proveedores: Proveedor[];

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
