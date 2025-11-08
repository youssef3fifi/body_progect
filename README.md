# Hotel Booking System 🏨

A full-stack hotel room registration system with a beautiful, modern, and responsive multi-page interface built with Bootstrap 5.

## Features

- 🏠 **Home Page** - Welcome page with hotel information and features
- 📝 **Registration Page** - Interactive booking form with validation
- ✅ **Confirmation Page** - Booking confirmation with unique reference
- 📋 **Bookings Page** - View all bookings in a card layout

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+), Bootstrap 5
- **Backend**: Node.js, Express.js
- **Data Storage**: JSON file-based storage
- **API**: RESTful API endpoints

## Installation & Local Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)
- Git

### Steps

1. **Clone the repository:**
```bash
git clone https://github.com/youssef3fifi/body_progect.git
cd body_progect
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the server:**
```bash
npm start
```

4. **Open your browser:**
```
http://localhost:3000
```

## API Endpoints

- `GET /api/bookings` - Get all bookings
- `GET /api/bookings/:id` - Get specific booking by ID
- `POST /api/bookings` - Create new booking

## Deployment to AWS

### Option 1: AWS Elastic Beanstalk (Recommended)

1. **Install AWS CLI and EB CLI:**
```bash
pip install awsebcli
```

2. **Configure AWS credentials:**
```bash
aws configure
```

3. **Initialize Elastic Beanstalk:**
```bash
eb init -p node.js hotel-booking-system
```

4. **Create environment and deploy:**
```bash
eb create hotel-booking-env
eb open
```

5. **Update your application:**
```bash
git add .
git commit -m "Update application"
eb deploy
```

### Option 2: AWS EC2

1. Launch EC2 Instance (Amazon Linux 2 or Ubuntu)
2. Install Node.js and Git
3. Clone repository and install dependencies
4. Use PM2 for process management
5. Configure Nginx as reverse proxy (optional)

## Project Structure

```
body_progect/
├── frontend/
│   ├── index.html
│   ├── register.html
│   ├── confirmation.html
│   ├── bookings.html
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── booking.js
│       ├── confirmation.js
│       └── viewBookings.js
├── data/
│   └── bookings.json
├── server.js
├── package.json
├── .gitignore
└── README.md
```

## License

MIT License

## Author

**youssef3fifi**
- GitHub: [@youssef3fifi](https://github.com/youssef3fifi)
- Repository: [body_progect](https://github.com/youssef3fifi/body_progect)

---

Made with ❤️ by youssef3fifi
