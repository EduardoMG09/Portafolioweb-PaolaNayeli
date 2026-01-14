import img from "../assets/logo-verne2.webp";

export default function FormularioContacto() {
  return (
    <div className="formulario-contacto">
      <div className="contact-shell">
        <section className="contact-info">
          <h4 className="eyebrow">Estamos aquí para ayudarte</h4>
          <h2 className="title">¿Necesitas asesoría o una sugerencia?</h2>
          <p className="subtitle">
            Cuéntame brevemente tu necesidad y con gusto te respondo.
          </p>
        </section>

        <form className="form-card" onSubmit={(e) => e.preventDefault()}>
          <img src={img} alt="Logo" className="form-logo" />

          <div className="field">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="tu@correo.com" required />
          </div>

          <div className="field">
            <label htmlFor="tema">Tema</label>
            <select id="tema" name="tema" defaultValue="">
              <option value="" disabled>
                Selecciona…
              </option>
              <option value="asesoria">Asesoría</option>
              <option value="sugerencia">Sugerencia</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje" required />
          </div>

          <button className="submit-btn" type="submit">
            Enviar
            <span aria-hidden="true" className="arrow" />
          </button>
        </form>
      </div>
    </div>
  );
}
