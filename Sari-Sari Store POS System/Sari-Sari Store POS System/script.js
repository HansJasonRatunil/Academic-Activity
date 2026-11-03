/* ---------- PRODUCT CATALOG (array, no database) ---------- */
const groceryItems = [
  { product_id: 1, product_name: "Dried Mangoes (200g)", product_price: 180, category: "Snacks" },
  { product_id: 2, product_name: "Banana Chips (200g)", product_price: 120, category: "Snacks" },
  { product_id: 3, product_name: "Tablea Chocolate (250g)", product_price: 200, category: "Beverages" },
  { product_id: 4, product_name: "Coconut Oil (500ml)", product_price: 180, category: "Pantry" },
  { product_id: 5, product_name: "Mango Jam (250g)", product_price: 160, category: "Pantry" },
  { product_id: 6, product_name: "Peanut Brittle (200g)", product_price: 150, category: "Snacks" },
  { product_id: 7, product_name: "Cashew Nuts (250g)", product_price: 280, category: "Snacks" },
  { product_id: 8, product_name: "Philippine Coffee Beans (250g)", product_price: 320, category: "Beverages" },
  { product_id: 9, product_name: "Native Vinegar (500ml)", product_price: 120, category: "Pantry" },
  { product_id: 10, product_name: "Philippine Honey (250ml)", product_price: 250, category: "Pantry" },
  { product_id: 11, product_name: "Coconut Sugar (500g)", product_price: 180, category: "Pantry" },
  { product_id: 12, product_name: "Rice Crackers (200g)", product_price: 100, category: "Snacks" },
  { product_id: 13, product_name: "Salted Fish (Danggit, 250g)", product_price: 220, category: "Meat & Seafood" },
  { product_id: 14, product_name: "Longganisa (Frozen, 500g)", product_price: 280, category: "Meat & Seafood" },
  { product_id: 15, product_name: "Tocino (Frozen, 500g)", product_price: 300, category: "Meat & Seafood" },
  { product_id: 16, product_name: "Chicharon (100g)", product_price: 120, category: "Snacks" },
  { product_id: 17, product_name: "Pandesal Pack (12 pcs)", product_price: 80, category: "Bakery" },
  { product_id: 18, product_name: "Native Brown Rice (1kg)", product_price: 90, category: "Rice & Grains" },
  { product_id: 19, product_name: "White Rice (1kg)", product_price: 70, category: "Rice & Grains" },
  { product_id: 20, product_name: "Corn Coffee (250g)", product_price: 150, category: "Beverages" },
  { product_id: 21, product_name: "Coconut Water (1L)", product_price: 100, category: "Beverages" },
  { product_id: 22, product_name: "Calamansi Juice (1L)", product_price: 120, category: "Beverages" },
  { product_id: 23, product_name: "Guava Jelly (250g)", product_price: 160, category: "Pantry" },
  { product_id: 24, product_name: "Bagoong (250g)", product_price: 90, category: "Pantry" },
  { product_id: 25, product_name: "Fish Sauce (Patis, 500ml)", product_price: 110, category: "Pantry" },
  { product_id: 26, product_name: "Soy Sauce (500ml)", product_price: 95, category: "Pantry" },
  { product_id: 27, product_name: "Native Salt (250g)", product_price: 50, category: "Pantry" },
  { product_id: 28, product_name: "Coconut Milk Powder (200g)", product_price: 140, category: "Pantry" },
  { product_id: 29, product_name: "Instant Noodles (Pack of 6)", product_price: 75, category: "Pantry" },
  { product_id: 30, product_name: "Native Cheese (Kesong Puti, 250g)", product_price: 180, category: "Dairy" },
  { product_id: 31, product_name: "Eggs (Dozen)", product_price: 90, category: "Dairy" },
  { product_id: 32, product_name: "Fresh Tilapia (1kg)", product_price: 160, category: "Meat & Seafood" },
  { product_id: 33, product_name: "Fresh Bangus (Milkfish, 1kg)", product_price: 180, category: "Meat & Seafood" },
  { product_id: 34, product_name: "Fresh Chicken (1kg)", product_price: 200, category: "Meat & Seafood" },
  { product_id: 35, product_name: "Fresh Pork (1kg)", product_price: 280, category: "Meat & Seafood" },
  { product_id: 36, product_name: "Fresh Beef (1kg)", product_price: 350, category: "Meat & Seafood" },
  { product_id: 37, product_name: "Native Vegetables Basket", product_price: 250, category: "Produce" },
  { product_id: 38, product_name: "Bananas (1kg)", product_price: 60, category: "Produce" },
  { product_id: 39, product_name: "Mangoes (1kg)", product_price: 120, category: "Produce" },
  { product_id: 40, product_name: "Papaya (1kg)", product_price: 70, category: "Produce" },
  { product_id: 41, product_name: "Pineapple (Whole)", product_price: 90, category: "Produce" },
  { product_id: 42, product_name: "Coconut (Whole)", product_price: 50, category: "Produce" },
  { product_id: 43, product_name: "Native Peanuts (250g)", product_price: 100, category: "Snacks" },
  { product_id: 44, product_name: "Camote (Sweet Potato, 1kg)", product_price: 80, category: "Produce" },
  { product_id: 45, product_name: "Ube Halaya (250g)", product_price: 180, category: "Desserts" },
  { product_id: 46, product_name: "Leche Flan (Whole)", product_price: 250, category: "Desserts" },
  { product_id: 47, product_name: "Bibingka (Whole)", product_price: 200, category: "Bakery" },
  { product_id: 48, product_name: "Puto (Dozen)", product_price: 120, category: "Bakery" },
  { product_id: 49, product_name: "Kakanin Sampler Pack", product_price: 300, category: "Desserts" },
  { product_id: 50, product_name: "Native Chocolate Drink (Sikwate, 250ml)", product_price: 90, category: "Beverages" }
];

/* ---------- Discount rules ---------- */
const DISCOUNT_THRESHOLD = 1000; // ₱
const BULK_DISCOUNT_RATE = 0.05;
const TYPE_DISCOUNT_RATES = {
  regular: 0,
  senior: 0.15,
  suki: 0.10
};
const TYPE_LABELS = {
  regular: 'Bulk Discount (5%)',
  senior: 'Senior Discount (15%)',
  suki: 'Suki Discount (10%)'
};

function computeDiscount(subtotal){
  return subtotal > DISCOUNT_THRESHOLD ? subtotal * BULK_DISCOUNT_RATE : 0;
}
// Determine the best discount to apply (bulk vs customer type)
function computeBestDiscount(subtotal, customerType){
  const bulkAmount = computeDiscount(subtotal);
  const typeAmount = subtotal * (TYPE_DISCOUNT_RATES[customerType] || 0);

  if (customerType !== 'regular' && typeAmount >= bulkAmount && typeAmount > 0){
    return { amount: typeAmount, label: TYPE_LABELS[customerType] };
  }
  if (bulkAmount > 0){
    return { amount: bulkAmount, label: TYPE_LABELS.regular };
  }
  return { amount: 0, label: '' };
}

// ------------ App state ------------- //
let currentCashier = null;
let currentOrder = [];
const transactions = [];
let transactionCounter = 1;
let lastCheckout = null; 


// DOM references to key elements that will be manipulated throughout the app
const grid = document.getElementById('grid');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const countLabel = document.getElementById('countLabel');
const categoryFilters = document.getElementById('categoryFilters');
let selectedCategory = 'all';

const cashierBadge = document.getElementById('cashierBadge');
const cashierAvatar = document.getElementById('cashierAvatar');
const cashierNameEl = document.getElementById('cashierName');
const cashierSwitchBtn = document.getElementById('cashierSwitchBtn');
const cashierOverlay = document.getElementById('cashierOverlay');
const cashierClose = document.getElementById('cashierClose');
const cashierNameInput = document.getElementById('cashierNameInput');
const cashierLoginConfirm = document.getElementById('cashierLoginConfirm');

const tabPos = document.getElementById('tabPos');
const tabRecords = document.getElementById('tabRecords');
const tabRecordsCount = document.getElementById('tabRecordsCount');
const posView = document.getElementById('posView');
const recordsViewEl = document.getElementById('recordsView');
let currentView = 'pos';

const cartList = document.getElementById('cartList');
const cartCount = document.getElementById('cartCount');
const cartSubtotalEl = document.getElementById('cartSubtotal');
const cartDiscountRow = document.getElementById('cartDiscountRow');
const cartDiscountEl = document.getElementById('cartDiscount');
const cartTotalEl = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');

const mobileCartBar = document.getElementById('mobileCartBar');
const mcbCount = document.getElementById('mcbCount');
const mcbTotal = document.getElementById('mcbTotal');
const mcbCheckoutBtn = document.getElementById('mcbCheckoutBtn');

const txnTableBody = document.getElementById('txnTableBody');
const txnCount = document.getElementById('txnCount');
const statTotalSales = document.getElementById('statTotalSales');
const statTopProduct = document.getElementById('statTopProduct');
const statCustomersToday = document.getElementById('statCustomersToday');

const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');

const checkoutOverlay = document.getElementById('checkoutOverlay');
const checkoutBody = document.getElementById('checkoutBody');
const checkoutClose = document.getElementById('checkoutClose');
const customerNameInput = document.getElementById('customerNameInput');
const typePills = document.querySelectorAll('#typePills .type-pill');
let selectedCustomerType = 'regular';
const checkoutSubtotal = document.getElementById('checkoutSubtotal');
const checkoutDiscountRow = document.getElementById('checkoutDiscountRow');
const checkoutDiscountLabel = document.getElementById('checkoutDiscountLabel');
const checkoutDiscount = document.getElementById('checkoutDiscount');
const checkoutTotal = document.getElementById('checkoutTotal');
const payInput = document.getElementById('payInput');
const changeDue = document.getElementById('changeDue');
const changeRow = document.querySelector('.change-row');
const payError = document.getElementById('payError');
const checkoutConfirm = document.getElementById('checkoutConfirm');

const confirmBody = document.getElementById('confirmBody');
const confirmChangeText = document.getElementById('confirmChangeText');
const confirmDone = document.getElementById('confirmDone');
const viewReceiptBtn = document.getElementById('viewReceiptBtn');

const receiptOverlay = document.getElementById('receiptOverlay');
const receiptPaper = document.getElementById('receiptPaper');
const printArea = document.getElementById('printArea');
const receiptClose = document.getElementById('receiptClose');
const printReceiptBtn = document.getElementById('printReceiptBtn');

// Format a number as currency (₱)
function peso(n){ return '₱' + n.toFixed(2); }

/* ---------- Cashier login (name only, no password) ---------- */
function openCashierModal(){
  cashierNameInput.value = currentCashier || '';
  cashierOverlay.classList.add('show');
  cashierNameInput.focus();
  cashierClose.style.visibility = currentCashier ? 'visible' : 'hidden';
}
function closeCashierModal(){
  if (!currentCashier) return; // must log in before using the POS
  cashierOverlay.classList.remove('show');
}
function renderCashierBadge(){
  if (currentCashier){
    cashierAvatar.textContent = currentCashier.trim().charAt(0) || '?';
    cashierNameEl.textContent = currentCashier;
    cashierSwitchBtn.textContent = 'Switch';
  } else {
    cashierAvatar.textContent = '?';
    cashierNameEl.textContent = 'Not logged in';
    cashierSwitchBtn.textContent = 'Log in';
  }
}

cashierSwitchBtn.addEventListener('click', openCashierModal);
cashierClose.addEventListener('click', closeCashierModal);
cashierLoginConfirm.addEventListener('click', () => {
  const name = cashierNameInput.value.trim();
  if (!name) return;
  currentCashier = name;
  renderCashierBadge();
  cashierOverlay.classList.remove('show');
});
cashierNameInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') cashierLoginConfirm.click();
});

/* ---------- Render product grid (name search) ---------- */
function cardQtyRowHTML(productId, qty){
  return qty > 0 ? `
    <div class="cq-stepper">
      <button class="cq-btn" data-act="dec" data-id="${productId}">−</button>
      <span class="cq-count">${qty}</span>
      <button class="cq-btn" data-act="inc" data-id="${productId}">+</button>
    </div>
  ` : `
    <button class="cq-add" data-act="add" data-id="${productId}">+ Add</button>
  `;
}
// Bind the click events (add, increment, decrement)
function bindQtyRowEvents(scope){
  scope.querySelectorAll('[data-act="add"], [data-act="inc"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(Number(btn.dataset.id));
    });
  });
  scope.querySelectorAll('[data-act="dec"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      changeCartQty(Number(btn.dataset.id), -1);
    });
  });
}
// Category filter
function renderCategoryFilters(){
  const categories = ['all', ...new Set(groceryItems.map(p => p.category))];

  while (categoryFilters.firstChild){
    categoryFilters.removeChild(categoryFilters.firstChild);
  }

  categories.forEach(cat => {
    const pill = document.createElement('button');
    pill.type = 'button';
    pill.className = 'category-pill' + (cat === selectedCategory ? ' active' : '');
    pill.textContent = cat === 'all' ? 'All' : cat;
    pill.dataset.category = cat;
    pill.addEventListener('click', () => {
      selectedCategory = cat;
      categoryFilters.querySelectorAll('.category-pill').forEach(p => {
        p.classList.toggle('active', p.dataset.category === cat);
      });
      renderGrid();
    });
    categoryFilters.appendChild(pill);
  });
}
function renderGrid(){
  const q = searchInput.value.trim().toLowerCase();
  const list = groceryItems.filter(p => {
    const matchesSearch = q === "" ||
      p.product_name.toLowerCase().includes(q) ||
      String(p.product_id).includes(q);
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  emptyState.style.display = list.length === 0 ? 'block' : 'none';
  countLabel.textContent = `${list.length} product${list.length === 1 ? '' : 's'}`;

  grid.innerHTML = list.map((p, i) => {
    const cartItem = currentOrder.find(c => c.product_id === p.product_id);
    const qty = cartItem ? cartItem.quantity : 0;
    return `
    <div class="card ${qty > 0 ? 'in-cart' : ''}" data-id="${p.product_id}" style="--i:${Math.min(i, 24)}">
      <span class="id">#${String(p.product_id).padStart(3, '0')}</span>
      <span class="name">${p.product_name}</span>
      <span class="price">${peso(p.product_price)}</span>
      <div class="card-qty-row">${cardQtyRowHTML(p.product_id, qty)}</div>
    </div>
  `;
  }).join('');

  grid.querySelectorAll('.card').forEach(el => {
    el.addEventListener('click', () => addToCart(Number(el.dataset.id)));
  });
  bindQtyRowEvents(grid);
}

function updateCardQtyUI(productId){
  const card = grid.querySelector(`.card[data-id="${productId}"]`);
  if (!card) return;
  const cartItem = currentOrder.find(c => c.product_id === productId);
  const qty = cartItem ? cartItem.quantity : 0;
  card.classList.toggle('in-cart', qty > 0);
  const row = card.querySelector('.card-qty-row');
  row.innerHTML = cardQtyRowHTML(productId, qty);
  bindQtyRowEvents(row);
}

/* ---------- Current Order (cart) ---------- */
let lastAddedId = null;

function addToCart(productId){
  const product = groceryItems.find(p => p.product_id === productId);
  const existing = currentOrder.find(i => i.product_id === productId);
  if (existing){
    existing.quantity += 1;
  } else {
    currentOrder.push({
      product_id: product.product_id,
      product_name: product.product_name,
      price: product.product_price,
      quantity: 1
    });
  }
  lastAddedId = productId;
  renderCart();
  updateCardQtyUI(productId);
}

function changeCartQty(productId, delta){
  const item = currentOrder.find(i => i.product_id === productId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0){
    currentOrder = currentOrder.filter(i => i.product_id !== productId);
  }
  lastAddedId = productId;
  renderCart();
  updateCardQtyUI(productId);
}

function removeFromCart(productId){
  currentOrder = currentOrder.filter(i => i.product_id !== productId);
  renderCart();
  updateCardQtyUI(productId);
}

function getCartSubtotal(){
  return currentOrder.reduce((sum, i) => sum + i.price * i.quantity, 0);
}

function renderCart(){
  cartCount.textContent = `${currentOrder.reduce((s,i)=>s+i.quantity,0)} items`;

  if (currentOrder.length === 0){
    cartList.innerHTML = `<div class="log-empty">Tap a product to add it here.</div>`;
  } else {
    cartList.innerHTML = currentOrder.map(i => `
      <div class="cart-item ${i.product_id === lastAddedId ? 'bump' : ''}" data-id="${i.product_id}">
        <div>
          <span class="ci-name">${i.product_name}</span>
          <span class="ci-price">#${String(i.product_id).padStart(3,'0')} · ${peso(i.price)} each</span>
        </div>
        <div class="cart-qty">
          <button data-act="dec" data-id="${i.product_id}">−</button>
          <span>${i.quantity}</span>
          <button data-act="inc" data-id="${i.product_id}">+</button>
        </div>
        <span class="ci-subtotal">${peso(i.price * i.quantity)}</span>
        <button class="ci-remove" data-act="rm" data-id="${i.product_id}">✕</button>
      </div>
    `).join('');

    cartList.querySelectorAll('[data-act="inc"]').forEach(b => b.addEventListener('click', () => changeCartQty(Number(b.dataset.id), 1)));
    cartList.querySelectorAll('[data-act="dec"]').forEach(b => b.addEventListener('click', () => changeCartQty(Number(b.dataset.id), -1)));
    cartList.querySelectorAll('[data-act="rm"]').forEach(b => b.addEventListener('click', () => removeFromCart(Number(b.dataset.id))));
  }

  const subtotal = getCartSubtotal();
  const discount = computeDiscount(subtotal);
  const total = subtotal - discount;

  cartSubtotalEl.textContent = peso(subtotal);
  if (discount > 0){
    cartDiscountRow.style.display = '';
    cartDiscountEl.textContent = '−' + peso(discount);
  } else {
    cartDiscountRow.style.display = 'none';
  }
  cartTotalEl.textContent = peso(total);
  cartTotalEl.classList.remove('bump');
  void cartTotalEl.offsetWidth;
  cartTotalEl.classList.add('bump');
  checkoutBtn.disabled = currentOrder.length === 0;

  // Keep the mobile sticky bar in sync
  const itemCount = currentOrder.reduce((s,i)=>s+i.quantity,0);
  mcbCount.textContent = `${itemCount} item${itemCount === 1 ? '' : 's'}`;
  mcbTotal.textContent = peso(total);
  mcbTotal.classList.remove('bump');
  void mcbTotal.offsetWidth;
  mcbTotal.classList.add('bump');
  mobileCartBar.classList.toggle('show', currentView === 'pos' && currentOrder.length > 0);
}

/* ---------- Render Transaction Records (table view) ---------- */
function renderTransactionLog(){
  txnCount.textContent = `${transactions.length} recorded`;
  tabRecordsCount.textContent = transactions.length;

  // Clear out any existing rows first
  while (txnTableBody.firstChild){
    txnTableBody.removeChild(txnTableBody.firstChild);
  }

  if (transactions.length === 0){
    const emptyRow = document.createElement('tr');
    const emptyCell = document.createElement('td');
    emptyCell.colSpan = 11;
    emptyCell.style.textAlign = 'center';
    emptyCell.style.color = 'var(--muted)';
    emptyCell.style.padding = '20px';
    emptyCell.textContent = 'No transactions yet.';
    emptyRow.appendChild(emptyCell);
    txnTableBody.appendChild(emptyRow);
  } else {
    const reversed = transactions.slice().reverse();

    reversed.forEach(t => {
      const row = document.createElement('tr');

      const idCell = document.createElement('td');
      idCell.textContent = `#${String(t.transaction_id).padStart(3, '0')}`;
      row.appendChild(idCell);

      const dateCell = document.createElement('td');
      dateCell.textContent = `${t.date.toLocaleDateString()} ${t.date.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}`;
      row.appendChild(dateCell);

      const productCell = document.createElement('td');
      productCell.textContent = t.product_name;
      row.appendChild(productCell);

      const qtyCell = document.createElement('td');
      qtyCell.className = 'num';
      qtyCell.textContent = t.quantity;
      row.appendChild(qtyCell);

      const priceCell = document.createElement('td');
      priceCell.className = 'num';
      priceCell.textContent = peso(t.price);
      row.appendChild(priceCell);

      const subtotalCell = document.createElement('td');
      subtotalCell.className = 'num';
      subtotalCell.textContent = peso(t.subtotal);
      row.appendChild(subtotalCell);

      const discCell = document.createElement('td');
      discCell.className = 'num disc';
      discCell.title = t.discount_label || '';
      discCell.textContent = t.discount_amount > 0 ? '−' + peso(t.discount_amount) : '—';
      row.appendChild(discCell);

      const paidCell = document.createElement('td');
      paidCell.className = 'num';
      paidCell.textContent = peso(t.amount_paid);
      row.appendChild(paidCell);

      const changeCell = document.createElement('td');
      changeCell.className = 'num';
      changeCell.textContent = peso(t.change_given);
      row.appendChild(changeCell);

      const customerCell = document.createElement('td');
      customerCell.textContent = t.customer_name || '—';
      row.appendChild(customerCell);

      const cashierCell = document.createElement('td');
      cashierCell.textContent = t.cashier_name || '—';
      row.appendChild(cashierCell);

      txnTableBody.appendChild(row);
    });
  }

  renderReport();
}

/* ---------- Reporting Features ---------- */
function renderReport(){
  const totalSales = transactions.reduce((sum, t) => sum + t.subtotal, 0);
  statTotalSales.textContent = peso(totalSales);
  statTotalSales.classList.remove('bump');
  void statTotalSales.offsetWidth;
  statTotalSales.classList.add('bump');

  const isToday = (d) => {
    const now = new Date();
    return d.getFullYear() === now.getFullYear() &&
      d.getMonth() === now.getMonth() &&
      d.getDate() === now.getDate();
  };
  const customersToday = new Set(
    transactions.filter(t => isToday(t.date)).map(t => t.date.getTime())
  ).size;
  statCustomersToday.textContent = customersToday;
  // Clear out any existing content first
  while (statTopProduct.firstChild){
    statTopProduct.removeChild(statTopProduct.firstChild);
  }

  if (transactions.length === 0){
    statTopProduct.textContent = '—';
    return;
  }
// Compute the total quantity sold per product
  const qtyByProduct = {};
  transactions.forEach(t => {
    if (!qtyByProduct[t.product_id]){
      qtyByProduct[t.product_id] = { name: t.product_name, qty: 0 };
    }
    qtyByProduct[t.product_id].qty += t.quantity;
  });

  let topProduct = null;
  Object.values(qtyByProduct).forEach(entry => {
    if (!topProduct || entry.qty > topProduct.qty) topProduct = entry;
  });

  const nameNode = document.createTextNode(topProduct.name);
  statTopProduct.appendChild(nameNode);

  const qtySpan = document.createElement('span');
  qtySpan.className = 'stat-qty';
  qtySpan.textContent = `${topProduct.qty} sold`;
  statTopProduct.appendChild(qtySpan);
}

/* ---------- View switching (POS vs Transaction Records) ---------- */
function switchView(view){
  currentView = view;
  const isRecords = view === 'records';
  posView.style.display = isRecords ? 'none' : '';
  recordsViewEl.style.display = isRecords ? '' : 'none';
  tabPos.classList.toggle('active', !isRecords);
  tabRecords.classList.toggle('active', isRecords);
  mobileCartBar.classList.toggle('show', !isRecords && currentOrder.length > 0);
}
tabPos.addEventListener('click', () => switchView('pos'));
tabRecords.addEventListener('click', () => switchView('records'));

/* ---------- Toast ---------- */
function showToast(msg){
  toastMsg.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

/* ---------- Checkout Process (with discount + customer name) ---------- */
function refreshCheckoutTotals(){
  const subtotal = getCartSubtotal();
  const { amount: discount, label } = computeBestDiscount(subtotal, selectedCustomerType);
  const total = subtotal - discount;

  checkoutSubtotal.textContent = peso(subtotal);
  if (discount > 0){
    checkoutDiscountRow.style.display = '';
    checkoutDiscountLabel.textContent = label;
    checkoutDiscount.textContent = '−' + peso(discount);
  } else {
    checkoutDiscountRow.style.display = 'none';
  }
  checkoutTotal.textContent = peso(total);
  return { subtotal, discount, total };
}

function openCheckoutModal(){
  if (currentOrder.length === 0) return;
  checkoutBody.style.display = '';
  confirmBody.style.display = 'none';

  selectedCustomerType = 'regular';
  typePills.forEach(btn => btn.classList.toggle('active', btn.dataset.type === 'regular'));

  refreshCheckoutTotals();

  customerNameInput.value = '';
  payInput.value = '';
  changeDue.textContent = peso(0);
  payError.classList.remove('show');
  changeRow.classList.add('insufficient');
  checkoutConfirm.disabled = true;
  checkoutOverlay.classList.add('show');
  payInput.focus();
}

function closeCheckoutModal(){
  checkoutOverlay.classList.remove('show');
}

function updateChangePreview(){
  const { total } = refreshCheckoutTotals();
  const paid = parseFloat(payInput.value);
  const validPaid = !isNaN(paid) && paid >= 0;
  const change = validPaid ? paid - total : -total;

  if (validPaid && paid >= total){
    changeDue.textContent = peso(change);
    changeRow.classList.remove('insufficient');
    payError.classList.remove('show');
    checkoutConfirm.disabled = false;
  } else {
    changeDue.textContent = peso(0);
    changeRow.classList.add('insufficient');
    payError.classList.toggle('show', validPaid && paid < total);
    checkoutConfirm.disabled = true;
  }
}

typePills.forEach(btn => {
  btn.addEventListener('click', () => {
    selectedCustomerType = btn.dataset.type;
    typePills.forEach(b => b.classList.toggle('active', b === btn));
    updateChangePreview();
  });
});

checkoutBtn.addEventListener('click', openCheckoutModal);
mcbCheckoutBtn.addEventListener('click', openCheckoutModal);
checkoutClose.addEventListener('click', closeCheckoutModal);
checkoutOverlay.addEventListener('click', (e) => { if (e.target === checkoutOverlay) closeCheckoutModal(); });
payInput.addEventListener('input', updateChangePreview);

checkoutConfirm.addEventListener('click', () => {
  const subtotal = getCartSubtotal();
  const { amount: discount, label: discountLabel } = computeBestDiscount(subtotal, selectedCustomerType);
  const total = subtotal - discount;
  const paid = parseFloat(payInput.value);
  if (isNaN(paid) || paid < total) return;
  const change = paid - total;
  const date = new Date();
  const customerName = customerNameInput.value.trim();
  const cashierName = currentCashier || '';
  const customerType = selectedCustomerType;

  const checkoutItems = currentOrder.map(i => ({ ...i }));

  // Store one transaction record per line item; all share this
  // checkout event's order-level totals and payment info.
  checkoutItems.forEach(item => {
    transactions.push({
      transaction_id: transactionCounter++,
      date: date,
      product_id: item.product_id,
      product_name: item.product_name,
      price: item.price,
      quantity: item.quantity,
      subtotal: item.price * item.quantity,
      order_subtotal: subtotal,
      discount_amount: discount,
      discount_label: discountLabel,
      customer_type: customerType,
      total_due: total,
      amount_paid: paid,
      change_given: change,
      customer_name: customerName,
      cashier_name: cashierName
    });
  });

  // Snapshot for the receipt (cart is about to be cleared)
  lastCheckout = {
    date, customerName, cashierName, customerType, discountLabel, items: checkoutItems,
    subtotal, discount, total, paid, change
  };

  renderTransactionLog();

  // Show confirmation message
  checkoutBody.style.display = 'none';
  confirmBody.style.display = '';
  confirmChangeText.textContent = `Change: ${peso(change)}`;

  // Clear the cart for the next customer
  currentOrder = [];
  lastAddedId = null;
  renderCart();
  renderGrid();
});

confirmDone.addEventListener('click', closeCheckoutModal);

/* ---------- Receipt ---------- */
function buildReceiptHTML(sale){
  const itemsHTML = sale.items.map(i => `
    <div class="r-line">
      <span class="r-item-name">${i.quantity} × ${i.product_name}</span>
      <span>${peso(i.price * i.quantity)}</span>
    </div>
  `).join('');

  const discountHTML = sale.discount > 0 ? `
    <div class="r-line"><span>${sale.discountLabel}</span><span>−${peso(sale.discount)}</span></div>
  ` : '';

  const typeLine = sale.customerType && sale.customerType !== 'regular'
    ? `<br>Customer type: ${sale.customerType === 'senior' ? 'Senior Citizen' : 'Suki (Loyal Customer)'}`
    : '';

  return `
    <div class="r-store">Tindahan ni Aling Rosa</div>
    <div class="r-sub">Point of Sale Receipt</div>
    <div class="r-meta">
      Date: ${sale.date.toLocaleDateString()} ${sale.date.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}<br>
      Cashier: ${sale.cashierName || 'N/A'}<br>
      Customer: ${sale.customerName || 'Walk-in customer'}${typeLine}
    </div>
    ${itemsHTML}
    <div class="r-totals">
      <div class="r-line"><span>Subtotal</span><span>${peso(sale.subtotal)}</span></div>
      ${discountHTML}
      <div class="r-line r-grand"><span>Total</span><span>${peso(sale.total)}</span></div>
      <div class="r-line"><span>Amount Paid</span><span>${peso(sale.paid)}</span></div>
      <div class="r-line"><span>Change</span><span>${peso(sale.change)}</span></div>
    </div>
    <div class="r-thanks">Salamat po sa inyong pagbili!</div>
  `;
}

function openReceipt(){
  if (!lastCheckout) return;
  receiptPaper.innerHTML = buildReceiptHTML(lastCheckout);
  receiptOverlay.classList.add('show');
}
function closeReceipt(){
  receiptOverlay.classList.remove('show');
}

viewReceiptBtn.addEventListener('click', openReceipt);
receiptClose.addEventListener('click', closeReceipt);
receiptOverlay.addEventListener('click', (e) => { if (e.target === receiptOverlay) closeReceipt(); });
printReceiptBtn.addEventListener('click', () => {
 
  printArea.innerHTML = receiptPaper.innerHTML;
  window.print();
});

/* ---------- Search ---------- */
searchInput.addEventListener('input', renderGrid);

// ---------- Initialize ----------
renderCategoryFilters();
renderGrid();
renderCart();
renderTransactionLog();
switchView('pos');
renderCashierBadge();
openCashierModal(); // require a cashier name before the shift starts