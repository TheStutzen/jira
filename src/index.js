const sequelize = require("./database/index");
const user = require("./database/models/user/user");

sequelize.sync({alter:true}).then(async () => {
    console.log("dataBase synced");
  });
const peaple ={
  title: "Xach"
}
async function createUser(peaple){
  await user.create(peaple)
}
createUser (peaple)
