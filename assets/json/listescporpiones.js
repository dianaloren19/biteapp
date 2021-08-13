//ARREGLO QUE CONTIENE LAS ARAÑAS
export default DAT = [
  {
    id: 1,
    title: "Tityus Pachyurus",
    images: [
      { id: 1, uri: require("../categorias/escorpiones/Pachyurus.png") },
      { id: 2, uri: require("../categorias/escorpiones/Pachyurus2.png") },
      { id: 3, uri: require("../categorias/escorpiones/black.jpg") },
      
    ],
    fact1: "fact 1",
    fact2: "fact 2",
    fact3: "fact 3",
    description: "description",
    peqDescri: "El género Tityus posee 29 especies reportadas y son los de mayor importancia en Colombia, los accidentes con algunas de estas especies podrían poner en grave riesgo la vida humana en el país.",
    peligroso: true,
  },
   {
     id: 2,
     title: "Centruroides gracilis ",
      images: [
       { id: 1, uri: require("../categorias/escorpiones/gracilis.png") },
     ],
     fact1: "fact 1",
     fact2: "fact 2",
     fact3: "fact 3",
     description: "description",
     peqDescri: "El género Centruroides spp solo registra una especie de importancia médica, el  C. gracilis cuya picadura podrían poner en grave riesgo la vida humana",
     peligroso: true,
   },
   {
     id: 3,
     title: "Troglotayosicus meijdeni sp",
     images: [
       { id: 1, uri: require("../categorias/escorpiones/meijdeni.png") },
     ],
     fact1: "fact 1",
     fact2: "fact 2",
     fact3: "fact 3",
     description: "description",
     peqDescri: "Ejemplar hembra que habita en la hojarasca del bosque en el municipio de Rivera",
     peligroso: false,
  }, 
];
