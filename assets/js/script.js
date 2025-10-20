// Utilidades
const $  = (s, r=document)=> r.querySelector(s);
const $$ = (s, r=document)=> Array.from(r.querySelectorAll(s));

const CATEGORY_INFO = {
  'lacteos': {
    name: 'Lácteos',
    description: 'Encuentra leche, yogurt y productos frescos listos para tu refri.',
    summary: 'Elige entre presentaciones en caja, bolsa o tarro con marcas de confianza.',
    badge: 'Lácteos en oferta'
  },
  'granos-cereales': {
    name: 'Granos & Cereales',
    description: 'Arma desayunos y guarniciones nutritivas con nuestra selección de granos.',
    summary: 'Combina arroz, avena, cereales y quinua para rendir toda la semana.',
    badge: 'Despensa energética'
  },
  'conservas': {
    name: 'Conservas',
    description: 'Abre y sirve: pescados, frutas y menestras listas cuando lo necesites.',
    summary: 'Perfectas para ahorrar tiempo y mantener tu alacena siempre abastecida.',
    badge: 'Conservas destacadas'
  },
  'bebidas': {
    name: 'Bebidas',
    description: 'Café, jugos, energizantes y agua mineral para cada momento del día.',
    summary: 'Refresca tu hogar con packs prácticos y sabores que gustan a todos.',
    badge: 'Bebidas favoritas'
  },
  'snacks': {
    name: 'Snacks',
    description: 'Dulces y salados para compartir en casa, la oficina o el colegio.',
    summary: 'Descubre galletas, frutos secos y chocolates con precios especiales.',
    badge: 'Snacks para picar'
  },
  'limpieza': {
    name: 'Limpieza',
    description: 'Mantén tu hogar impecable con detergentes, lavavajillas y más.',
    summary: 'Productos efectivos con aromas frescos para cada habitación.',
    badge: 'Aliados de limpieza'
  },
  'despensa-saludable': {
    name: 'Despensa saludable',
    description: 'Ingredientes nutritivos para cuidar a tu familia día a día.',
    summary: 'Lentejas, granola, semillas y aceites premium con beneficios reales.',
    badge: 'Vida saludable'
  },
  'salsas': {
    name: 'Salsas',
    description: 'Realza tus platos con salsas clásicas y especiales listas para usar.',
    summary: 'Mayonesa, mostaza y ajíes con el toque perfecto para cada receta.',
    badge: 'Salsas irresistibles'
  },
  'panaderia': {
    name: 'Panadería',
    description: 'Panes, bollos y masas listas para acompañar tus comidas.',
    summary: 'Calienta y sirve panes frescos en cuestión de minutos.',
    badge: 'Reciente de panadería'
  }
};

// ====== Comunes: Offcanvas carrito ======
function renderOffcanvasCart(){
  const items = Cart.items();
  const box = $('#cartItems'); if(!box) return;

  if(items.length === 0){
    box.innerHTML = `<div class="text-center text-muted py-4">Tu carrito está vacío.</div>`;
  } else {
    box.innerHTML = items.map(it => `
      <div class="d-flex align-items-center justify-content-between border-bottom py-2" data-id="${it.id}">
        <div class="d-flex align-items-center gap-2">
          <img src="${it.product.img}" class="item-thumb" alt="${it.product.nombre}">
          <div>
            <div class="fw-semibold">${it.product.nombre}</div>
            <div class="text-muted small">${money(it.product.precio)} c/u</div>
          </div>
        </div>
        <div class="d-flex align-items-center gap-2">
          <div class="input-group qty-input">
            <button class="btn btn-outline-secondary btn-sm" data-minus>–</button>
            <input type="number" class="form-control form-control-sm" value="${it.qty}" min="1" data-qty>
            <button class="btn btn-outline-secondary btn-sm" data-plus>+</button>
          </div>
          <button class="btn btn-outline-danger btn-sm" title="Eliminar" data-remove>&times;</button>
        </div>
      </div>
    `).join('');
  }

  const {subtotal, igv, total} = Cart.totals();
  $('#cartSub').textContent = money(subtotal);
  $('#cartIGV').textContent = money(igv);
  $('#cartTotal').textContent = money(total);
  const badge = $('#cartBadge'); if(badge) badge.textContent = Cart.count();

  // Handlers
  $$('#cartItems [data-id]').forEach(row=>{
    const id = row.dataset.id;
    const qtyInput = $('[data-qty]', row);
    $('[data-plus]', row).addEventListener('click', ()=>{ qtyInput.value = +qtyInput.value + 1; Cart.update(id, +qtyInput.value); });
    $('[data-minus]', row).addEventListener('click', ()=>{ qtyInput.value = Math.max(1, +qtyInput.value - 1); Cart.update(id, +qtyInput.value); });
    qtyInput.addEventListener('input', ()=> Cart.update(id, Math.max(1, +qtyInput.value||1)));
    $('[data-remove]', row).addEventListener('click', ()=> Cart.remove(id));
  });

  $('#btnClear')?.addEventListener('click', ()=>{ if(confirm('¿Vaciar carrito?')) Cart.clear(); });
  $('#btnCheckout')?.addEventListener('click', ()=>{ alert('¡Gracias por tu compra! (simulación)'); Cart.clear(); });
}
Cart.events.on('cart:updated', renderOffcanvasCart);

// ====== HOME: Swiper + Grid ======
function buildSwiper(){
  const wrap = $('#swiperWrapper'); if(!wrap) return;
  const list = window.PRODUCTS.slice(0, 8);
  wrap.innerHTML = list.map(p => `
    <div class="swiper-slide">
      <a href="producto.html?id=${p.id}" class="d-block">
        <img src="${p.img}" alt="${p.nombre}" loading="lazy"
             onerror="this.onerror=null;this.src='https://via.placeholder.com/1200x560?text=${encodeURIComponent(p.nombre)}'">
      </a>
      <span class="price-badge">${money(p.precio)}</span>
    </div>
  `).join('');

  // Swiper sin paginación ni navegación (sin puntos ni flechas)
  const swiper = new Swiper('#heroSwiper', {
    autoplay: { delay: 4200, disableOnInteraction: false },
    loop: list.length > 1,
    effect: 'slide',
    speed: 600,
    allowTouchMove: true,
  });
}

function renderHomeGrid(){
  const grid = $('#homeGrid'); if(!grid) return;
  const list = window.PRODUCTS.slice(0, 8);
  grid.innerHTML = list.map(p => `
    <div class="col-6 col-md-4 col-lg-3">
      <div class="card h-100">
        <div class="ratio ratio-1x1">
          <a href="producto.html?id=${p.id}" class="d-block">
            <img src="${p.img}" alt="${p.nombre}" class="p-3" style="object-fit:contain;" loading="lazy"
              onerror="this.onerror=null;this.src='https://via.placeholder.com/500x500?text=${encodeURIComponent(p.nombre)}';">
          </a>
        </div>
        <div class="card-body d-flex flex-column">
          <strong class="mb-1">${p.nombre}</strong>
          <span class="mb-2 prod-price">${money(p.precio)}</span>
          <button class="btn btn-primary mt-auto" data-add="${p.id}">Añadir al carrito</button>
        </div>
      </div>
    </div>
  `).join('');

  $$('#homeGrid [data-add]').forEach(btn=>{
    btn.addEventListener('click', ()=> Cart.add(btn.dataset.add, 1));
  });
}

function renderCategoria(){
  if(document.body.dataset.page !== 'categoria') return;

  const params = new URLSearchParams(location.search);
  const slug = params.get('cat') || '';
  const info = CATEGORY_INFO[slug] || {
    name: 'Categoría destacada',
    description: 'Explora productos seleccionados y añádelos a tu carrito con un solo clic.',
    summary: 'Visita el catálogo para descubrir aún más ofertas y variedades.',
    badge: 'Ofertas disponibles'
  };

  $('#categoryTitle')?.textContent = info.name;
  $('#categoryDescription')?.textContent = info.description;
  $('#categorySummary')?.textContent = info.summary;
  $('#categoryBadge')?.textContent = info.badge;
  if(info.name) document.title = `3A - ${info.name}`;

  const grid = $('#categoryProducts');
  const empty = $('#categoryEmpty');
  if(!grid || !empty) return;

  const list = window.PRODUCTS.filter(p => p.categoria === slug);
  if(list.length === 0){
    grid.innerHTML = '';
    empty.classList.remove('d-none');
    return;
  }

  empty.classList.add('d-none');
  grid.innerHTML = list.map(p => `
    <div class="col-6 col-md-4 col-lg-3">
      <div class="card h-100">
        <div class="ratio ratio-1x1">
          <a href="producto.html?id=${p.id}" class="d-block">
            <img src="${p.img}" alt="${p.nombre}" class="p-3" style="object-fit:contain;" loading="lazy"
              onerror="this.onerror=null;this.src='https://via.placeholder.com/500x500?text=${encodeURIComponent(p.nombre)}';">
          </a>
        </div>
        <div class="card-body d-flex flex-column">
          <strong class="mb-1">${p.nombre}</strong>
          <span class="mb-2 prod-price">${money(p.precio)}</span>
          <p class="text-muted small mb-3">${p.desc}</p>
          <div class="d-grid gap-2 mt-auto">
            <a href="producto.html?id=${p.id}" class="btn btn-outline-primary">Ver detalle</a>
            <button class="btn btn-primary" data-add="${p.id}">Añadir al carrito</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  $$('#categoryProducts [data-add]').forEach(btn=>{
    btn.addEventListener('click', ()=> Cart.add(btn.dataset.add, 1));
  });
}

// ====== CATÁLOGO ======
function renderCatalogo(){
  const grid = $('#catalogoGrid'); if(!grid) return;
  const q = ($('#searchInput')?.value || '').toLowerCase().trim();
  const sort = $('#sortSelect')?.value || 'precio-asc';
  let arr = [...window.PRODUCTS];

  if(q){
    arr = arr.filter(p => p.nombre.toLowerCase().includes(q) || p.categoria.toLowerCase().includes(q));
  }
  if (sort === 'precio-asc') arr.sort((a,b)=>a.precio-b.precio);
  if (sort === 'precio-desc') arr.sort((a,b)=>b.precio-a.precio);
  if (sort === 'nombre-asc') arr.sort((a,b)=>a.nombre.localeCompare(b.nombre,'es'));

  grid.innerHTML = arr.map(p => `
    <div class="col-6 col-md-4 col-lg-3">
      <div class="card h-100">
        <div class="ratio ratio-1x1">
          <a href="producto.html?id=${p.id}" class="d-block">
            <img src="${p.img}" alt="${p.nombre}" class="p-3" style="object-fit:contain;" loading="lazy"
              onerror="this.onerror=null;this.src='https://via.placeholder.com/500x500?text=${encodeURIComponent(p.nombre)}';">
          </a>
        </div>
        <div class="card-body d-flex flex-column">
          <strong class="mb-1">${p.nombre}</strong>
          <span class="mb-2 prod-price">${money(p.precio)}</span>
          <button class="btn btn-primary mt-auto" data-add="${p.id}">Añadir al carrito</button>
        </div>
      </div>
    </div>
  `).join('');

  $$('#catalogoGrid [data-add]').forEach(btn=>{
    btn.addEventListener('click', ()=> Cart.add(btn.dataset.add, 1));
  });
}
function hookCatalogo(){
  if(!$('#catalogoGrid')) return;
  $('#searchInput')?.addEventListener('input', renderCatalogo);
  $('#sortSelect')?.addEventListener('change', renderCatalogo);
  renderCatalogo();
}

// ====== PRODUCTO ======
function renderProducto(){
  if(document.body.dataset.page !== 'producto') return;
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const p = getProductById(id);
  const host = $('#productoView');
  if(!p || !host){ host.innerHTML = '<p class="text-danger">Producto no encontrado.</p>'; return; }
  $('#pTitle').textContent = p.nombre;

  host.innerHTML = `
    <div class="row g-4">
      <div class="col-12 col-md-6">
        <div class="card border-0 shadow-sm rounded-4">
          <div class="card-body">
            <div class="ratio ratio-4x3">
              <img src="${p.img}" alt="${p.nombre}" style="object-fit:contain;" loading="lazy"
                onerror="this.onerror=null;this.src='https://via.placeholder.com/800x600?text=${encodeURIComponent(p.nombre)}';">
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="card border-0 shadow-sm rounded-4">
          <div class="card-body">
            <h2 class="h4">${p.nombre}</h2>
            <p class="text-muted mb-3">${p.desc}</p>
            <div class="d-flex align-items-center gap-3 mb-3">
              <strong class="fs-4" id="unitPrice">${money(p.precio)}</strong>
              <div class="input-group qty-input">
                <button class="btn btn-outline-secondary" type="button" id="minusBtn">–</button>
                <input id="qtyInput" type="number" class="form-control" value="1" min="1" />
                <button class="btn btn-outline-secondary" type="button" id="plusBtn">+</button>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center mb-3">
              <span>Total:</span>
              <strong class="fs-4" id="totalPrice">${money(p.precio)}</strong>
            </div>
            <div class="d-grid gap-2">
              <button id="addBtn" class="btn btn-primary btn-lg">Agregar al carrito</button>
              <a class="btn btn-outline-secondary" href="catalogo.html">Volver al catálogo</a>
            </div>
          </div>
        </div>
      </div>
    </div>`;

  const qty = $('#qtyInput');
  const total = $('#totalPrice');
  const unit = p.precio;

  function recalc(){ const n = Math.max(1, parseInt(qty.value||'1',10)); qty.value = n; total.textContent = money(n*unit); }
  $('#plusBtn').addEventListener('click', ()=>{ qty.value = +qty.value + 1; recalc(); });
  $('#minusBtn').addEventListener('click', ()=>{ qty.value = Math.max(1, +qty.value - 1); recalc(); });
  qty.addEventListener('input', recalc);
  $('#addBtn').addEventListener('click', ()=>{ Cart.add(p.id, Math.max(1, +qty.value||1)); alert('Agregado al carrito'); });
}

// ====== UBICACIÓN: Google Maps ======
function initMap3A() {
  const center = { lat: -11.925381, lng: -77.062886 }; // Lima (ejemplo)
  const el = document.getElementById('map');
  if (!el) return;

  const map = new google.maps.Map(el, {
    center, zoom: 16, mapTypeControl: false, streetViewControl: false, fullscreenControl: false
  });

  const marker = new google.maps.Marker({ position: center, map, title: 'TIENDAS 3A', animation: google.maps.Animation.DROP });
  const info = new google.maps.InfoWindow({
    content: `
      <div style="font-family:Inter,Arial">
        <h6 style="margin:.25rem 0">TIENDAS 3A</h6>
        <div><small>Av. Micaela Bastidas – Lima</small></div>
        <div><small>Horario: Lun–Dom 8:00–21:00</small></div>
        <div style="margin-top:.35rem;"><a target="_blank" href="https://www.google.com/maps/search/?api=1&query=-12.046374,-77.042793">Abrir en Google Maps</a></div>
      </div>`
  });
  info.open(map, marker);
  marker.addEventListener('click', () => info.open(map, marker));
}
window.initMap3A = initMap3A; // llamado por ubicacion.html

// ====== CLIENTES: flujo registro/login ======
function initClientes(){
  if(document.body.dataset.page !== 'clientes') return;

  const stepWelcome = $('#stepWelcome');
  const stepWantsLogin = $('#stepWantsLogin');
  const panelRegister = $('#panelRegister');
  const panelLogin = $('#panelLogin');

  const show = (el)=> el.classList.remove('d-none');
  const hide = (el)=> el.classList.add('d-none');

  $('#btnNewYes').addEventListener('click', ()=>{ hide(stepWelcome); hide(stepWantsLogin); show(panelRegister); });
  $('#btnNewNo').addEventListener('click',  ()=>{ hide(stepWelcome); show(stepWantsLogin); });

  $('#btnGotoLogin').addEventListener('click', ()=>{ hide(stepWantsLogin); show(panelLogin); });
  $('#btnCancelLogin').addEventListener('click', ()=>{ hide(stepWantsLogin); show(stepWelcome); });

  // Registro (local)
  const regForm = $('#registerForm');
  regForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const fd = new FormData(regForm);
    const data = {
      nombres:   fd.get('nombres')?.toString().trim(),
      apellidos: fd.get('apellidos')?.toString().trim(),
      fecha_nac: fd.get('fecha_nac')?.toString(),
      lugar_nac: fd.get('lugar_nac')?.toString().trim(),
      telefono:  fd.get('telefono')?.toString().trim(),
      email:     fd.get('email')?.toString().trim(),
      genero:    fd.get('genero')?.toString(),
      username:  fd.get('username')?.toString().trim(),
      pass:      fd.get('pass')?.toString(),
      ofertas:   fd.get('ofertas') === 'on'
    };

    // Validaciones mínimas
    if(Object.values(data).some(v => v === '' || v == null)) return alert('Completa todos los campos.');
    if(!/^[0-9]{7,15}$/.test(data.telefono)) return alert('El teléfono debe tener entre 7 y 15 dígitos.');
    if(data.username.length < 4) return alert('El usuario debe tener al menos 4 caracteres.');
    if(data.pass.length < 6) return alert('La contraseña debe tener al menos 6 caracteres.');

    const users = JSON.parse(localStorage.getItem('3a_users') || '[]');
    if(users.some(u => u.username === data.username)) return alert('Ese usuario ya existe.');
    if(users.some(u => u.email === data.email)) return alert('Ya existe una cuenta con ese correo.');

    users.push(data);
    localStorage.setItem('3a_users', JSON.stringify(users));
    alert('Registro exitoso. ¡Bienvenido a 3A!');
    regForm.reset();
    hide(panelRegister); show(panelLogin);
  });

  // Login (local)
  const loginForm = $('#loginForm');
  loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const fd = new FormData(loginForm);
    const username = fd.get('username')?.toString().trim();
    const pass = fd.get('pass')?.toString();
    const remember = $('#rememberMe')?.checked;

    if(!username || !pass) return alert('Completa usuario y contraseña.');

    const users = JSON.parse(localStorage.getItem('3a_users') || '[]');
    const ok = users.find(u => u.username === username && u.pass === pass);
    if(!ok) return alert('Credenciales inválidas');

    if(remember){
      localStorage.setItem('3a_session', JSON.stringify({ username }));
    }
    alert(`¡Hola de nuevo, ${ok.nombres}!`);
    loginForm.reset();
  });
}

// ====== Init global ======
document.addEventListener('DOMContentLoaded', ()=>{
  // AOS si existe (solo en index)
  if(window.AOS) AOS.init({ once:true, duration:600 });

  renderOffcanvasCart(); // primer render
  Cart.events.on('cart:updated', renderOffcanvasCart);

  if(document.body.dataset.page === 'home'){ buildSwiper(); renderHomeGrid(); }
  if(document.body.dataset.page === 'catalogo'){ hookCatalogo(); }
  if(document.body.dataset.page === 'producto'){ renderProducto(); }
  if(document.body.dataset.page === 'categoria'){ renderCategoria(); }
  if(document.body.dataset.page === 'clientes'){ initClientes(); }
});
