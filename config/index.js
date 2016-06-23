var configValues = require('./config');

module.exports = {
    getDbConnectionString : function(){
        return "mongodb://"+configValues.uname + ":" + configValues.pwd + "@ds015584.mlab.com:15584/nodetodo";
    }
}