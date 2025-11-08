const API_URL = 'http://13.61.212.85/api';

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
            return `
                <div class="col-md-6 mb-4">
                    <div class="booking-card">
                        <div class="card-body">
                            <h5 class="card-title">Booking #${booking.id}</h5>
                            <p class="card-text"><strong>Guest:</strong> ${booking.guestName}</p>
                            <p class="card-text"><strong>Email:</strong> ${booking.email}</p>
                            <p class="card-text"><strong>Phone:</strong> ${booking.phone}</p>
                            <p class="card-text"><strong>Check-in:</strong> ${new Date(booking.checkIn).toLocaleDateString()}</p>
                            <p class="card-text"><strong>Check-out:</strong> ${new Date(booking.checkOut).toLocaleDateString()}</p>
                            <p class="card-text"><strong>Room Type:</strong> ${roomTypes[booking.roomType] || booking.roomType}</p>
                            <p class="card-text"><strong>Guests:</strong> ${booking.guests}</p>
                            ${booking.specialRequests ? `<p class="card-text"><strong>Special Requests:</strong> ${booking.specialRequests}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    } catch (error) {
        console.error('Error:', error);
        bookingsList.innerHTML = '<p class="no-bookings">Failed to load bookings. Please try again later.</p>';
    }
}
loadBookings();