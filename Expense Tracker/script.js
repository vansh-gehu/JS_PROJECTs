let balance = 0;
const transactions = [];

const balanceEl = document.getElementById('balance');
const descInput = document.getElementById('desc');
const amountInput = document.getElementById('amount');
const transactionsEl = document.getElementById('transactions');

function updateUI() {
  transactionsEl.innerHTML = '';
  let total = 0;
  transactions.forEach(t => {
    const li = document.createElement('li');
    li.textContent = `${t.desc} - ₹${t.amount}`;
    transactionsEl.appendChild(li);
    total += t.amount;
  });
  balance = total;
  balanceEl.textContent = `Balance: ₹${balance}`;
}

add.addEventListener('click', () => {
  const desc = descInput.value.trim();
  const amount = parseInt(amountInput.value);
  if (!desc || isNaN(amount)) return;
  transactions.push({ desc, amount });
  descInput.value = '';
  amountInput.value = '';
  updateUI();
});