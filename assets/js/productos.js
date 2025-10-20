// Catálogo de productos 3A
window.PRODUCTS = [
  // Lácteos
  { id:'lecheevap', nombre:'Leche Evaporada 400g', precio:4.60, img:'img/lecheevaporada.webp', categoria:'lacteos', desc:'Leche evaporada cremosa, perfecta para tus recetas.' },
  { id:'lechecaja', nombre:'Leche Entera Caja 1L', precio:4.80, img:'https://via.placeholder.com/500x500?text=Leche+Entera', categoria:'lacteos', desc:'Leche UHT en caja con sellado de seguridad y aporte de calcio.' },
  { id:'lechebolsa', nombre:'Leche Fresca Bolsa 900ml', precio:3.90, img:'https://via.placeholder.com/500x500?text=Leche+Bolsa', categoria:'lacteos', desc:'Leche pasteurizada ideal para desayunos familiares.' },
  { id:'yogurtdrink', nombre:'Yogurt Bebible Fresa 1L', precio:6.20, img:'https://via.placeholder.com/500x500?text=Yogurt+Fresa', categoria:'lacteos', desc:'Yogurt bebible sabor fresa con probióticos activos.' },

  // Granos & Cereales
  { id:'arroz5', nombre:'Arroz 750gr añejo', precio:4.90, img:'img/arroz.png', categoria:'granos-cereales', desc:'Arroz de grano largo seleccionado, ideal para el día a día.' },
  { id:'avena1', nombre:'Avena 800g', precio:8.90, img:'img/avena.webp', categoria:'granos-cereales', desc:'Avena ideal para desayunos saludables y postres.' },
  { id:'quinua1', nombre:'Quinua Perlada 500g', precio:10.50, img:'https://via.placeholder.com/500x500?text=Quinua+Perlada', categoria:'granos-cereales', desc:'Quinua seleccionada rica en proteína vegetal.' },
  { id:'cerealmaiz', nombre:'Cereal de Maíz 450g', precio:7.80, img:'https://via.placeholder.com/500x500?text=Cereal+de+Maiz', categoria:'granos-cereales', desc:'Hojuelas de maíz fortificadas con vitaminas y hierro.' },

  // Conservas
  { id:'atun170', nombre:'Atún en Aceite 170g', precio:6.90, img:'img/atunflorida.webp', categoria:'conservas', desc:'Atún en aceite, práctico y rendidor.' },
  { id:'sardinas', nombre:'Sardinas en Salsa de Tomate 155g', precio:4.40, img:'https://via.placeholder.com/500x500?text=Sardinas', categoria:'conservas', desc:'Sardinas en salsa de tomate listas para servir.' },
  { id:'duraznoalmibar', nombre:'Duraznos en Almíbar 820g', precio:11.90, img:'https://via.placeholder.com/500x500?text=Duraznos+en+Almibar', categoria:'conservas', desc:'Rebanadas de durazno en almíbar ligero, ideal para postres.' },
  { id:'menestraList', nombre:'Menestra lista 300g', precio:5.60, img:'https://via.placeholder.com/500x500?text=Menestra+Lista', categoria:'conservas', desc:'Mix de menestras precocidas para una comida rápida y nutritiva.' },

  // Bebidas
  { id:'cafe200', nombre:'Café Molido 200g', precio:16.90, img:'img/cafe.webp', categoria:'bebidas', desc:'Café molido de aroma intenso.' },
  { id:'jugoNaranja', nombre:'Jugo de Naranja 1L', precio:6.50, img:'https://via.placeholder.com/500x500?text=Jugo+de+Naranja', categoria:'bebidas', desc:'Jugo pasteurizado con vitamina C añadida.' },
  { id:'aguaMineral', nombre:'Agua Mineral 2.5L', precio:3.30, img:'https://via.placeholder.com/500x500?text=Agua+Mineral', categoria:'bebidas', desc:'Agua mineral natural de manantial.' },
  { id:'bebidaEnerg', nombre:'Bebida Energizante 473ml', precio:7.20, img:'https://via.placeholder.com/500x500?text=Energizante', categoria:'bebidas', desc:'Energizante con taurina y complejo B para activarte al instante.' },

  // Snacks
  { id:'galletas', nombre:'Galletas surtidas', precio:5.50, img:'img/galletassurtidas.webp', categoria:'snacks', desc:'Galletas variadas para toda la familia.' },
  { id:'papasFritas', nombre:'Papas Fritas Clásicas 150g', precio:4.70, img:'https://via.placeholder.com/500x500?text=Papas+Fritas', categoria:'snacks', desc:'Papas fritas crocantes con sal marina.' },
  { id:'mixFrutos', nombre:'Mix de Frutos Secos 200g', precio:12.50, img:'https://via.placeholder.com/500x500?text=Mix+Frutos+Secos', categoria:'snacks', desc:'Mix de almendras, pecanas y arándanos deshidratados.' },
  { id:'chocolateB', nombre:'Chocolate Bitter 70% 100g', precio:8.90, img:'https://via.placeholder.com/500x500?text=Chocolate+Bitter', categoria:'snacks', desc:'Chocolate bitter de alto porcentaje de cacao.' },

  // Limpieza
  { id:'detergente', nombre:'Detergente Líquido 1L', precio:9.80, img:'https://via.placeholder.com/500x500?text=Detergente+Liquido', categoria:'limpieza', desc:'Detergente líquido con fragancia fresca y acción quitamanchas.' },
  { id:'lavavajillas', nombre:'Lavavajillas Concentrado 750ml', precio:6.10, img:'https://via.placeholder.com/500x500?text=Lavavajillas', categoria:'limpieza', desc:'Lavavajillas concentrado que elimina la grasa difícil.' },
  { id:'limpiavidrios', nombre:'Limpiavidrios 650ml', precio:5.30, img:'https://via.placeholder.com/500x500?text=Limpiavidrios', categoria:'limpieza', desc:'Limpiador para vidrios y superficies brillantes sin marcas.' },
  { id:'papeltoalla', nombre:'Papel Toalla Pack x3', precio:7.50, img:'https://via.placeholder.com/500x500?text=Papel+Toalla', categoria:'limpieza', desc:'Papel toalla doble hoja ultra absorbente.' },

  // Despensa saludable
  { id:'lenteja1', nombre:'Lentejas 1kg', precio:7.20, img:'img/lentejas.webp', categoria:'despensa-saludable', desc:'Lentejas ricas en proteína y fibra.' },
  { id:'aceiteoliva', nombre:'Aceite de Oliva Extra Virgen 500ml', precio:22.90, img:'https://via.placeholder.com/500x500?text=Aceite+de+Oliva', categoria:'despensa-saludable', desc:'Aceite de oliva prensado en frío, ideal para ensaladas.' },
  { id:'semillachia', nombre:'Semillas de Chía 250g', precio:9.40, img:'https://via.placeholder.com/500x500?text=Semillas+de+Chia', categoria:'despensa-saludable', desc:'Semillas de chía con alto contenido de omega 3.' },
  { id:'granola', nombre:'Granola Artesanal 400g', precio:12.80, img:'https://via.placeholder.com/500x500?text=Granola+Artesanal', categoria:'despensa-saludable', desc:'Granola artesanal con frutos secos y miel de abeja.' },

  // Salsas
  { id:'salsaTomate', nombre:'Salsa de Tomate 400g', precio:4.10, img:'https://via.placeholder.com/500x500?text=Salsa+de+Tomate', categoria:'salsas', desc:'Salsa de tomate condimentada lista para pasta o guisos.' },
  { id:'mayonesa', nombre:'Mayonesa Familiar 950g', precio:10.90, img:'https://via.placeholder.com/500x500?text=Mayonesa', categoria:'salsas', desc:'Mayonesa cremosa con huevo pasteurizado.' },
  { id:'ajiamarillo', nombre:'Crema de Ají Amarillo 250g', precio:6.70, img:'https://via.placeholder.com/500x500?text=Aji+Amarillo', categoria:'salsas', desc:'Crema de ají amarillo lista para tus platos favoritos.' },
  { id:'mostaza', nombre:'Mostaza Premium 350g', precio:5.80, img:'https://via.placeholder.com/500x500?text=Mostaza', categoria:'salsas', desc:'Mostaza estilo dijon con textura cremosa y sabor intenso.' },

  // Panadería
  { id:'panMolde', nombre:'Pan de Molde Blanco 650g', precio:6.40, img:'https://via.placeholder.com/500x500?text=Pan+de+Molde', categoria:'panaderia', desc:'Pan de molde esponjoso, ideal para sándwiches.' },
  { id:'panIntegral', nombre:'Pan Integral Multicereales 600g', precio:7.20, img:'https://via.placeholder.com/500x500?text=Pan+Integral', categoria:'panaderia', desc:'Pan integral con semillas de girasol y linaza.' },
  { id:'croissant', nombre:'Croissants de Mantequilla x4', precio:9.50, img:'https://via.placeholder.com/500x500?text=Croissants', categoria:'panaderia', desc:'Croissants artesanales de mantequilla, listos para calentar.' },
  { id:'bollosDulces', nombre:'Bollos Dulces Rellenos x6', precio:8.30, img:'https://via.placeholder.com/500x500?text=Bollos+Dulces', categoria:'panaderia', desc:'Bollos rellenos de crema pastelera para compartir.' },

  // Otros básicos
  { id:'azucar1', nombre:'Panela Granulada 1kg', precio:5.40, img:'img/azucar.png', categoria:'despensa-saludable', desc:'Panela orgánica ideal para endulzar de forma natural.' },
  { id:'aceite1', nombre:'Aceite Vegetal 1L', precio:9.90, img:'img/aceite.png', categoria:'despensa-saludable', desc:'Aceite vegetal versátil para freír o aliñar.' },
  { id:'fideos500', nombre:'Fideos Spaghetti 500g', precio:3.50, img:'img/fideos.png', categoria:'granos-cereales', desc:'Pasta tipo spaghetti con cocción al dente.' },
  { id:'harina1', nombre:'Harina de Trigo 1kg', precio:4.00, img:'img/harina.webp', categoria:'panaderia', desc:'Harina multipropósito para pan y repostería.' },
  { id:'sal1', nombre:'Sal Yodada 1kg', precio:2.20, img:'img/salyodada.webp', categoria:'despensa-saludable', desc:'Sal yodada para realzar el sabor de tus comidas.' }
];

window.getProductById = (id) => window.PRODUCTS.find(p => p.id === id);
window.money = (n) => 'S/ ' + n.toFixed(2);

