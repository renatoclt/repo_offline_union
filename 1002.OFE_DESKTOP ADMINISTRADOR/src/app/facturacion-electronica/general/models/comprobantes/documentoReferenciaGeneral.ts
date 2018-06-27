export class DocumentoReferenciaGeneral {
    public seIdocreferencia: number;
    public inIdocOrigen: string;
    public seIdocDestino: string;
    public chTipoDocOri: string;
    public chTipoDocDes: string;
    public chSerieDest: string;
    public chCorrDest: string;
    public daFecEmiDest: string;
    public nuTotImpDest: number;
    public nuTotImpAux: number;
    public nuTotPorAux: number;
    public vcTdocOriDesc: string;
    public vcTdocDesDesc: string;
    public deTipoCambio: string;
    public vcMonedaDestino: string;
    public deTotMoneDes: number;
    public vcPolizaFactura: number;
    public deAnticipo: number;
    public vcAuxiliar1: string;
    public vcAuxiliar2: string;
    public vcUsuCreacion: string;
    public vcUsuModifica: string;
    public tsFecCreacion: number;
    public tsFecModifica: number;
    public inEstado: number;
    constructor() {
        this.seIdocreferencia = -1;
        this.inIdocOrigen = '';
        this.seIdocDestino = '';
        this.chTipoDocOri = '';
        this.chTipoDocDes = '';
        this.chSerieDest = '';
        this.chCorrDest = '';
        this.daFecEmiDest = '';
        this.nuTotImpDest = -1
        this.nuTotImpAux = -1
        this.nuTotPorAux = -1
        this.vcTdocOriDesc = '';
        this.vcTdocDesDesc = '';
        this.deTipoCambio = '';
        this.vcMonedaDestino = '';
        this.deTotMoneDes = -1;
        this.vcPolizaFactura = -1;
        this.deAnticipo = -1;
        this.vcAuxiliar1 = '';
        this.vcAuxiliar2 = '';
        this.vcUsuCreacion = '';
        this.vcUsuModifica = '';
        this.tsFecCreacion = -1;
        this.tsFecModifica = -1;
        this.inEstado = -1;
    }
}