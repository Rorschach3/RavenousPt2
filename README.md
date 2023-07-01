# Ravenous

Ravenous is a client-side React application that harnesses the power of the Yelp Fusion API to provide users with a seamless experience of searching for local businesses. With Ravenous, you can effortlessly explore and discover a wide range of businesses based on your specific preferences.

The search functionality of Ravenous is highly flexible and intuitive. You can enter two main parameters: `term` and `location`. While the `term` input is optional, it allows you to narrow down your search by specifying keywords related to the type of business you're interested in. For example, entering "pizza" as the search term will retrieve results specifically for pizzerias in the designated location.

Speaking of location, Ravenous accommodates various input formats. Whether you input a city, state, zip code, or any combination of these parameters, the application will swiftly fetch results matching your location criteria. Moreover, you have the option to use longitude and latitude coordinates for precise business searches.

Ravenous simplifies the process of finding local businesses by leveraging the extensive Yelp Fusion API. To ensure successful API requests, an API key is needed in the header. You can easily obtain an API key by signing up at the Yelp Developers section [here](https://www.yelp.com/developers/v3/manage_app).

Once you have your API key, Ravenous opens up a world of possibilities for discovering businesses. The Yelp Fusion API provides various endpoints and features to enhance your search experience. You can explore comprehensive documentation and learn more about the different endpoints by visiting the Yelp Developers documentation [here](https://docs.developer.yelp.com/).

This project is based on CodeCademy's practice project 'Ravenous Part 2: Passing Information' as part of their React beginner's tutorial project. 

## Installation

1. Fork the repository from [Github](https://github.com/Rorschach3/RavenousPt2) and clone it using the following command:

```sh
git clone https://github.com/Rorschach3/RavenousPt2.git .
```

2. Before starting the server, make sure you have all the necessary files and dependencies installed. You can do this by running either of the following commands:

```sh
npm install
```

or

```sh
yarn install
```

3. Once the installation is complete, start the server by running either of the following commands:

```text
npm start
```

or

```sh
yarn start
```

4. A browser window should automatically open, indicating that the program is running on `localhost` port `3000`. If the browser window doesn't open automatically, you can manually open a browser and go to `http://localhost:3000/`.

5. Congratulations! You can now use Ravenous to search for businesses using Yelp's Fusion API. Explore and discover local businesses based on your preferences and enjoy the seamless experience provided by Ravenous.
