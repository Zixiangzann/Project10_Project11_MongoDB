//CREATE/USE DB
use plants;

//CREATE COLLECTION
db.createCollection("houseplant");

//Check that "plants" db is created
show dbs;

//check that "houseplant" collection is created
show collections;

//CREATE/INSERT Documents to "houseplant" collection (C)

db.houseplant.insert([{
    "About":[{
    "name": "Spider Plant",
    "Scientific Name": "Chlorophytum comosum",
    "Description": "The plant produces grassy-looking, narrow leaves about 8”-10” long and less than 1” wide directly from the center of the plant. When kept root-bound, a spider plant sends out numerous long runners (stems) that produce small, delicate, star- shaped, white flowers. Once the flowers die, baby plants (plantlets) develop and can be easily used for propagation. A spider plant can also be propagated by dividing the fleshy, tuberous, plant roots."
    }],
    "Care":[{
        "Light":"How much light for a spider plant: A spider plant likes medium to bright indirect light. Solid green plants need less light than green and white varieties. No spider plant should ever be put in the direct sun.",
        "Water":"How to water spider plant: How you water is a very important part of how to care for a spider plant. Allow the top 50% of the soil to dry out before you water. A good way to tell when the plant needs water is to look at the leaves. The green color starts to fade when the soil is dry. Using water with a high salt or chemical content (fluorine or chlorine) causes brown leaf tips. Never use water that had passed through a water softener; it is much too salty.",
        "Soil":"Best soil for a spider plant: Use a rich, organic plant soil such as an African violet mix."        
    }
    ]
}])


//Insert many (C)
db.houseplant.insertMany(
[
{
    "About":[{
    "name": "Snake Plant",
    "Scientific Name": "Sansevieria trifasciata",
    "Description": "A Sansevieria plant can be used as a table plant when small, or a stately floor plant as it mature.  The leaves are arranged and grow in a rosette pattern. Sansevieria plants developed hard, leathery leaves to adapt to the dry, arid regions where they were originally found growing. The thick, succulent leaves store water and the thick leaf cuticles help to reduce the loss of moisture. The flowers of a sansevieria  are usually greenish-white and grow atop a long, leafless stem. Flowering usually occurs during the summer or fall."
    }],
    "Care":[{
        "Light":"How much light does a sansevieria need: This plant can be placed anywhere in a room, from the darkest corner to the brightest window. The better the light, the faster a sansevieria plant grows. The more coloration in the leaves, the more light the plant needs.",
        "Water":"How to water spider plant: How you water is a very important part of how to care for a spider plant. Allow the top 50% of the soil to dry out before you water. A good way to tell when the plant needs water is to look at the leaves. The green color starts to fade when the soil is dry. Using water with a high salt or chemical content (fluorine or chlorine) causes brown leaf tips. Never use water that had passed through a water softener; it is much too salty.",
        "Soil":"Best soil for a sansevieria plant: Use a good, rich, organic soil that drains quickly. If the soil isn't draining well and appears heavy and clay-like, add some builders sand."        
    }
    ]
}
,
{
    "About":[{
    "name": "Cliviaaaaaaaaaaaaaaaaaaaa",
    "Scientific Name": "Kaffir Lily",
    "Description": "Clivia plants, close relatives of Amaryllis plants, are easy- care almost indestructible flowering plants from South Africa. Named after a Duchess belonging to the Clive family, Clivias have long, thick, dark-green arching leaves growing out of a large plant bulb. The trumpet or lily- shaped flowers are 2″-3″ in size and can be orange, orange/red, yellow, or cream colored. Clivia flowers appear as a dense cluster of 15-20 small blooms at the end of a long stem. Clivia plants bloom for about 4 weeks during the late spring and early summer when the weather is warm and the days are long. A Clivia plant is a very poisonous plant and should be kept way from small children and pets. Read more about common houseplants that can be dangerous in my book Don’t Feed Me to Your Cat: A Guide to Poisonous Houseplants. Clivias are large plants that can grow 2-3 feet tall and almost as wide. Planting a Clivia in a heavy clay or ceramic pot prevents it from tipping over. The older a Clivia plant gets the more beautiful it becomes"
    }],
    "Care":[{
        "Light":"A Clivia plant requires bright, indirect light but no direct sun. Direct sun scorches the leaves and ruins the beautiful flowers. During the summer, a Clivia loves to go outside as long as you keep it in the shade.",
        "Water":"During the spring and summer, water well and then allow the top 50% of the soil to dry out before watering again. Reduce your water in the fall; and allow the soil dry out before you water during the winter. Pale green or orange lesions on the leaves indicate you are over-watering.",
        "Soil":"Use a fast -draining soil that has a lot of peat moss and some sand in it to prevent the roots of your Clivia plant from staying too wet."        
    }
    ]
}]
)


//query (R)
db.houseplant.find({})
db.houseplant.find({"About.name": "Spider Plant"})

//update by Scientific name to fix the typo in "name". Clivia. (U)
db.houseplant.updateOne(
{
    "About.Scientific Name": "Kaffir Lily"
    },
{
    $set:{"About.$.name": "Clivia"}
    }
)


//delete document by id (D). delete the extra(duplicated)
db.houseplant.deleteOne({
    "_id" : ObjectId("62ba7c64a6140063598e370c")}
)

//drop db.. byee bye (D)
db.houseplant.drop()


