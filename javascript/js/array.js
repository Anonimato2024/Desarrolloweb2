
function generarNotaAleatoria() {
    return Math.floor(Math.random() * (100 - 20 + 1)) + 20;
  }
  
  const nombres = ["Juan","Ana","Pedro","María","José","Laura","Carlos","Sofía","David","Andrea"];
  
  const estudiantes = nombres.map((nombre, index) => ({
    nombre,
    nota: 0,
  }));
  
  estudiantes.forEach((estudiante) => {
    estudiante.nota = generarNotaAleatoria();
  });
  
  let notaMasAlta = estudiantes[0].nota;
  let notaMasBaja = estudiantes[0].nota;
  let sumaNotas = 0;
  
  estudiantes.forEach((estudiante) => {
    sumaNotas += estudiante.nota;
  
    if (estudiante.nota > notaMasAlta) {
      notaMasAlta = estudiante.nota;
    }
  
    if (estudiante.nota < notaMasBaja) {
      notaMasBaja = estudiante.nota;
    }
  });
  
  const promedioNotas = sumaNotas / estudiantes.length;
  
  console.log("Lista de estudiantes con notas aleatorias:");
  estudiantes.forEach((estudiante, index) => {
    console.log(`${index + 1}. ${estudiante.nombre} - Nota: ${estudiante.nota}`);
  });
  
  console.log(`Nota más alta: ${notaMasAlta}`);
  console.log(`Nota más baja: ${notaMasBaja}`);
  console.log(`Promedio de notas: ${promedioNotas}`);
  