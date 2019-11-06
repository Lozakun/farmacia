import { Proveedor } from './proveedor.model';

export class ProveedorService {
    constructor(public proveedores: Proveedor[]) {}

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
