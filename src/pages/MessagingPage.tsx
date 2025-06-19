import React, { useState } from 'react';
import { Search, Send, Paperclip, Phone, Video, MoreVertical } from 'lucide-react';

const MessagingPage = () => {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [messageText, setMessageText] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
      car: '2020 BMW 3 Series',
      lastMessage: 'Is this car still available?',
      time: '2h ago',
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: 'Mike Thompson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
      car: '2019 Audi A4',
      lastMessage: 'Would you consider £21,000?',
      time: '4h ago',
      unread: 0,
      online: false,
    },
    {
      id: 3,
      name: 'Emma Wilson',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=100',
      car: '2021 Mercedes C-Class',
      lastMessage: 'Thank you for the information!',
      time: '1d ago',
      unread: 0,
      online: true,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'Sarah Johnson',
      text: 'Hi there! I\'m interested in your 2020 BMW 3 Series. Is it still available?',
      time: '10:30 AM',
      isOwn: false,
    },
    {
      id: 2,
      sender: 'You',
      text: 'Hello Sarah! Yes, it\'s still available. Would you like to know more about it?',
      time: '10:45 AM',
      isOwn: true,
    },
    {
      id: 3,
      sender: 'Sarah Johnson',
      text: 'Great! Can you tell me about the service history and if there are any issues I should know about?',
      time: '10:47 AM',
      isOwn: false,
    },
    {
      id: 4,
      sender: 'You',
      text: 'The car has full BMW service history with 3 services completed. No major issues, just regular maintenance. It\'s been well looked after.',
      time: '10:50 AM',
      isOwn: true,
    },
    {
      id: 5,
      sender: 'Sarah Johnson',
      text: 'That sounds perfect. Would it be possible to arrange a viewing this weekend?',
      time: '2h ago',
      isOwn: false,
    },
  ];

  const currentConversation = conversations.find(c => c.id === selectedConversation);

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // Handle sending message
      setMessageText('');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-soft overflow-hidden" style={{ height: 'calc(100vh - 200px)' }}>
          <div className="flex h-full">
            {/* Conversations List */}
            <div className="w-1/3 border-r border-gray-200 flex flex-col">
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <h1 className="text-xl font-bold text-gray-900 mb-4">Messages</h1>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              {/* Conversations */}
              <div className="flex-1 overflow-y-auto">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation.id)}
                    className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors duration-200 ${
                      selectedConversation === conversation.id ? 'bg-primary-50 border-primary-200' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <img
                          src={conversation.avatar}
                          alt={conversation.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        {conversation.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-success-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-medium text-gray-900 truncate">{conversation.name}</h3>
                          <span className="text-xs text-gray-500">{conversation.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{conversation.car}</p>
                        <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                      </div>
                      {conversation.unread > 0 && (
                        <div className="bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {conversation.unread}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {currentConversation ? (
                <>
                  {/* Chat Header */}
                  <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <img
                          src={currentConversation.avatar}
                          alt={currentConversation.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        {currentConversation.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-success-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div>
                        <h2 className="font-medium text-gray-900">{currentConversation.name}</h2>
                        <p className="text-sm text-gray-600">{currentConversation.car}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                        <Phone className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                        <Video className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            message.isOwn
                              ? 'bg-primary-600 text-white'
                              : 'bg-gray-100 text-gray-900'
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <p className={`text-xs mt-1 ${
                            message.isOwn ? 'text-primary-100' : 'text-gray-500'
                          }`}>
                            {message.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="p-6 border-t border-gray-200">
                    <div className="flex items-center space-x-4">
                      <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                        <Paperclip className="h-5 w-5" />
                      </button>
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          value={messageText}
                          onChange={(e) => setMessageText(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                          placeholder="Type your message..."
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      <button
                        onClick={handleSendMessage}
                        disabled={!messageText.trim()}
                        className="bg-primary-600 text-white p-2 rounded-lg hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
                      >
                        <Send className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No conversation selected</h3>
                    <p className="text-gray-600">Choose a conversation from the list to start messaging</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagingPage;