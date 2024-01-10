"use client";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useEffect, useState } from "react";

interface QAHistoryItem {
  id: number;
  question: string;
  answer: string;
}

const ChatChildPage = ({ params }: { params: { id: string } }) => {
  const [typingAnswer, setTypingAnswer] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [qaHistory, setQAHistory] = useState<QAHistoryItem[]>([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem("qaHistory" + params.id);
    if (storedHistory) {
      setQAHistory(JSON.parse(storedHistory));
    }
  }, []);

  const [text, setText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      if (inputValue.trim() === "") {
        return;
      }
      const newHistory: QAHistoryItem = {
        id: new Date().getTime(),
        question: inputValue,
        answer: inputValue,
      };
      // api response

      try {
        setQAHistory((prevHistory) => [...prevHistory, newHistory]),
          localStorage.setItem(
            "qaHistory" + params.id,
            JSON.stringify([...qaHistory, newHistory]),
          ),
          setInputValue("");
      } catch (error) {
        console.error("Error getching data: ", error);
      }
    }
  };
  return (
    <div>
      <div className="relative flex h-full flex-col">
        <h1 className="item-center flex justify-center bg-[#00283C] text-3xl font-bold text-white">
          You are in {params.id} Page
        </h1>
      </div>
      <ScrollArea asChild className="h-72 w-full rounded-md border">
        {params.id === "finance" && (
          <div>
            Welcome to {params.id}
            {qaHistory.map((item, index) => (
              <div
                key={item.id}
                className={`qa-container ${
                  index % 2 === 0 ? "bg-blue-200" : "bg-blue-300"
                }`}
              >
                <div className="rounded-md border-2 p-2 text-xl text-white">
                  Question: {item.question}
                </div>
                <div className="p-2">Answer: {item.answer}</div>
              </div>
            ))}
          </div>
        )}
      </ScrollArea>
      <div className="fixed bottom-0 left-72 flex w-[85%] flex-col overflow-hidden bg-white p-4">
        <Textarea
          rows={1}
          className="  resize-none"
          placeholder="Type your question and press Enter"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={(event) =>
            inputValue.trim() === "" && event.key === "Enter"
              ? event.preventDefault()
              : handleSubmit(event)
          }
        />
      </div>
    </div>
  );
};

export default ChatChildPage;
