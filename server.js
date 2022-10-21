// const express = require("express");
// const db = require("./config/connections");
// const morgan = require("morgan");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const dotenv = require("dotenv");
// require("colors");
// const path = require("path");
// const routes = require("./routes");

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // if we're in production, serve client/build as static assets
// // if (process.env.NODE_ENV === "production") {
// //   app.use(express.static(path.join(__dirname, "../client/build")));
// // }

// // app.use(routes);
// app.get("/", (req, res) => {
//   res.send("pos server");
// });

// db.once("open", () => {
//   app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
// });

// // app.listen(PORT, () => {
// //   console.log(`server listening on ${PORT}`);
// // });

//==========================================================================
// const express = require("express");
// const { ApolloServer } = require("apollo-server-express");

// // Import the two parts of a GraphQL schema
// const { typeDefs, resolvers } = require("./schemas");
// const db = require("./config/connections");

// const PORT = process.env.PORT || 3001;
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// // Create a new instance of an Apollo server with the GraphQL schema
// const startApolloServer = async (typeDefs, resolvers) => {
//   await server.start();
//   server.applyMiddleware({ app });

//   db.once("open", () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//       console.log(
//         `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
//       );
//     });
//   });
// };

// // Call the async function to start the server
// startApolloServer(typeDefs, resolvers);

//=============================================================
const express = require("express");
const db = require("./config/connections");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
