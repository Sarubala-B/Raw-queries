const {DataTypes} = require ('sequelize');
const sequelize = require ('./config/database');
const User = require ('./models/user');


// async function createTable() {
//     try {
//       await sequelize.sync({ force: true });  // force: true drops the table if it exists
//       console.log('User table has been created.');
//     } catch (error) {
//       console.error('Error creating the User table:', error);
//     }
//   }
// createTable();


// async function insertUsers() {
//     try {
//       await User.bulkCreate([
//         { 
//             name: 'John Doe', 
//             email: 'john@example.com', 
//             password: '12345' },
//         { 
//             name: 'Jane Smith', 
//             email: 'jane@example.com', 
//             password: 'password' },
//         { 
//             name: 'Robert Brown', 
//             email: 'robert@example.com', 
//             password: 'qwerty' },
//         { 
//             name: 'Emily Davis', 
//             email: 'emily@example.com', 
//             password: 'abcde' },
//         { 
//             name: 'Michael Johnson', 
//             email: 'michael@example.com', 
//             password: 'pass123' }
//       ]);
  
//       console.log('Data inserted successfully.');
//     } catch (error) {
//       console.error('Error inserting users:', error);
//     }
//   }
// insertUsers();

  
async function fetchUser() {
    try {
      const user = await User.findOne({
        where: { id: 1 },  
        // raw: true,  
      });
      console.log(user);  
    } catch (error) {
      console.error('Error fetching the user:', error);
    }
  }
fetchUser();
  