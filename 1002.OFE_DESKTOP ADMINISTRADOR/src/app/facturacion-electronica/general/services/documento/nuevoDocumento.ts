import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Servidores} from '../servidores';
import {Post_retencion} from '../../../percepcion-retencion/models/post_retencion';
import {PersistenciaPost} from '../../../percepcion-retencion/services/persistencia-post';
import {PrincipalRetencion} from '../../../percepcion-retencion/models/principal-retencion';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { FacturaEbiz } from 'app/facturacion-electronica/comprobantes/models/facturaEbiz';
import {SpinnerService} from '../../../../service/spinner.service';
declare var swal: any;


@Injectable()
export class NuevoDocumentoService {
  //  private url = '/documentos';
  private urlFactura = '/factura';
  private url = '/guardarRetencion';
  public labelRespuesta: string;
  public labelRespuestaSecundaria: string;
  public labelBotonRespuesta: string;


  constructor(private httpClient: HttpClient,
              private servidores: Servidores,
              private _postpersisservice: PersistenciaPost,
              private _spinner: SpinnerService) {
    //this.url = this.servidores.DOCUCMD + this.url;
    this.url = this.servidores.HOSTLOCAL + '/documentos' + this.url;
    this.urlFactura = 'http://192.168.70.22:8020/api/fe/ms-documentos-command/v1/factura';
  }

  subir(documento: PrincipalRetencion): BehaviorSubject<Post_retencion> {
    this._spinner.set(true);
    const DataPost: BehaviorSubject<Post_retencion> = new BehaviorSubject<Post_retencion>(null);
    const that = this;
    this.httpClient.post<Post_retencion>(this.url, JSON.stringify(documento))
      .subscribe(
        data => {
          
          // this._translate.get('comprobanteGuardadoPendienteEnvio').subscribe(dataTranslate => that.labelRespuesta = dataTranslate);
          // this._translate.get('verificarEstadoConsultaComprobante').subscribe(dataTranslate => that.labelRespuestaSecundaria = dataTranslate);
          // this._translate.get('verRetencion').subscribe(dataTranslate => that.labelBotonRespuesta = dataTranslate);
          that.labelRespuesta = 'El comprobante ha sido guardado localmente.';
          that.labelRespuestaSecundaria = 'Para verificar el estado del comprobante, por favor, ir al menú y seleccionar la opción Consulta de Comprobante.';
          that.labelBotonRespuesta = 'VER RETENCIÓN';
          this._spinner.set(false);
          swal({
            type: 'success',
            title: 'Acción Exitosa',
            html:
              '<div class="text-center">' + that.labelRespuesta + '</div>' +
              '<br>' +
              '<div class="text-center">' + that.labelRespuestaSecundaria + '</div>',
            confirmButtonClass: 'btn btn-success',
            confirmButtonText: that.labelBotonRespuesta,
            buttonsStyling: false
          }).then(
            (result) => {
              const datapost = new Post_retencion();
              datapost.id = data.id;
              datapost.fechaEmision = data.fechaEmision;
              datapost.numeroComprobante = data.numeroComprobante;
              datapost.tipoComprobante = data.tipoComprobante;
              this._postpersisservice.setPostRetencion(datapost);
              DataPost.next(datapost);
              // respuesta.next(data);
            }, (dismiss) => {
              DataPost.next(null);
            });
        },
        error => {
          this._spinner.set(false);
          swal({
            type: 'error',
            title: 'No se pudo subir el documento. Inténtelo en otro momento.',
            confirmButtonClass: 'btn btn-danger',
            confirmButtonText: 'CONTINUAR',
            buttonsStyling: false
          });
        }
      );
    return DataPost;
  }

  public emitirDocumentoFactura(documento: FacturaEbiz): BehaviorSubject<Post_retencion> {
    this._spinner.set(true);
    let DataPost: BehaviorSubject<Post_retencion> = new BehaviorSubject<Post_retencion>(null);
    this.httpClient.post<Post_retencion>(this.urlFactura, documento).subscribe(
        data => {
          this._spinner.set(false);
          const datapost = new Post_retencion();
          datapost.id = data.id;
          datapost.fechaEmision = data.fechaEmision;
          datapost.numeroComprobante = data.numeroComprobante;
          datapost.tipoComprobante = data.tipoComprobante;
          this._postpersisservice.setPostRetencion(datapost);
          DataPost.next(datapost);
        },
        error => {
          this._spinner.set(false);
        }
      );
    return DataPost;
  }
}
