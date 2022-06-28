//CREATE/USE DB
use banking;

//CREATE COLLECTION
db.createCollection("customer");
db.createCollection("account");
db.createCollection("branch");


//Check that "plants" db is created
show dbs;

//check that "houseplant" collection is created
show collections;

//using customer ID/IC as field id
db.customer.insertMany([
{
    _id: "S84920495E",
    name:"testname1",
    dob: "01/01/1985",
    street:"test street 1",
    city:"test city 1",
    state:"test state 1",
    postalCode:"test postal 1",
    email:"test email 1",
    phoneNumber:"589648525"
},
{
    _id: "S58647856E",
    name:"test name 2",
    dob: "03/11/1979",
    street:"test street 2",
    city:"test city 2",
    state:"test state 2",
    postalCode:"test postal 2",
    email:"test email 2",
    phoneNumber:"965856982"
},
{
    _id: "S458965895E",
    name:"test name 3",
    dob: "12/05/1983",
    street:"test street 3",
    city:"test city 3",
    state:"test state 3",
    postalCode:"test postal 3",
    email:"test email 3",
    phoneNumber:"578988658"
}
])


db.account.insertMany([
{
    _id: "S84920495E",
    acc_no:"4S571FG4",
    acc_type:"Savings",
    acc_status:"Active",
    acc_activation_date:"18/05/2015",
    total_bal:888868,
    branch: "A01"
},
{
    _id: "S58647856E",
    acc_no:"1S444FG4",
    acc_type:"Current",
    acc_status:"Active",
    acc_activation_date:"01/02/2016",
    total_bal:46741,
    branch: "A01"
},
{
    _id: "S458965895E",
    acc_no:"3S333FG3",
    acc_type:"Savings",
    acc_status:"Suspended",
    acc_activation_date:"1/01/2021",
    total_bal:1,
    branch: "A01"
}
])

//only 1 branch (Testing "insert")
db.branch.insert(
{
    _id:"A01",
    branch_name:"Brighton",
    branch_city:"Brooklyn",
    assest: 98650000000000000000000000000000000000
}
)

//Open a new branch , horray 
db.branch.insert(
{
    _id:"A02",
    branch_name:"Downtown",
    branch_city:"Brooklyn",
    assest: 789654
}
)


//query (R)
db.customer.find({})
//find the rich guy
db.account.find({total_bal: {$gt:700000}})
db.branch.find({_id:"A01"})
db.branch.find({_id:"A02"})

//update customer email(U)
db.customer.updateOne(
{
    "_id": "S84920495E"
    },
{
    $set:{email: "iAmANewEmail@new.com"}
    }
)


//delete branch A02, it have closed down.. :( (D)
db.branch.deleteOne({
    _id : "A02"
})

//drop db, bank bankrupt.. byee bye (D)
db.customer.drop()
db.account.drop()
db.branch.drop()


