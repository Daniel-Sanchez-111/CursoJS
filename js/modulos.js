import saludar,{Saludar, PI, usuario, password} from "./constantes.js";
import {aritmetica} from "./aritmetica.js";
console.log("Archivo modulos.js");

console.log(PI);

console.log(usuario,password);

console.log(aritmetica.sumar(5,19));
console.log(aritmetica.restar(20,10));

saludar();

let saludo = new Saludar();
saludo;

import React, {Component} from "react";