import { MongoClient } from "mongodb";
// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);

    //connect to mongodb
    const client = await MongoClient.connect(
      "mongodbLink"
    );
    const db = client.db();

    // create collection
    const meetupsCollection = db.collection("meetups");

    // insert data in database
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup insetred" });
  }
}

export default handler;
