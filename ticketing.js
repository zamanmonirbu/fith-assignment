let selectedSeats = [];
let totalPrice = 0;
let discount = 0;

function toggleSeatSelection(seatId) {
  const seatButton = document.getElementById(seatId);
  if (!selectedSeats.includes(seatId)) {
    if (selectedSeats.length < 4) {
      selectedSeats.push(seatId);
      seatButton.classList.add('bg-lime-400'); ``
      totalPrice += calculateSeatPrice(seatId); 
    } else {
      alert("More than 4 seats are not available");
    }
  } else {
    const index = selectedSeats.indexOf(seatId);
    selectedSeats.splice(index, 1);
    seatButton.classList.remove('bg-lime-400'); 
    totalPrice -= calculateSeatPrice(seatId); 
  }

  updateSeatsLeft(selectedSeats.length);
  updateSelectedSeatsInfo();
}

function applyCouponCode() {
  const couponInput = document.querySelector('.apply-coupon');
  const couponCode = couponInput.value.trim();
  if (couponCode === "20OFF") { 
    discount = totalPrice * 0.2; 
    updateTotalPrice();
  } else {
    alert("Invalid coupon code");
  }
}

function calculateSeatPrice(seatId) {
  return 550; 
}

function updateSeatsLeft(selectedSeatsCount) {
  const seatsLeftElement = document.getElementById('seats-left');
  const seatsLeft = 40 - selectedSeatsCount;
  seatsLeftElement.textContent = seatsLeft;
}


function updateSelectedSeatsInfo() {
    const selectedSeatElement = document.getElementById('selectedSeat');
    selectedSeatElement.innerHTML = ''; 
    
    selectedSeats.forEach(seatId => {
      const seatElement = document.createElement('div');
      seatElement.classList.add('flex', 'justify-between', 'gap-3');
      
      const seatNumberElement = document.createElement('p');
      seatNumberElement.classList.add('text-lg');
      seatNumberElement.textContent = `${seatId}`;
      
      const classElement = document.createElement('p');
      classElement.classList.add('text-lg');
      classElement.textContent = 'Business'; 
      
      const priceElement = document.createElement('p');
      priceElement.classList.add('text-lg');
      priceElement.textContent = '550'; 
      
      seatElement.appendChild(seatNumberElement);
      seatElement.appendChild(classElement);
      seatElement.appendChild(priceElement);
      
      selectedSeatElement.appendChild(seatElement);
    });
  
    updateTotalPrice();
  }
  

function updateTotalPrice() {
  const totalElement = document.getElementById('total-price');
  const grandTotalElement = document.getElementById('grand-total');
  const grandTotal = totalPrice - discount;

  totalElement.textContent = totalPrice;
  grandTotalElement.textContent = grandTotal;
}

const seatButtons = document.querySelectorAll('.kbd');
seatButtons.forEach(button => {
  button.addEventListener('click', () => {
    toggleSeatSelection(button.id);
  });
});

const applyCouponButton = document.querySelector('.apply-coupon-btn');
applyCouponButton.addEventListener('click', applyCouponCode);

updateSeatsLeft(selectedSeats.length);

function handleNextButtonClick() {
    const nameInput = document.querySelector('.Enter-name');
    const phoneInput = document.querySelector('.Enter-phone');
    const emailInput = document.querySelector('.Enter-mail');
    
    if (nameInput.value.trim() !== '' && phoneInput.value.trim() !== '' && emailInput.value.trim() !== '') {
      const modal = document.getElementById('modal');
      modal.classList.remove('hidden');
    } else {
      alert("Input fields must be filled up");
    }
  }
  
  const nextButton = document.getElementById('nextBtn');
  nextButton.addEventListener('click', handleNextButtonClick);
  
  const continueButton = document.getElementById('continueBtn');
  continueButton.addEventListener('click', () => {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
  });
  
  
