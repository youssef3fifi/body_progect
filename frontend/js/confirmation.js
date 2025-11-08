const booking = JSON.parse(sessionStorage.getItem('latestBooking'));

if (!booking) {
    window.location.href = 'index.html';
} else {
    document.getElementById('bookingRef').textContent = booking.id;
    document.getElementById('guestName').textContent = booking.guestName;
    document.getElementById('email').textContent = booking.email;
    document.getElementById('phone').textContent = booking.phone;
    document.getElementById('checkIn').textContent = new Date(booking.checkIn).toLocaleDateString();
    document.getElementById('checkOut').textContent = new Date(booking.checkOut).toLocaleDateString();
    const roomTypes = {'single': 'Single Room', 'double': 'Double Room', 'suite': 'Suite'};
    document.getElementById('roomType').textContent = roomTypes[booking.roomType] || booking.roomType;
    document.getElementById('guests').textContent = booking.guests;
    if (booking.specialRequests) {
        document.getElementById('specialRequests').textContent = booking.specialRequests;
        document.getElementById('specialRequestsRow').style.display = 'flex';
    }
    sessionStorage.removeItem('latestBooking');
}