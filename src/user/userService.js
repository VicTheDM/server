var userModel = require('./userModel');

module.exports.getDataFromDBService = () => {

    return new Promise(function checkURL(resolve, reject) {
 
        userModel.find({})
        .then(function (models) {
          console.log(models);          
          resolve(models)
        })
        .catch(function (err) {
          console.log(err);
          reject(false);
        });
 
    });
 
 }

 module.exports.createUserDBService = (userDetails) => {


    return new Promise(function myFn(resolve, reject) {
 
        var userModelData = new userModel();
 
        userModelData.name = userDetails.name;
        userModelData.address = userDetails.address;
        userModelData.phone = userDetails.phone;

        userModelData.save()
        .then(function (models) {
          console.log(models);          
          resolve(models)
        })
        .catch(function (err) {
          console.log(err);
          reject(false);
        });
 
    });
 
 }


 module.exports.updateUserDBService = (id,userDetails) => {     
    console.log(userDetails);
    return new Promise(function myFn(resolve, reject) {
        userModel.findByIdAndUpdate(id,userDetails)
        .then(function (models) {
          console.log(models);          
          resolve(models)
        })
        .catch(function (err) {
          console.log(err);
          reject(false);
        });
 
    });
 }

 module.exports.removeUserDBService = (id) => { 
    return new Promise(function myFn(resolve, reject) {
        userModel.findByIdAndDelete(id)
        .then(function (models) {
          console.log(models);          
          resolve(models)
        })
        .catch(function (err) {
          console.log(err);
          reject(false);
        });
    });
 
 }