import React, { useState, useEffect, useRef } from 'react';
import '../styles/compnents_styles/chatbot.css';
import { IoSend } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { HiMinusSm } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import chatbotImg1 from '../assets/images/chatbot_img1.png';
import axios from 'axios';

function Chatbot() {
    const [isChatbotVisible, setIsChatbotVisible] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [showCloseConfirmation, setShowCloseConfirmation] = useState(false); // State for close confirmation dialog

    // Get formatted date and time for each message in Indian format without seconds
    const getCurrentDateTime = () => {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0'); // January is 0
        const year = now.getFullYear();
        const time = now.toLocaleTimeString('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true });

        return `${day}-${month}-${year} ${time}`;
    };

    // Initialize with static bot messages
    const [messages, setMessages] = useState([]);
        // {
        //     answer: "Welcome to Smartping, trusted by over 7000 brands with multiple solutions that create great customer experience.",
        //     answer_type: 'text', 
        //     sender: 'bot'
        // },
        // {
        //     answer: "To assist you accordingly, please let me know if you are:",
        //     answer_type: 'text',
        //     sender: 'bot'
        // },
        // {
        //     answer: "New Customer\n Existing Customer\n DLT Support\n FAQs", // Comma-separated values as a string
        //     answer_type: 'button',
        //     sender: 'bot'            
        // }
        
        useEffect(() => {
            const fetchMessages = async () => {
                try {
                    const response = await axios.post('http://localhost:6001/chatbotRes_onload');
                    setMessages(response.data.results); // Set the fetched messages
                    console.log()
                } catch (error) {
                    console.error('Error loading messages:', error);
                }
            };
    
            fetchMessages();
        }, []); // Empty dependency array means it runs once on component mount
    

    const messagesEndRef = useRef(null);

    // Toggle chatbot visibility
    const handleImageClick = () => {
        setIsChatbotVisible(!isChatbotVisible);
        
    };

    // Scroll to the bottom of the messages whenever a new message is added
    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Call scrollToBottom every time the messages array changes
    useEffect(() => {
        scrollToBottom();
    }, [messages,handleImageClick]);

    // Handle sending messages
    const handleSendClick = () => {
        if (userInput.trim()) {
            const userMessage = {
                answer: userInput,
                sender: 'user'
                // timestamp: getCurrentDateTime(),
            };

            const botMessage = {
                answer: "This is a response from the bot.",
                sender: 'bot'
                // timestamp: getCurrentDateTime(),
            };

            // Add user's message, then bot's response
            setMessages([...messages, userMessage, botMessage]);

            setUserInput(''); // Clear input field
        }
    };

    
    // Handle button click events
const handleButtonClick = async (option) => {
    // const buttonElement = option.target; // Assuming option is the event
    // buttonElement.disabled = true;
    const userMessage = {
        answer: option,
        sender: 'user',
        answer_type: 'text'
    };

    // Add the user's message to the chat immediately
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
        // Make the axios call to the backend
        const response = await axios.post('http://localhost:6001/chatbotRes', { question: option });

        // Assuming response.data is an array of bot responses like you shared
        const botResponses = response.data.results; // This is an array
        console.log('botResponses: ', botResponses);

        // Add each bot response to the chat based on its type
        botResponses.forEach((response) => {
            const botMessage = {
                answer: response.answer,
                sender: 'bot',
                answer_type: response.answer_type
            };

            setMessages((prevMessages) => [...prevMessages, botMessage]);
        });

    } catch (error) {
        console.error('Error fetching response from the bot:', error);

        const errorMessage = {
            answer: 'Sorry, there was an error processing your request. Please try again.',
            sender: 'bot',
            answer_type: 'text',
            // timestamp: getCurrentDateTime(),
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
};


    // Show confirmation dialog when clicking the close button
    const handleCloseClick = () => {
        setShowCloseConfirmation(true);
    };

    // Handle Yes in the confirmation dialog (refresh the page)
    const handleConfirmYes = () => {
        const botbodyElements = document.getElementsByClassName('botbody');
        
        if (botbodyElements.length > 0) {
            botbodyElements[0].innerHTML = '' // Clear the inner HTML of the first element with the class 'botbody'
            
            setShowCloseConfirmation(false);
            setIsChatbotVisible(!isChatbotVisible);
        }
    };
    

    // Handle No in the confirmation dialog (hide the dialog)
    const handleConfirmNo = () => {
        setShowCloseConfirmation(false); // Close the dialog without refreshing
    };

    return (
        <>
            <div className='contain'>
                {isChatbotVisible && (
                    <div className='chatbot_cont'>
                        {/* Bot Header */}
                        <div className='botHeader'>
                            <div>Chatbot</div>
                            <div>
                                <span className='px-1 fs_19' onClick={handleImageClick}><HiMinusSm /></span>
                                <span className='px-1 fs_19' onClick={handleCloseClick}><IoClose /></span>
                            </div>
                        </div>

                        {/* Close Confirmation Dialog */}
                        {showCloseConfirmation && (
                            <div className="confirmation-dialog">
                                <div className='fw_500'>Want to end this conversation?</div>
                                <div>This will erase the chat and close the window.</div>                                
                                <button onClick={handleConfirmYes} className='yes_btn'>Yes</button>
                                <button onClick={handleConfirmNo} className='no_btn'>No</button>
                            </div>
                        )}

                        {/* Bot Body */}
                        <div className='botbody'>
                            {messages.map((message, index) => (
                                <div key={index} className={message.sender === 'user' ? 'userReq' : 'botRes'}>
                                    {message.sender === 'bot' && (
                                        <div className='bot_icon2'>
                                            <img src={chatbotImg1} alt="Bot Avatar" />
                                        </div>
                                    )}

                                    {/* Check if the message contains comma-separated values */}
                                    {message.answer_type === 'button' ? (
                                        <div className="button-options">
                                            {message.answer.split('\n').map((button, idx) => (
                                                <button key={idx} className="option-button" onClick={() => handleButtonClick(button.trim())}>
                                                    {button.trim()}
                                                </button>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className={`chatText ${message.sender === 'user' ? 'userMessage' : 'botMessage'}`}>
                                            <div>{message.answer}</div>
                                        </div>
                                    )}

                                    {/* Display the timestamp below the message */}
                                    <div className='timestamp'>
                                        {/* {message.timestamp} */}
                                        {getCurrentDateTime()}
                                    </div>
                                </div>
                            ))}
                            {/* Reference to scroll to the bottom */}
                            <div ref={messagesEndRef}></div>
                        </div>

                        {/* Bot Footer */}
                        <div className='botfooter'>
                            <div className="bar"><FaBars /></div>
                            <input 
                                type="text" 
                                className="bot_input" 
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)} 
                                placeholder="Type a message"
                            />
                            <div className='send_btn' onClick={handleSendClick}>
                                <IoSend />
                            </div>
                        </div>
                    </div>
                )}

                {/* Chatbot Icon to toggle visibility */}
                <div className='bot_icon'>
                    <img src={chatbotImg1} alt="Chatbot" onClick={handleImageClick} />
                </div>
            </div>
        </>
    );
}

export default Chatbot;
