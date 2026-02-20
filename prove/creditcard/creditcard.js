const theForm = document.querySelector('#paymentForm');
const feedbackEl = document.querySelector('#feedback');

const cardNumberInput = document.querySelector('#cardNumber');
const mmInput = document.querySelector('#mm');
const yyInput = document.querySelector('#yy');
const cvcInput = document.querySelector('#securityNumb');

function displayError(msg) {
  feedbackEl.textContent = msg;
  feedbackEl.style.color = 'crimson';
  feedbackEl.style.fontWeight = '700';
}

function displaySuccess(msg) {
  feedbackEl.textContent = msg;
  feedbackEl.style.color = 'green';
  feedbackEl.style.fontWeight = '700';
}

function isCardNumberValid(number) {
  // Assignment requirement: ONLY accept this exact number
  return number === '1234123412341234';
}

function isNotExpired(expMonth, expYearYY) {
  // expMonth: 1-12, expYearYY: 0-99 (two-digit year)
  const m = Number(expMonth);
  const y = Number(expYearYY);

  if (!Number.isInteger(m) || m < 1 || m > 12) return false;
  if (!Number.isInteger(y) || y < 0 || y > 99) return false;

  const now = new Date();
  const currentYearYY = now.getFullYear() % 100;  // 2026 -> 26
  const currentMonth = now.getMonth() + 1;        // 1..12

  // Valid if year is in the future, or same year and month is this month or later.
  if (y > currentYearYY) return true;
  if (y < currentYearYY) return false;
  return m >= currentMonth;
}

function submitHandler(event) {
  event.preventDefault();

  let errorMsg = '';
  displayError(''); // clear first

  // Card number: remove spaces, validate 16 digits
  const cardNum = cardNumberInput.value.replace(/\s+/g, '').trim();

  if (!/^\d{16}$/.test(cardNum)) {
    errorMsg += 'Card number must be 16 digits.\n';
  } else if (!isCardNumberValid(cardNum)) {
    errorMsg += 'Card number is not valid.\n';
  }

  // Expiration validation
  const expMonth = mmInput.value.trim();
  const expYear = yyInput.value.trim();

  if (!/^\d{2}$/.test(expMonth) || !/^\d{2}$/.test(expYear)) {
    errorMsg += 'Expiration must be 2-digit MM and 2-digit YY.\n';
  } else if (!isNotExpired(expMonth, expYear)) {
    errorMsg += 'Card is expired.\n';
  }

  // Optional (if your assignment wants it): basic CVC check
  const cvc = cvcInput.value.trim();
  if (!/^\d{3}$/.test(cvc)) {
    errorMsg += 'CVC/CVV must be 3 digits.\n';
  }

  if (errorMsg !== '') {
    displayError(errorMsg);
    return;
  }

  // ✅ Success feedback (keep the layout, just show message)
  displaySuccess('✅ Payment successful! Thank you for your purchase.');

  // Optional: reset after success
  theForm.reset();
}

theForm.addEventListener('submit', submitHandler);