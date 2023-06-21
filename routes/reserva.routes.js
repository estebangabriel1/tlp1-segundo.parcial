// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores
const router = require('express').Router();
const reservaController = require('../controllers/reservaController');
const { validarCampos, validarReservaExistente } = require('../middlewares/validaciones');

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas
router.get('/reservas', reservaController.obtenerTodasLasReservas);

// Formulario para crear una reserva
router.get('/reservas/crear', reservaController.mostrarFormularioCrearReserva);

// Formulario para actualizar una reserva
router.get('/reservas/editar/:id', reservaController.mostrarFormularioEditarReserva);

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api/reservas', reservaController.obtenerTodasLasReservas);

// Crear una reserva
router.post('/api/reservas', validarCampos, reservaController.crearReserva);

// Actualizar una reserva
router.put('/api/reservas/:id', [validarCampos, validarReservaExistente], reservaController.actualizarReserva);

// Eliminar una reserva de forma lógica
router.delete('/api/reservas/:id', reservaController.eliminarReserva);

module.exports = router;
