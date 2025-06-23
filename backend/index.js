const express = require("express");

const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const _dirname = path.resolve();

//moddlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});
// mongodb conf code

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://iksevents:kcfyfD3WflPLiATg@iks.yoh3dpx.mongodb.net/?retryWrites=true&w=majority&appName=iks";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create a collection of documents
    const allevents = client.db("iksevents").collection("events");
    //insert a book to the database using post method

    app.post("/iksevents", async (req, res) => {
      const data = req.body;
      const result = await allevents.insertOne(data);
      res.send(result);
    });

    //get all events from the database
    app.get("/allevents", async (req, res) => {
      const events = allevents.find();
      const result = await events.toArray();
      res.send(result);
    });

    //update a book data : patch or updatre methods
    app.patch("/events/:id", async (req, res) => {
      const id = req.params.id;
      const updateEventsData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          ...updateEventsData,
        },
      };
      //update
      const result = await allevents.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    //delete a event data :
    app.delete("/events/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await allevents.deleteOne(filter);
      res.send(result);
    });

    //to get single book data
    app.get("/events/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await allevents.findOne(filter);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();//
  }
}
run().catch(console.dir);

app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(_dirname));
});

app.listen(PORT, () => {
  console.log("Example app listening on port ${port}");
});
