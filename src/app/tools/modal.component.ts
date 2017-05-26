
import { Component, ElementRef, Input, OnInit, ViewChild, OnDestroy } from '@angular/core' ;
import { SelectedElement } from '../shared/shared.service'
@Component({
    selector: "modal-component",
    template: `
        <div [hidden]="!modal" style="position: fixed; z-index:999; top:0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.4); display: flex; align-items: center;">
            <div style="margin: 0 auto; min-width: 250px; ">
            <div style="width: 100%; text-align: center;box-shadow: rgb(255, 255, 255) 0px 1px 0px 0px inset; background: linear-gradient(rgb(249, 249, 249) 5%, rgb(233, 233, 233) 100%) rgb(249, 249, 249); border-radius: 6px 6px 0px 0px; border: 1px solid rgb(220, 220, 220); cursor: pointer; color: rgb(102, 102, 102); font-family: Arial; font-size: 15px; font-weight: bold; padding: 6px 24px; text-decoration: none; text-shadow: rgb(255, 255, 255) 0px 1px 0px;"><h4>{{header}}</h4></div>
            <div #modalBody style="width: 100%; background: #FFF; padding: 6px 24px; border:1px solid white;"></div>
            <div style="width:100%; box-shadow: rgb(242, 250, 220) 0px 0px 14px -3px inset; background: linear-gradient(rgb(219, 230, 196) 5%, rgb(155, 168, 146) 100%) rgb(219, 230, 196); border-radius: 0px 0px 6px 6px; border: 1px solid rgb(178, 184, 173); cursor: pointer; color: rgb(117, 125, 111); font-family: Arial; font-size: 15px; font-weight: bold; padding: 6px 24px; text-decoration: none; text-shadow: rgb(206, 217, 191) 0px 1px 0px;">
                <div class="row">
                    <div class="col-4">
                        <button class="btn btn-success" (click)="returnForm()" style="float:right;">Ok</button>
                    </div>
                    <div class="col-4">
                        <button class="btn btn-danger" (click)="cancelForm()">Cancel</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
        `,
    styleUrls: ['./css/lib/bootstrap.css','./css/styles.css']
})
export class ModalComponent implements OnInit, OnDestroy{
    @ViewChild('modalBody') modalBody: any;
    subscription: any;
    modal: boolean = false;
    header: string = "Header";
    statusCode: any;
    constructor(private service: SelectedElement){}

    ngOnInit(){
        this.subscription = this.service.modal.subscribe((item : any) => this.setModalBody(item))
    }
    okfunction: any;
    setModalBody(item : any){
        this.modal = true;
        this.modalBody.nativeElement.appendChild(item.dom);
        this.header = item.header;
        this.statusCode = item.statusCode;
        this.okfunction = item.okfunction;
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
    returnForm(){
        var evt: any={};
        this.modal = false;
        evt.statusCode = this.statusCode;
        evt.dom = this.modalBody.nativeElement.firstChild;
        this.okfunction();
        this.modalBody.nativeElement.innerHTML = ""
    }
    cancelForm(){
        var evt: any={};
        evt.statusCode = "cancel";
        evt.dom = this.modalBody;
    }
   
}