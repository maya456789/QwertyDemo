import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormArray, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-ira-test',
  templateUrl: './ira-test.component.html',
  styleUrls: ['./ira-test.component.css']
})
export class IraTestComponent implements OnInit {

  Fdata:FormGroup;

  ele:any=[2,3,10,15,26,35,50,63];
  indVal:any;
  isSub:boolean=false;

  invoiceFormData:FormGroup;
  addInvoice!: FormArray;
  isSubmitted:boolean=false;
  invoiceCount:any;

  constructor( private fbuild:FormBuilder){
      this.Fdata=this.fbuild.group({
        indexName:['']
      }
        
      )

      this.invoiceFormData=this.fbuild.group({
       
        addInvoice:this.fbuild.array([this.ctrateInvoice()])
  
      })
  }

  get f() {
    return  this.invoiceFormData.get("addInvoice") as FormArray;
  }


   ctrateInvoice(){

     return this.fbuild.group({
      itemName:['',Validators.required],
      

     })
   }


  ngOnInit(){
    
  }

  compX(){
    this.isSubmitted=true;
  }


  addForm(){
    this.addInvoice = this.invoiceFormData.get("addInvoice") as FormArray;
    this.addInvoice.push(this.ctrateInvoice());
 }

 removeForm(index:any){
  (this.invoiceFormData.get("addInvoice") as FormArray).removeAt(index);
}
  

  onSubmit(){
    this.isSub=true;
    console.log(this.ele[this.Fdata.value.indexName]);
    this.indVal=this.ele[this.Fdata.value.indexName];
  }
}
