// Middleware para validar los campos de la reserva
exports.validarCampos = (req, res, next) => {
    const { quienRealiza, codigoReserva, fecha } = req.body;
  
    if (!quienRealiza || !codigoReserva || !fecha) {
      return res.status(400).json({ error: 'Todos los campos son requeridos.' });
    }
  
    next();
  };
  
  // Middleware para validar la existencia de una reserva
  exports.validarReservaExistente = async (req, res, next) => {
    const { id } = req.params;
  
    try {
      const reserva = await Reserva.findByPk(id);
      if (!reserva) {
        return res.status(404).json({ error: 'No se encontró la reserva.' });
      }
  
      next();
    } catch (error) {
      console.log(error);
      res.status(500).json(error, 'Ocurrió un error al validar la reserva.')
    }
  }

  
  