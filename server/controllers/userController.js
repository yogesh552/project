const {executeQuery}=require('../config/dbConfig')


function getCurrentDateAndTime(daysToAdd = 0) {
    const currentDate = new Date();
    
    // Add the specified number of days
    currentDate.setDate(currentDate.getDate() + daysToAdd);
    
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
    
    const reversedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return reversedDate;
}
// answer,
//                 answer_type

// const chatbotRes_onload=async (req,res) =>{
//     try{

//         let query
//         let data
//         let question='Welcome Message'
        
//         query =`
//             SELECT 
//                 question_id
//             FROM
//                 bot_ques_master
//             WHERE 
//                 question=? `        
//         data=[question]
        
//         const results = await executeQuery(query,data);
//         console.log('results: ', results);

        
//         query=`
//             SELECT 
//                 answer
//             FROM
//                 bot_ques_master
//             WHERE
//                 parent_id=?
//                 `

//         data=[results[0].question_id]
        
//         const results2 = await executeQuery(query,data);
//         console.log('results2: ', results2);


//         res.send({results:results, results2:results2})
//     }
//     catch(error){
//         console.log('Error:',error)
//     }
// }

const chatbotRes_onload = async (req, res) => {
    try {
        let question = 'Welcome Message';

        let query = `
            SELECT 
                q1.question_id, q2.answer
            FROM 
                bot_ques_master q1
            LEFT JOIN 
                bot_ques_master q2 
            ON 
                q1.question_id = q2.parent_id
            WHERE 
                q1.question = ?`;

        let data = [question];

        const results = await executeQuery(query, data);
        console.log('results: ', results);

        res.send({ results: results });
    } catch (error) {
        console.log('Error:', error);
        res.status(500).send({ error: 'An error occurred' });
    }
}







// const chatbotRes=async (req,res) =>{
//     try{

//         // let query =``        
//         // let data=[]
//         // const results = await executeQuery(query,data);
        
//         // res.send({})
//     }
//     catch(error){
//         console.log('Error:',error)
//     }
// }


module.exports = {
    chatbotRes_onload
    
};