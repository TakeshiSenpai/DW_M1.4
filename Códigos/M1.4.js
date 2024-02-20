// Función para generar una fecha aleatoria entre dos fechas dadas
function generarFechaAleatoria(fechaInicio, fechaFin) {
  return new Date(fechaInicio.getTime() + Math.random() * (fechaFin.getTime() - fechaInicio.getTime()));
}

// Lista de nombres y claves
var nombresClaves = [
  { clave: 101, nombre: "Matemáticas" },
  { clave: 102, nombre: "Física" },
  { clave: 103, nombre: "Programación" },
  { clave: 104, nombre: "Inglés" },
  { clave: 105, nombre: "Historia" }
];

// Función para generar un arreglo de registros de asignaturas
function generarHistorialAsignaturas(N) {
  var historial = [];
  var fechaInicio = new Date('2021-01-01');
  var fechaFin = new Date('2024-06-30');
  
  for (var i = 0; i < N; i++) {
      var asignatura = {};
      var randomIndex = Math.floor(Math.random() * nombresClaves.length);
      var asignaturaInfo = nombresClaves[randomIndex];
      
      asignatura.clave = asignaturaInfo.clave;
      asignatura.nombre = asignaturaInfo.nombre;
      asignatura.creditos = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
      asignatura.calificacion = Math.random() * 100;
      asignatura.fecha = generarFechaAleatoria(fechaInicio, fechaFin);
      
      historial.push(asignatura);
  }
  
  return historial;
}

// Función para formatear una fecha en formato dd/mm/aaaa
function formatearFecha(fecha) {
  var dia = fecha.getDate();
  var mes = fecha.getMonth() + 1;
  var anio = fecha.getFullYear();
  
  return `${dia < 10 ? '0' : ''}${dia}/${mes < 10 ? '0' : ''}${mes}/${anio}`;
}

// Función para filtrar y formatear registros de asignaturas según el criterio especificado
function filtrarAsignaturas(historial) {
  var fechaLimite = new Date();
  fechaLimite.setMonth(fechaLimite.getMonth() - 6); // Establecer la fecha límite como 6 meses atrás

  return historial.filter(asignatura => asignatura.calificacion < 60 && asignatura.fecha > fechaLimite)
                  .map(asignatura => {
                      return {
                          clave: asignatura.clave,
                          calificacion: asignatura.calificacion,
                          fechaStr: formatearFecha(asignatura.fecha)
                      };
                  });
}

// Obtener el número de asignaturas desde la línea de comando
try {
  var N = process.argv[2];

  // Verificar si se proporcionó un número válido como argumento
  if (isNaN(N) || N <= 0) {
      throw new Error("Por favor, proporciona un número entero positivo como argumento.");
  } else {
      // Generar historial de asignaturas
      var historialAsignaturas = generarHistorialAsignaturas(parseInt(N, 10));

      // Filtrar y formatear los registros de asignaturas
      var resultados = filtrarAsignaturas(historialAsignaturas);

      // Imprimir resultados
      console.log(historialAsignaturas);
      console.log("Resultados de la búsqueda con calificación < 60 y fecha > 6 meses atrás:");
      if (resultados.length === 0) {
          console.log("No se encontraron resultados.");
      } else {
          console.log(resultados);
      }
  }
} catch (error) {
  console.error(error.message);
}
