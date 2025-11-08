const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:3000/api' : '/api';

async function loadBookings() {
    const bookingsList = document.getElementById('bookingsList');
    try {
        const response = await fetch(`${API_URL}/bookings`);
        const bookings = await response.json();
        if (bookings.length === 0) {
            bookingsList.innerHTML = '<p class="no-bookings">No bookings found. <a href="register.html">Make your first booking!</a></p>';
            return;
        }
        bookings.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        bookingsList.innerHTML = bookings.map(booking => {
            const roomTypes = {'single': 'Single Room', 'double': 'Double Room', 'suite': 'Suite'};
            return `<div class="booking-card"><h3>Booking #${booking.id}</h3><div class="booking-info"><div class="info-item"><span class="label">Guest Name</span><span class="value">${booking.guestName}</span></div><div class="info-item"><span class="label">Email</span><span class="value">${booking.email}</span></div><div class="info-item"><span class="label">Phone</span><span class="value">${booking.phone}</span></div><div class="info-item"><span class="label">Check-in</span><span class="value">${new Date(booking.checkIn).toLocaleDateString()}</span></div><div class="info-item"><span class="label">Check-out</span><span class="value">${new Date(booking.checkOut).toLocaleDateString()}</span></div><div class="info-item"><span class="label">Room Type</span><span class="value">${roomTypes[booking.roomType] || booking.roomType}</span></div><div class="info-item"><span class="label">Guests</span><span class="value">${booking.guests}</span></div>${booking.specialRequests ? `<div class="info-item" style="grid-column: 1 / -1;"><span class="label">Special Requests</span><span class="value">${booking.specialRequests}</span></div>` : ''}</div></div>`;
        }).join('');
    } catch (error) {
        console.error('Error:', error);
        bookingsList.innerHTML = '<p class="no-bookings">Failed to load bookings. Please try again later.</p>';
    }
}
loadBookings();