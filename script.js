var MongoClient = require('mongodb').MongoClient;
const url = process.env.DB_URI;

MongoClient.connect(url, function(err, db) {
    // if (err) throw err;
    console.log("Database connected!");
    const connect = db.db("test")
    var b2 = {
        boardImg: "../../../public/client-side/img/portfolio/portfolio-2.jpg",
        desgination: "Vice Chairperson",
        description: "",
        linkedin: "https://www.linkedin.com/in/devayani-m-392a65168/"
    };
    var b3 = {
        boardImg: "../../../public/client-side/img/portfolio/portfolio-3.jpg",
        desgination: "Secretary",
        description: "",
        linkedin: "https://www.linkedin.com/in/sushant4191/"
    };
    var b4 = {
        boardImg: "../../../public/client-side/img/portfolio/portfolio-4.jpg",
        desgination: "Co-Secretary",
        description: "",
        linkedin: "https://www.linkedin.com/in/anshuman-phadke-6506aa1b5/"
    };
    var b5 = {
        boardImg: "../../../public/client-side/img/portfolio/portfolio-5.jpg",
        desgination: "Technical Director",
        description: "",
        linkedin: "https://www.linkedin.com/in/abhinav-sharma-95754018b/"
    };
    var b6 = {
        boardImg: "../../../public/client-side/img/portfolio/portfolio-6.jpg",
        desgination: "Design Director",
        description: "",
        linkedin: "https://www.linkedin.com/in/aishaandatt/"
    };
    var b7 = {
        boardImg: "../../../public/client-side/img/portfolio/portfolio-7.jpg",
        desgination: "Project Director",
        description: "",
        linkedin: "https://www.linkedin.com/in/nithesh-cp/"
    };
    var b8 = {
        boardImg: "../../../public/client-side/img/portfolio/portfolio-8.jpg",
        desgination: "",
        description: "",
        linkedin: ""
    };
    var b9 = {
        boardImg: "../../../public/client-side/img/portfolio/portfolio-9.jpg",
        desgination: "Management Director",
        description: "",
        linkedin: "https://www.linkedin.com/in/siddharth-dinkar-3896b81b4/"
    };
    var b10 = {
        boardImg: "../../../public/client-side/img/portfolio/portfolio-10.jpg",
        desgination: "HR Director",
        description: "",
        linkedin: ""
    };
    
    const docsb = [b2,b3,b4,b5,b6,b7,b8,b9,b10];

    connect.collection("boards").insertMany(docsb, function(err, res) {
        if (err) throw err;
        console.log("documents inserted"); 
    });
    
    db.close();
});