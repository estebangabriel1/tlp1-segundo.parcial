const Reserva = require('../models/reserva');

// Obtener todas las reservas
exports.obtenerTodasLasReservas = async (req, res) => {
  try {
    const reservas = await Reserva.findAll();
    res.json(reservas);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Ocurrió un error al obtener las reservas.' });
  }
};

// Crear una reserva
exports.crearReserva = async (req, res) => {
  const { quienRealiza, codigoReserva, fecha } = req.body;

  try {
    const reserva = await Reserva.create({ quienRealiza, codigoReserva, fecha });
    res.status(201).json(reserva);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Ocurrió un error al crear la reserva.' });
  }
};

// Actualizar una reserva
exports.actualizarReserva = async (req, res) => {
  const { id } = req.params;
  const { quienRealiza, codigoReserva, fecha } = req.body;

  try {
    const reserva = await Reserva.findByPk(id);
    if (!reserva) {
      return res.status(404).json({ error: 'No se encontró la reserva.' });
    }

    reserva.quienRealiza = quienRealiza;
    reserva.codigoReserva = codigoReserva;
    reserva.fecha = fecha;

    await reserva.save();
    res.json(reserva);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Ocurrió un error al actualizar la reserva.' });
  }
};

// Eliminar una reserva
exports.eliminarReserva = async (req, res) => {
  const { id } = req.params;

  try {
    const reserva = await Reserva.findByPk(id);
    if (!reserva) {
      return res.status(404).json({ error: 'No se encontró la reserva.' });
    }

    await reserva.destroy();
    res.json({ mensaje: 'Reserva eliminada correctamente.' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Ocurrió un error al eliminar la reserva.' });
  }
};
