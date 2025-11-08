const API_URL = 'http://13.61.212.85/api';

document.getElementById('bookingForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = {
        guestName: document.getElementById('guestName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        checkIn: document.getElementById('checkIn').value,
        checkOut: document.getElementById('checkOut').value,
        roomType: document.getElementById('roomType').value,
        guests: document.getElementById('guests').value,
        specialRequests: document.getElementById('specialRequests').value
    };
    const checkIn = new Date(formData.checkIn);
    const checkOut = new Date(formData.checkOut);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (checkIn < today) {
        alert('Check-in date cannot be in the past');
        return;
    }
    if (checkOut <= checkIn) {
        alert('Check-out date must be after check-in date');
        return;
    }
    try {
        const response = await fetch(`${API_URL}/bookings`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            const booking = await response.json();
            sessionStorage.setItem('latestBooking', JSON.stringify(booking));
            window.location.href = 'confirmation.html';
        } else {
            alert('Failed to create booking. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});
const today = new Date().toISOString().split('T')[0];
document.getElementById('checkIn').setAttribute('min', today);
document.getElementById('checkIn').addEventListener('change', (e) => {
    const checkInDate = new Date(e.target.value);
    checkInDate.setDate(checkInDate.getDate() + 1);
    const minCheckOut = checkInDate.toISOString().split('T')[0];
    document.getElementById('checkOut').setAttribute('min', minCheckOut);
});