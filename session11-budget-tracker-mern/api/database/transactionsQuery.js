const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017/";

const addTransaction = async (newItem) => {
  const client = new MongoClient(uri);
  try {
    const database = client.db("cse49fBudgetTracker");
    const transactions = database.collection("transactions");

    // Insert newItem here
    const result = await transactions.insertOne(newItem);

    console.log(result);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
    return result;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};

const getTransactions = async () => {
  const client = new MongoClient(uri);
  try {
    const database = client.db("cse49fBudgetTracker");
    const transactions = database.collection("transactions");

    const cursor = await transactions.find();
    const result = await cursor.toArray();

    console.log(result);
    return result;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};

const getSummary = async () => {
  const client = new MongoClient(uri);
  try {
    const database = client.db("cse49fBudgetTracker");
    const transactions = database.collection("transactions");

    const pipeline = [
      {
        $group: {
          _id: "$type",
          totalAmount: {
            $sum: "$amount",
          },
        },
      },
    ];

    const result = await transactions.aggregate(pipeline).toArray();

    console.log(result);
    let totalIncome = 0;
    let totalExpense = 0;
    for (const eachTotal of result) {
        console.log(eachTotal._id);
        if(eachTotal._id === 'income') {
            totalIncome = eachTotal.totalAmount;
        } else if (eachTotal._id === 'expense') {
            totalExpense = eachTotal.totalAmount;
        }
    }
    return {
        totalIncome, totalExpense
    };
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};

module.exports = {
  addTransaction,
  getTransactions,
  getSummary,
};
