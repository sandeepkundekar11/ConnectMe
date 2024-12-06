import AiChatAiResponse from "./AiChatAIResponse";

const AiChatUserQuestion = () => {
  return (
    <div className="w-full">
      {/* message Head Section */}
      <div className="flex items-center w-full p-3 bg-blue-50 min-h-20 max-h-max rounded-md border">
        <img className="w-10 h-10 bg-slate-600 rounded-xl" src="" alt="" />
        <p className="break-words ml-3 text-gray-500 font-medium">
          What can i do for you?
        </p>
      </div>

      {/* Ai Response */}
      <AiChatAiResponse />
    </div>
  );
};
export default AiChatUserQuestion;
