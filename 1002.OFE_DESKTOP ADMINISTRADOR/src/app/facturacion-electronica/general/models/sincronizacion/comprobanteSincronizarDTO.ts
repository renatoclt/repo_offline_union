
import { entidadCompradora } from "./entidadCompradoraDTO";
import { parametros } from "./parametrosDTO";
import { entidadProveedora } from "./entidadproveedoraDTO";
import { eventos } from "./eventosDTO";

export class comprobanteSincronizarDTO{
    inIdcomprobantepago: any;
    vcSerie: any;
    vcCorrelativo: any;
    inIdorganizacionproveedora: any;
    vcOrgproveedoraDocumento: any;
    vcOrgproveedoraDenominacion: any;
    vcOrgproveedoraNomcomerciala: any;
    vcOrgproveedoraDirfiscal: any;
    vcOrgproveedoraCorreo: any;
    vcOrgcompradoraNomcomercial: any;
    inIdorganizacioncompradora: any;
    vcOrgcompradoraDenominacio: any;
    vcOrgcompradoraDocumento: any;
    vcOrgcompradoraDirfiscal: any;
    vcOrgcompradoraCorreo: any;
    inIdarchivoPdf: any;
    inIdarchivoXml: any;
    inIdarchivoCdr: any;
    vcArchivopdfUbicacion: any;
    vcArchivoxmlUbicacion: any;
    vcArchivocdrUbicacion: any;
    vcParamTicket: any;
    tsParamFechabaja: any;
    inIdusuarioproveedor:any;
    inIdusuariocomprador: any;
    inIdtransportista: any;
    vcTransportistaDocumento: any;
    vcTransportistaDenominacion: any;
    chEstadocomprobantepago: any;
    chFlagplazopago: any;
    chFlagregistroeliminado:any;
    chFlagorigencomprobantepago: any;
    chFlagorigencreacion: any;
    inIdguia:any;
    inIdoc:any;
    inIdusuariocreacion: any;
    inIdusuariomodificacion: any;
    inIdorganizacioncreacion: any;
    inIdorganizacionmodificacion: any;
    chMonedacomprobantepago: any;
    tsFechaprogpagocomprobantepag: any;
    tsFechapagocomprobantepago: any;
    tsFechacreacion: any;
    tsFecharegistro: any;
    tsFechaemision: any;
    tsFecharecepcioncomprobantepa: any;
    tsFechavencimiento: any;
    tsFechaenvio: any;
    tsFechacambioestado: any;
    vcObscomprobantepago: any;
    vcObspagocomprobantepago: any;
    vcCondicionpago: any;
    chTiempoplazo: any;
    vcDocumentopago: any;
    vcDocumentosap: any;
    vcFormapago: any;
    vcTipocomprobante: any;
    chEstadocomprobantepagocomp: any;
    inVersion: any;
    vcNumoc: any;
    vcNumguia: any;
    vcMontocomprobantepago: any;
    vcLogo: any;
    vcFirma: any;
    vcPagotipodocumento: any;
    vcPagonrodocumento: any;
    vcPagomoneda: any;
    vcPagobanco: any;
    vcDctotipodocumento: any;
    vcDctonrodocumento: any;
    vcDctomoneda: any;
    vcNrocheque: any;
    chCodigointerno: any;
    inDeguiapublicada: any;
    vcTipofactura: any;
    vcCodigoerpproveedor: any;
    tsFechahoracreacion: any;
    vcCodigosociedad: any;
    deImpuesto1: any;
    deImpuesto2 : any;
    deImpuesto3: any;
    deDescuento: any;
    deImportereferencial: any;
    deSubtotalcomprobantepago: any;
    deTotalcomprobantepago: any;
    dePagomontopagadoultimo: any;
    deDctomontoultimo: any;
    inIdindicadorimpuesto: any;
    vcIndicadorimpuesto: any;
    chOpregfac: any;
    vcCodigoerp: any;
    vcCoderror: any;
    tsFechadocumentoret: any;
    vcDescerror: any;
    chTipoemision: any;
    dePorcentajeimpuesto: any;
    inDetraccion: any;
    inIdbienservicio: any;
    vcCodigobienservicio: any;
    vcDescripcionbienservicio: any;
    vcPorcentajedetraccion: any;
    vcIdcondicionpago: any;
    vcDescripcioncondicionpago: any;
    vcLlaveerp: any;
    vcIdtablaestado: any;
    vcIdregistroestadoprov: any;
    vcIdregistroestadocomp: any;
    vcIdtablamoneda: any;
    vcIdregistromoneda: any;
    vcIdtablatipocomprobante: any;
    vcIdregistrotipocomprobante: any;
    chIdtipocomprobante: any;
    deImpuestogvr: any;
    dePagomontopagado: any;
    deDctomonto: any;
    vcTicketRetencion: any;
    serieCorrelativo: any;
    ticketResumen: any;
    parametros: parametros[];
    entidadproveedora: entidadProveedora[];
    entidadcompradora: entidadCompradora[];
    eventos: eventos[];
    constructor(){
        
    }
}