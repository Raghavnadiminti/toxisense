import { useState } from 'react';
import axios from 'axios';

export default function TextClassifier() {
  const [text, setText] = useState('');
  const [toxicityScore, setToxicityScore] = useState<number | null>(null);

  const analyzeText = async () => {
    try {
      const response = await axios.post('https://perspective-api-backend.onrender.com/analyze-text', { text });
      setToxicityScore(response.data.toxicityScore);
    } catch (error) {
      console.error('Error analyzing text:', error);
      setToxicityScore(null);
    }
  };

  const getStatusColor = () => {
    if (toxicityScore === null) return 'bg-gray-300';
    if (toxicityScore < 0.3) return 'bg-green-500'; // positive
    if (toxicityScore < 0.7) return 'bg-yellow-500'; // neutral
    return 'bg-red-500'; // negative
    console.log(toxicityScore);
  };

  const getClassification = () => {
    if (toxicityScore === null) return '';
    if (toxicityScore < 0.3) return 'positive';
    if (toxicityScore < 0.7) return 'neutral';
    return 'negative';
  };

  return (
    <div className="flex flex-col items-center space-y-4 hgt">
      <textarea
        className="w-[500px] h-[300px] p-4 border rounded-lg shadow-sm resize-none text-black box"
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={analyzeText}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-orange-600"
      >
        Analyze Text
      </button>
      {toxicityScore !== null && (
        <div className="flex items-center space-x-2 floating-word res">
          <div className={`w-3 h-3 rounded-full ${getStatusColor()}`} />
          <span className="capitalize">{getClassification()}</span>
          <span className="text-sm text-white-600">({(toxicityScore * 100).toFixed(2)}%)</span>
        </div>
      )}
    </div>
  );
}
