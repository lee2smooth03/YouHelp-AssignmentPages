// ***************************************************************************************
// steamDBTables.JS - THIS FILE INITIATES THE CONNECTION TO THE MYSQL RELATIONAL DATABASE
// ***************************************************************************************

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");

// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// TABLE #1: STUDENT USERS
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const USERSTUDENT = sequelize.define("userStudent", {

// -- STUDENT IDENTIFICATION DATA --
  studentID:{
    type:Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true 
  },
  user_firstName:{
    type: Sequelize.STRING, allowNull: false
  },
  user_lastName:{
    type: Sequelize.STRING, allowNull: false
  },
  user_email:{
    type: Sequelize.STRING, allowNull: false
  },
  user_password:{
    type: Sequelize.STRING, allowNull: false
  },
  user_age:{
    type: Sequelize.INTEGER, allowNull: false
  },
  user_gender:{
    type: Sequelize.STRING, allowNull: false
  },
  user_raceEthnicity:{
    type: Sequelize.STRING, allowNull: false
  },
// -- STUDENT ACADEMIC DATA --
  grade_level:{
    type: Sequelize.INTEGER, allowNull: false
  },
  user_cumGPA:{
    type: Sequelize.INTEGER, allowNull: false
  },

// -- ALL OF THE REQUIRED COURSES STUDENTS WILL TAKE --
// -- Grades For Science Courses --
  subj_biologyGPA:{
    type: Sequelize.INTEGER, allowNull: false
  },
  subj_chemistryGPA:{
    type: Sequelize.INTEGER, allowNull: false
  },
  subj_physicsGPA:{
    type: Sequelize.INTEGER, allowNull: false
  },

// -- Grades For Math Courses --
  subj_algebraGPA:{
    type: Sequelize.INTEGER, allowNull: false
  },
  subj_geometryGPA:{
    type: Sequelize.INTEGER, allowNull: false
  },
  subj_statisticsGPA:{
    type: Sequelize.INTEGER, allowNull: false
  },
  subj_calculus1GPA:{
    type: Sequelize.INTEGER, allowNull: false
  },
  subj_calculus2GPA:{
    type: Sequelize.INTEGER, allowNull: false
  },

// -- Grades For Arts & Humanities Courses --
  subj_languageartsGPA:{
    type: Sequelize.INTEGER, allowNull: false
  },
  subj_socialstudiesGPA:{
    type: Sequelize.INTEGER, allowNull: false
  },
  subj_musicArtsGPA:{
    type: Sequelize.INTEGER, allowNull: false
  },
  subj_visualArtsGPA:{
    type: Sequelize.INTEGER, allowNull: false
  },
  timestamps: false
}); // End of Sequelize Definition-Configuration


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// TABLE #2: ADMIN USERS
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const USERADMIN = sequelize.define("userAdmin", {

// -- STUDENT IDENTIFICATION DATA --
  adminID:{
    type:Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true 
  },
  admin_firstName:{
    type: Sequelize.STRING, allowNull: false
  },
  admin_lastName:{
    type: Sequelize.STRING, allowNull: false
  },
  admin_email:{
    type: Sequelize.STRING, allowNull: false
  },
  admin_password:{
    type: Sequelize.STRING, allowNull: false
  },
  admin_age:{
    type: Sequelize.INTEGER, allowNull: false
  },
  admin_gender:{
    type: Sequelize.STRING, allowNull: false
  },
  admin_raceEthnicity:{
    type: Sequelize.STRING, allowNull: false
  },
  admin_type:{
    type: Sequelize.STRING, allowNull: false
  },
  admin_grade_level:{
    type: Sequelize.INTEGER, allowNull: false
  },
  admin_primarySubject:{
    type: Sequelize.INTEGER, allowNull: false
},
  timestamps: false
});


// Syncs with DB
// userStudent.sync();            //modified by Arthur on 09.01.2017
// userAdmin.sync();              //""
USERSTUDENT.sync();
USERADMIN.sync();

// Creates And Makes the Table Models Available For Other Server Side Files
// module.exports = userStudent;  // ??
// module.exports = userAdmin;    // ??
module.exports = USERSTUDENT;
module.exports = USERADMIN;