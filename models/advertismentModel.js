module.exports =(sequelize,DataTypes) =>{

    const Advertisment = sequelize.define("advertisment",{
         topic:{
             type: DataTypes.STRING,
             
         },
         category:{
            type: DataTypes.STRING
         },
         price:{
              type: DataTypes.INTEGER
         },
         
         city:{
         type: DataTypes.STRING
         },
         description:{
            type: DataTypes.TEXT
         },
        image:{
        type: DataTypes.TEXT
        }
    })

    return Advertisment
}