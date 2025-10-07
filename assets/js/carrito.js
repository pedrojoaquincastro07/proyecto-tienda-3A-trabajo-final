(function(){
  const KEY = '3a_cart'; // [{id, qty}]
  function load(){ try{ return JSON.parse(localStorage.getItem(KEY) || '[]'); }catch{ return []; } }
  function save(cart){ localStorage.setItem(KEY, JSON.stringify(cart)); }

  function add(id, qty=1){
    const cart = load();
    const item = cart.find(i => i.id === id);
    if(item) item.qty += qty; else cart.push({ id, qty });
    save(cart); events.emit('cart:updated');
  }
  function update(id, qty){
    let cart = load();
    cart = cart.map(i => i.id===id ? ({...i, qty: Math.max(1, qty)}) : i);
    save(cart); events.emit('cart:updated');
  }
  function remove(id){ save(load().filter(i => i.id !== id)); events.emit('cart:updated'); }
  function clear(){ save([]); events.emit('cart:updated'); }
  function count(){ return load().reduce((a,b)=>a+b.qty,0); }
  function items(){
    return load().map(i => ({...i, product: getProductById(i.id)})).filter(x => !!x.product);
  }
  function totals(){
    const its = items();
    const subtotal = its.reduce((s, it)=> s + it.product.precio * it.qty, 0);
    const igv = subtotal * 0.18;
    const total = subtotal + igv;
    return { subtotal, igv, total };
  }

  // Micro event bus
  const events = {
    _h: {},
    on: (e, fn)=> ((events._h[e] ||= []).push(fn)),
    emit: (e, p)=> (events._h[e]||[]).forEach(fn=>fn(p))
  };

  window.Cart = { add, update, remove, clear, count, items, totals, events };
})();
