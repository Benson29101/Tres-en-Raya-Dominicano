# Tres en Raya Dominicano
**Nombre:** Benson Ho Chen

## Descripción 
Un juego de Tres en Raya al estilo dominicano, con jugadores con los roles Taíno (X) y Caribe (O) y con colores de nuestra bandera patria de república dominicana, rojo, azul y blanco.
La partida se guarda, en caso de que se cierre y vuelva a abrir o se reinicie la página aún se puede continuar con la partida.

## Lo Aprendido
- Manejo de estado: con useState me permitió cambiar de turno y guardar las jugadas en las casillas
- Inmutabilidad de React: en lugar de actualizar el original, se crea una copia con .slice() y hacemos el cambio en la copia


## Lo más difícil 
Al momento de tratar de eliminar y modificar algunos líneas de código accidentalmente eliminé el *export default App*, cuando revisé la página se mostraba una pantalla blanca de repente y no encontraba cuál era el error. Hasta que más tarde me dí cuenta que eliminé la parte fundamental que permitía exportarlo y permitir el main.jsx llamarlo. 
Comprendí de por qué es bueno dividir la pantalla en dos, uno para el código y otro para la página, en lugar de usar solo pantalla completa. 
