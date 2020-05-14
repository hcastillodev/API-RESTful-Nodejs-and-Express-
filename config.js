process.env.NODE_ENV = process.env.NODE_ENV || "dev"; // To Know if we are in production or development
process.env.PORT = process.env.PORT || 3000 // to know port or assign port

if(process.env.NODE_ENV === 'dev'){
    process.env.URL_DB = 'mongodb://localhost:27017/marathonspanama'
}else{
    //To use with cluster from atlas "Remember whitelist your IP ADDRESS or let allow from anywhere"
    // devHcastillo       -> username for test
    // Loveprogramming123 -> password for test
    process.env.URL_DB = 'mongodb+srv://devHcastillo:Loveprogramming123@marathonspanama-tmm1v.mongodb.net/test?retryWrites=true&w=majority'
}