import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{  

  formularioContacto: FormGroup;
  tipoDni: string= 'DNI'; //para que cambie alseleccionar el tpo de dni
  

  //utilizar un contructor para que pueda agregar nombre y email
  constructor(private form: FormBuilder){
    this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      tipoDni: [''], 
      dni: [''], 
      email: ['',[Validators.required, Validators.email]],
    })
  }
  // Para poder subscribirse   y que aparezca el tipo de dni y tengo que irle a cambiar al html
  ngOnInit(): void {
    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(value => {
      this.tipoDni = value
    })
  
    }
    

 
  /* // Esto espara ver que es un usuario activo
  ngOnInit(): void {
    this.formularioContacto.get('nombre')?.setValue(this.usuarioActivo)
    this.formularioContacto.get('nombre')?.disable

  } */


  // esto es para que evalue si es valido el nombre o el email
  hasErrors( controlName: string, errorType: string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched
  }
  
  // para que nevie la información a donde se la pongamos
  enviar() {
    console.log(this.formularioContacto)
  };

}

