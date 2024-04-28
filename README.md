# DnDDiceOnline.com

Welcome to the repository for DnDDiceOnline.com, a custom website built for Dungeons & Dragons enthusiasts to facilitate dice rolling with custom options.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

To set up the website locally, you'll need Node.js and MySQL installed on your machine.

1. Clone the repository to your local machine.
2. Navigate to the project directory and install dependencies:
   ```
   npm install
   ```
3. Set up the MySQL database using the `db/dnddiceonline.sql` file.
4. Configure your database connection settings in `config/db.js`.
5. Start the Node.js server:
   ```
   node server.js
   ```

## Usage

Once the server is running, you can access the website at `http://localhost:3000` by default.

### Web Pages

- **Homepage**: `dnddiceonline.com/index.html` - Customizable JavaScript-based dice roller.
- **Links Page**: `dnddiceonline.com/links.html` - Links to external resources and related sites.
- **How to Use Page**: `dnddiceonline.com/howtouse.html` - Instructions on using the dice roller and website features.
- **About Page**: `dnddiceonline.com/about.html` - Information about the creators and the purpose of the site.
- **Privacy Policy Page**: `dnddiceonline.com/privacy.html` - Details the site’s privacy practices.
- **Contact Page**: `dnddiceonline.com/contact.html` - Form for users to submit questions or feedback.
- **Resources Page**: `dnddiceonline.com/resources.html` - Informative articles related to Dungeons and Dragons.

## Features

- Adjustable number of dice (1-99).
- Selectable dice types (d2, d3, d4, d6, d8, d10, d12, d20, d100).
- Modifier addition or subtraction (0-99).
- Roll button and generated output display.
- Notes section for game details.
- Option to add multiple dice rollers.
- Results log with timestamps and export to PDF functionality.

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) file for details on how to submit pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

For more information on how to maintain the website, refer to the comments in the codebase and the structured documentation within each file. Make sure to keep filenames consistent and follow the shared dependencies outlined in the project specifications.