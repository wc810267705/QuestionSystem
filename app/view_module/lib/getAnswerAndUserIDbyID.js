module.exports = getAnswerAndUserIDbyID;

function getAnswerAndUserIDbyID(ID,callback){

    let config = this.config;
    getDetail();


    function executeCallback(argumentOfCallback){
        if(callback!=undefined)
            callback(argumentOfCallback);
    }

    function getDetail(){

        let sql = 'SELECT answer,userID,questionID,score FROM AnswerTable WHERE ID=' + ID;

        config.modules['saferman'].sql(sql,function(results){
            executeCallback(results[0]);
        });

    };

}