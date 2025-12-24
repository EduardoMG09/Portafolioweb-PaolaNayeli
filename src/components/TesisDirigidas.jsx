import data from "../json/tesisDirigidas.json";

export const TesisDirigidas = () => {
  {
    return (
      <section>
        <div className="tesis-container-inner">
          <table className="tesis-table">
            <thead>
              <tr>
                <th>Puesto</th>
                <th>Título de la Tesis</th>
                <th>Plan de Estudios</th>
                <th>Año de Designación</th>
              </tr>
            </thead>
            <tbody>
              {data.map((tesis, index) => (
                <tr key={index}>
                  <td>{tesis.puesto}</td>
                  <td>{tesis.titulo}</td>
                  <td>{tesis.plan_estudios}</td>
                  <td>{tesis.anio_designacion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
};
