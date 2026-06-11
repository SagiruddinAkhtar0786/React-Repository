# News Application - Functional Components Version

A React-based news application built with functional components and hooks. Displays top headlines from various categories using the NewsAPI.

## Features

- Browse news from 8 categories (Business, Entertainment, General, Health, Science, Sports, Technology)
- Infinite scroll pagination
- Real-time news updates from NewsAPI
- Responsive design with Bootstrap
- Environment variable for API key security

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

## Project Structure

- `src/App.js` - Main app with routing
- `src/components/Navbar.js` - Navigation component
- `src/components/News.js` - Main news display component
- `src/components/NewsItem.js` - Individual news item card
- `src/components/Spinner.js` - Loading spinner

## Environment Variables

Create a `.env` file in the project root:
```
REACT_APP_NEWS_API_KEY=your_api_key_here
```

Get your API key from [NewsAPI.org](https://newsapi.org)
