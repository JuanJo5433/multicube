import React from "react";
import Header from "./components/header";
import product from "./assets/product.jpeg";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-2 w-full lg:w-[30%] border border-gray-200">
      <div className="text-4xl text-[#00E2D3] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-[#0D33B3] mb-2">{title}</h3>
      <p className="text-[#005452]">{description}</p>
    </div>
  );
};

const ClientReviewCard = ({ name, title, comment, rating }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-2 w-full lg:w-[30%] border border-gray-200">
      <h3 className="text-xl font-semibold text-[#0D33B3]">{name}</h3>
      <p className="text-sm text-[#005452]">{title}</p>
      <p className="text-[#0D33B3] mt-4">{comment}</p>
      <div className="flex mt-4">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${
              index < rating ? "text-[#00E2D3]" : "text-gray-300"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 15.27L16.18 19 15.64 12.97 20 8.24l-7.19-.61L10 2 7.19 7.63 0 8.24l4.36 4.73L4.82 19z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0D33B3] text-white py-8 px-6 mt-36">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div className="mb-8 lg:mb-0">
          <h3 className="text-2xl font-bold mb-4">Contáctanos</h3>
          <p className="mb-2">
            <span className="font-medium mr-2">📞</span>+57 321 5717983
          </p>
          <p className="mb-2">
            <span className="font-medium mr-2">📧</span>
            parracallemanueljeronimo22@gmail.com
          </p>
          <p>
            <span className="font-medium mr-2">📍</span>
            Dosquebradas, Colombia
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="text-2xl font-bold mb-4">Envíanos un Mensaje</h3>
          <form>
            <div className="grid gap-4">
              <input
                type="text"
                className="border border-gray-300 p-2 rounded w-full text-black"
                placeholder="Nombre"
              />
              <input
                type="text"
                className="border border-gray-300 p-2 rounded w-full text-black"
                placeholder="Mensaje"
              />
              <button
                type="submit"
                className="bg-[#00E2D3] hover:bg-[#00E7E3] text-white py-2 px-4 rounded"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
      <p className="text-center text-gray-400 mt-8">
        © 2024 MultiCube. Todos los derechos reservados.
      </p>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Primera sección */}
        <section id="producto" className="flex flex-col lg:flex-row mt-36 mx-auto max-w-7xl p-6">
          <div className="flex flex-col justify-center px-6 lg:px-20 lg:w-1/2">
            <h1 className="font-bold text-5xl md:text-7xl text-[#0D33B3]">
              Cubo Multifuncional
            </h1>
            <span className="text-xl text-[#005452] mt-4">
              Un producto revolucionario diseñado para mejorar la calidad de vida en nuestros hogares.
            </span>
            <div className="mt-6 flex space-x-4">
              <button className="bg-[#00E2D3] text-white py-2 px-4 rounded-lg shadow hover:bg-[#00E7E3] transition duration-200">
                Comprar Ahora
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:w-1/2">
            <img
              src={product}
              alt="InnovaTech 3000"
              className="w-96 h-96 rounded-lg shadow-lg "
            />
          </div>
        </section>
        <div className="border-t border-gray-300 my-12"></div> {/* Divider */}
        
        {/* Sección de características */}
        <section id="caracteristicas" className="mt-36 px-6">
          <h2 className="text-3xl font-bold text-[#0D33B3]">
            Características Principales
          </h2>
          <div className="flex flex-wrap mt-6 justify-between">
            <FeatureCard
              icon="⚡"
              title="Responsabilidad ambiental"
              description="Nos preocupamos por el medio ambiente y estamos comprometidos con prácticas comerciales sostenibles. Nos esforzamos por incorporar materiales y tecnologías respetuosas con el medio ambiente en el diseño y producción de nuestro proyecto. A su vez, buscamos fomentar el reciclaje adecuado de nuestro producto y minimizar cualquier impacto negativo en el entorno."
            />
            <FeatureCard
              icon="👥"
              title="Comodidad"
              description="Es nuestra característica principal, ya que la vida de nuestros usuarios sea más fácil. Nos enfocamos por asegurar que nuestras herramientas sean intuitivas y fáciles de usar, simplificando las tareas cotidianas y brindando una experiencia sin complicaciones."
            />
            <FeatureCard
              icon="🏆"
              title="Calidad Inigualable"
              description="Nosotros usamos productos de la más alta calidad, asegurando que cada componente y función de nuestra empresa cumpla con los estándares más exigentes. Nos comprometemos a brindar una experiencia excepcional a nuestros clientes, garantizando la confiabilidad, durabilidad y eficiencia de nuestros productos."
            />
          </div>
        </section>
        
        <div id="testimonios" className="border-t border-gray-300 my-12"></div> {/* Divider */}
        
        {/* Sección de comentarios de clientes */}
        <section className="mt-36 px-6">
          <h2 className="text-3xl font-bold text-[#0D33B3]">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-[#005452] mt-2">
            Comentarios de clientes satisfechos...
          </p>
          <div className="flex flex-wrap mt-6 justify-between">
            <ClientReviewCard
              name="María G."
              comment="El Cubo Multifuncional de Multicube ha cambiado por completo la forma en que organizo mi hogar! No solo es un excelente ventilador que refresca la habitación, sino que también funciona como ambientador, eliminando esos olores desagradables. Además, su diseño elegante lo convierte en una pieza decorativa que combina perfectamente con mi estilo. ¡Lo recomiendo a todos!"
              rating={5}
            />
            <ClientReviewCard
              name="Juan P."
              comment="He estado utilizando el Cubo Multifuncional durante un par de semanas y estoy encantado con su versatilidad. Es increíble cómo un solo producto puede servir como ventilador, ambientador y almacenamiento. Su tamaño compacto lo hace ideal para cualquier rincón de mi hogar. Definitivamente, es una compra que vale la pena para quienes buscan comodidad y estilo."
              rating={4}
            />
            <ClientReviewCard
              name="Ana L."
              comment="Multicube ha superado mis expectativas con su innovador Cubo Multifuncional. Me encanta la idea de tener un producto que no solo es práctico, sino que también aporta un toque moderno a mi decoración. El ambiente en casa ha mejorado notablemente, y mis amigos siempre preguntan de dónde lo saqué. ¡Un gran acierto en mi hogar!"
              rating={5}
            />
          </div>
        </section>
        
        <div className="border-t border-gray-300 my-12"></div> {/* Divider */}
        
        {/* Sección sobre nosotros */}
        <section id="sobre-nosotros" className="mt-36 px-6">
          <h2 className="text-3xl font-bold text-[#0D33B3]">Sobre Nosotros</h2>
          <p className="mt-4 text-[#005452]">
            En MultiCube, nos dedicamos a innovar y mejorar la vida de las personas a través de productos multifuncionales que son prácticos, eficientes y estéticamente agradables. Nuestro objetivo es ofrecer soluciones que se adapten a las necesidades de nuestros clientes y les permitan disfrutar de su hogar de una manera única.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
