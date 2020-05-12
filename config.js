process.env.NODE_ENV = process.env.NODE_ENV || "dev"; // To Know if we are in production or development
process.env.PORT = process.env.PORT || 3000 // to know port or assign port

if(process.env.NODE_ENV === 'dev'){
    process.env.URL_DB = 'mongodb://localhost:27017/marathonspanama'
}