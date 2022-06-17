module.exports =(sequelize,DataTypes) =>{

    const Seller = sequelize.define("seller",{
        
         name:{
            type: DataTypes.STRING,
             allowNull:false
         },
         email:{
            type: DataTypes.STRING,
             allowNull:false
         },
       
         gender:{
         type: DataTypes.STRING
         },
         location:{
            type: DataTypes.STRING
         },
        phonenum:{
        type: DataTypes.STRING
        },
        image:{
            type: DataTypes.STRING
            }
        
    })

    return Seller
}