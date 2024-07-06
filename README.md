# Games Hub Next

Games Hub Next is a game browsing application that provides users with detailed information about games, including screenshots, descriptions, available platforms, and ratings. This project is built using Next.js and TypeScript, and it integrates with the RAWG.io API for game data.

![Games Hub Next Screenshot](/public/screenshot.png)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- **Game Details:** View detailed information about games, including screenshots, descriptions, available platforms, and ratings.
- **Filtering:** Filter games based on available platforms and genres.
- **Sorting:** Sort games by relevance, popularity, and names.
- **Search:** Search for games by name.

## Technologies Used

- **Next.js:** Framework for building server-side rendered React applications.
- **TypeScript:** Typed superset of JavaScript that helps with building robust and maintainable code.
- **Axios:** Promise-based HTTP client for making API requests.
- **RAWG.io API:** A comprehensive database of video games for game-related data.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **ShadCN UI:** Beutiful & accessible components to enhance design and user experience.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/md-talim/games-hub-next.git
   cd games-hub-next
   ```

2. Install the dependencies:

   ```bash
   yarn
   ```

3. Create a `.env.local` file in the root directory and add your RAWG.io API key:

   ```plaintext
   API_KEY = XXX
   BASE_URL = 'https://api.rawg.io/api'
   ```

4. Start the development server:

   ```bash
   yarn run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

- **Homepage:** Browse through a collection of game cards.
- **Game Details Page:** Click on a game card to view detailed information about the game.
- **Filter Games:** Use the filter options to narrow down the list of games based on platforms and genres.
- **Sort Games:** Use the sorting options to order games by relevance, popularity, or names.
- **Search Games:** Use the search bar to find games by name.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add new feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Create a new Pull Request
