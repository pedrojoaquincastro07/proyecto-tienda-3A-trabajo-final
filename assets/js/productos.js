// Catálogo de productos 3A
window.PRODUCTS = [
  { id:'arroz5',   nombre:'Arroz 750gr añejo',     precio:4.90, img:'img/arroz.png',   categoria:'granos',      desc:'Arroz de grano largo seleccionado, ideal para el día a día.' },
  { id:'azucar1',  nombre:'Azúcar blanca 1kg',      precio:4.20,  img:'img/azucar.png',  categoria:'endulzantes', desc:'Azúcar rubia granulada con dulzor parejo.' },
  { id:'aceite1',  nombre:'Aceite Vegetal 1L',     precio:9.90, img:'img/aceite.png',  categoria:'aceites',     desc:'Aceite vegetal versátil para freír o aliñar.' },
  { id:'fideos500',nombre:'Fideos Spaghetti 500g', precio:3.50,  img:'img/fideos.png',  categoria:'pastas',      desc:'Pasta tipo spaghetti con cocción al dente.' },
  { id:'leche1',   nombre:'Leche Evaporada 400g',  precio:4.60,  img:'img/lecheevaporada.webp',   categoria:'lacteos',     desc:'Leche evaporada cremosa, perfecta para tus recetas.' },
  { id:'atun170',  nombre:'Atún en Aceite 170g',   precio:6.90,  img:'img/atunflorida.webp',    categoria:'enlatados',   desc:'Atún en aceite, práctico y rendidor.' },
  { id:'sal1',     nombre:'Sal Yodada 1kg',        precio:2.20,  img:'img/salyodada.webp',     categoria:'condimentos', desc:'Sal yodada para realzar el sabor de tus comidas.' },
  { id:'harina1',  nombre:'Harina de Trigo 1kg',   precio:4.00,  img:'img/harina.webp',  categoria:'harinas',     desc:'Harina multipropósito para pan y repostería.' },
  { id:'lenteja1', nombre:'Lentejas 1kg',          precio:7.20,  img:'img/lentejas.webp',categoria:'legumbres',    desc:'Lentejas ricas en proteína y fibra.' },
  { id:'avena1',   nombre:'Avena 800g',            precio:8.90,  img:'img/avena.webp',   categoria:'cereales',    desc:'Avena ideal para desayunos saludables.' },
  { id:'cafe200',  nombre:'Café 200g',             precio:16.90, img:'img/cafe.webp',    categoria:'bebidas',     desc:'Café molido de aroma intenso.' },
  { id:'galletas', nombre:'Galletas surtidas',     precio:5.50,  img:'img/galletassurtidas.webp',categoria:'snacks',       desc:'Galletas variadas para toda la familia.' },
];

window.getProductById = (id) => window.PRODUCTS.find(p => p.id === id);
window.money = (n) => 'S/ ' + n.toFixed(2);

