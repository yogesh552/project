import React, { useState, useEffect, useRef } from 'react';
import '../styles/compnents_styles/chatbot.css';
import { IoSend } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { HiMinusSm } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import chatbotImg1 from '../assets/images/chatbot_img1.png';

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
    const [messages, setMessages] = useState([
        {
            text: "Welcome to Smartping, trusted by over 7000 brands with multiple solutions that create great customer experience.",
            msg_type: 'text',
            sender: 'bot',
            timestamp: getCurrentDateTime()
        },
        {
            text: "To assist you accordingly, please let me know if you are:",
            msg_type: 'text',
            sender: 'bot',
            timestamp: getCurrentDateTime()
        },
        {
            text: "New Customer, Existing Customer, DLT Support, FAQs", // Comma-separated values as a string
            msg_type: 'button',
            sender: 'bot',            
            timestamp: getCurrentDateTime()
        },
        {
            text: "Enterprise, Reseller, Government, Channel Partner, Others, FAQs, Trending, Back to Menu", // Comma-separated values as a string
            msg_type: 'button',
            sender: 'bot',            
            timestamp: getCurrentDateTime()
        }
    ]);

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
    }, [messages]);

    // Handle sending messages
    const handleSendClick = () => {
        if (userInput.trim()) {
            const userMessage = {
                text: userInput,
                sender: 'user',
                timestamp: getCurrentDateTime(),
            };

            const botMessage = {
                text: "This is a response from the bot.",
                sender: 'bot',
                timestamp: getCurrentDateTime(),
            };

            // Add user's message, then bot's response
            setMessages([...messages, userMessage, botMessage]);

            setUserInput(''); // Clear input field
        }
    };

    // Handle button click events
    const handleButtonClick = (option) => {
        const userMessage = {
            text: option,
            sender: 'user',
            timestamp: getCurrentDateTime(),
        };

        const botMessage = {
            text: `You selected ${option}. Here is some information.`,
            sender: 'bot',
            timestamp: getCurrentDateTime(),
        };

        setMessages([...messages, userMessage, botMessage]);
    };

    // Show confirmation dialog when clicking the close button
    const handleCloseClick = () => {
        setShowCloseConfirmation(true);
    };

    // Handle Yes in the confirmation dialog (refresh the page)
    const handleConfirmYes = () => {
        window.location.reload(); // Refresh the page
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
                                    {message.msg_type === 'button' ? (
                                        <div className="button-options">
                                            {message.text.split(',').map((button, idx) => (
                                                <button key={idx} className="option-button" onClick={() => handleButtonClick(button.trim())}>
                                                    {button.trim()}
                                                </button>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className={`chatText ${message.sender === 'user' ? 'userMessage' : 'botMessage'}`}>
                                            <div>{message.text}</div>
                                        </div>
                                    )}

                                    {/* Display the timestamp below the message */}
                                    <div className='timestamp'>
                                        {message.timestamp}
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
