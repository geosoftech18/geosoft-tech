import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

interface IProps {
  question: string;
  answer: string;
}

const Accordion: React.FC<IProps> = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="relative mt-5 cursor-pointer border-0 border-b border-solid border-neutral-300 bg-white p-2 transition-all"
      onClick={toggleAccordion}
    >
      <div
        className="flex items-center justify-between [&>h2]:aria-expanded:text-blue"
        aria-expanded={isExpanded}
      >
        <h2 className="text-lg font-semibold">{question}</h2>
        <button
          className="rounded-full transition-all aria-expanded:rotate-45"
          aria-expanded={isExpanded}
        >
          <AiOutlinePlus size={24} />
        </button>
      </div>
      <div
        className="h-0 overflow-hidden opacity-0 transition-all aria-expanded:mt-4 aria-expanded:block aria-expanded:h-auto aria-expanded:animate-fade aria-expanded:p-2 aria-expanded:opacity-100"
        aria-expanded={isExpanded}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
