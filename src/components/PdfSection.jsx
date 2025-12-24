import { FaFilePdf } from "react-icons/fa";

const PDFS = [
  { label: "ChatGPT y la docencia", path: "/pdfs/biblioteca1.pdf" },
  { label: "Plataforma digital de ingles con procesamiento de voz para educación preescolar", path: "/pdfs/biblioteca2.pdf" },
  { label: "Crear videos para los estudiantes", path: "/pdfs/biblioteca3.pdf" },
  { label: "Implementation in microcontrollers of an algorithm for the simple generation of speed profiles in a stepper motor and their associated kinematics", path: "/pdfs/biblioteca4.pdf" },
    
];

export default function PdfSection() {
  const openPdf = (path) => {
    // abre en nueva pestaña (la mayoría de navegadores lo renderizan inline)
    window.open(path, "_blank", "noopener,noreferrer");
  };

  return (
    <section>
      <div className="pdfs-container-inner">
        {PDFS.map((p) => (
          <button key={p.path} className="pdf-doc" onClick={() => openPdf(p.path)}>
            <FaFilePdf style={{ margin: "0.5rem", fontSize: "2rem", color: "#c11212ff" }} />
            {p.label}
            <p>Click en el boton para ver</p>
          </button>
        ))}
      </div>
    </section>
  );
}
