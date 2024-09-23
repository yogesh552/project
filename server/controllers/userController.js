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



const chatbotRes_onload = async (req, res) => {
    try {
        let question = 'Welcome Message';

        let query = `
            SELECT 
                parent.question_id, child.answer, child.answer_type
            FROM
                bot_ques_master AS parent
            LEFT JOIN 
                bot_ques_master AS child  
            ON 
                parent.question_id = child.parent_id
            WHERE 
                parent.question = ?`;

        let data = [question];

        const results = await executeQuery(query, data);
        console.log('results: ', results);

        res.send({ results: results });
    } catch (error) {
        console.log('Error:', error);
        res.status(500).send({ error: 'An error occurred' });
    }
}

const chatbotRes = async (req, res) => {
    try {

        console.log('question: ', req.body);
        let question = req.body.question;
        console.log('question: ', question);
        
        let query = `
            SELECT 
                parent.question_id, child.answer, child.answer_type, child.sender
            FROM
                bot_ques_master AS parent
            LEFT JOIN 
                bot_ques_master AS child  
            ON 
                parent.question_id = child.parent_id
            WHERE 
                parent.question = ?`;

        let data = [question];

        const results = await executeQuery(query, data);
        console.log('results: ', results);

        res.send({ results: results });
    } catch (error) {
        console.log('Error:', error);
        res.status(500).send({ error: 'An error occurred' });
    }
}







module.exports = {
    chatbotRes_onload,
    chatbotRes
};