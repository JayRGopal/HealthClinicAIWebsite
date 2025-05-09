"use client";

interface ChatBotProps {
  chatMessages: string[];
  setChatMessages: React.Dispatch<React.SetStateAction<string[]>>;
  chatInput: string;
  setChatInput: React.Dispatch<React.SetStateAction<string>>;
  chatbotOpen: boolean;
  setChatbotOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatBot = ({
  chatMessages,
  setChatMessages,
  chatInput,
  setChatInput,
  chatbotOpen,
  setChatbotOpen,
}: ChatBotProps) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-end justify-end bg-black/30">
        <div
          className="fixed inset-0"
          onClick={() => setChatbotOpen(false)}
          style={{ zIndex: 1 }}
        />

        <div
          className="relative m-8 mb-32 w-full max-w-md rounded-lg bg-white p-4 shadow-lg"
          onClick={(e) => e.stopPropagation()}
          style={{ zIndex: 2 }}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Kyron AI Assistant</h3>
            <button
              onClick={() => setChatbotOpen(false)}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          <div className="mb-2 max-h-60 flex-1 overflow-y-auto rounded pb-2 text-sm">
            {chatMessages.length === 0 && (
              <p className="text-xs text-gray-400">Ask me anything...</p>
            )}
            {chatMessages.map((msg, index) => (
              <div key={index} className="mb-1">
                {msg}
              </div>
            ))}
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Ask Kyron..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              className="w-full rounded border px-2 py-1 text-sm"
            />

            <button
              onClick={() => {
                if (chatInput.trim() !== "") {
                  setChatMessages([...chatMessages, chatInput]);
                  setChatInput("");
                }
              }}
              className="rounded bg-blue-600 px-2 py-1 text-sm text-white"
            >
              Send
            </button>
          </div>
        </div>
        {/* Click outside to close */}
        <div className="fixed inset-0" onClick={() => setChatbotOpen(false)} />
      </div>
    </>
  );
};

export default ChatBot;
