let persona={
nombre:'Carlos', 
apellido:'Ulibarri',
getName: function (){return `${this.nombre} ${this.apellido}`},
domicilio: {
    calle:'Madero #144',
    colonia:'Centro',
    cp:28000,
    municipio:'Colima',
},
getDomicilio: function (){return `Domicilio: ${this.domicilio.calle} colonia ${this.domicilio.colonia} ${this.domicilio.cp}, ${this.domicilio.municipio}`}
};
console.log(persona.getDomicilio());
