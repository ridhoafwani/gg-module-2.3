# GG Homework Module 2.3

This is a simple Express.js API created as part of my homework for the Generasi Gigih 3.0 program.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To run this application, you'll need the following software installed on your machine:

- Node.js (version 12 or above)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ridhoafwani/gg-module-2.3
```

2. Install the dependencies:

```bash
npm install
```

### Running the Application

To start the Express.js API, run the following command:

```bash
npm start
```

The API will be available at `http://localhost:3000`.

## Usage

You can use tools like [Postman](https://www.postman.com/) or [cURL](https://curl.se/) to interact with the API endpoints. Refer to the [API Endpoints](#api-endpoints) section for more details.

## API Endpoints

The following API endpoints are available:

- `GET /playlists/songs` Get lists of songs in playlists and sorted by most played.
- `GET /playlists/songs/:id` : Play song by songId.
- `POST /playlists/songs` : Add new song to playlists.
  - required request body
    - `title (string)` : song title
    - `artists (array)` : artists
    - `url (string)` : spotify url
