import { useState, useEffect } from 'react';
import { Settings, Sparkles, Copy, Check, Twitter, Linkedin, FileText, Github, Loader2 } from 'lucide-react';

type Tab = 'twitter' | 'linkedin' | 'blog';

export default function App() {
  const [apiKey, setApiKey] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('twitter');

  const [results, setResults] = useState<{ [key in Tab]: string }>({
    twitter: '',
    linkedin: '',
    blog: ''
  });

  const [copiedTab, setCopiedTab] = useState<Tab | null>(null);

  useEffect(() => {
    const savedKey = localStorage.getItem('gemini_api_key');
    if (savedKey) setApiKey(savedKey);
  }, []);

  const saveApiKey = (key: string) => {
    setApiKey(key);
    localStorage.setItem('gemini_api_key', key);
  };

  const handleCopy = (tab: Tab, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTab(tab);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  const generateContent = async () => {
    if (!apiKey) {
      setShowSettings(true);
      alert('Please enter your Gemini API Key first.');
      return;
    }
    if (!inputText.trim()) {
      alert('Please enter some text to repurpose.');
      return;
    }

    setIsLoading(true);

    try {
      const generateForPlatform = async (platformPrompt: string) => {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{
              parts: [{ text: `${platformPrompt}\n\nSource text:\n${inputText}` }]
            }]
          })
        });

        if (!response.ok) throw new Error('API request failed');
        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
      };

      const [twitter, linkedin, blog] = await Promise.all([
        generateForPlatform('You are an expert ghostwriter. Turn the following text into a highly engaging Twitter thread. Use an attention-grabbing hook for the first tweet. Separate tweets logically.'),
        generateForPlatform('You are a LinkedIn influencer. Turn the following text into an engaging LinkedIn post with good spacing, emoji use, and a call to action at the end.'),
        generateForPlatform('You are an SEO expert. Turn the following text into a detailed Blog Post outline with an introduction, H2 and H3 headings, and conclusion.')
      ]);

      setResults({ twitter, linkedin, blog });
    } catch (error) {
      console.error(error);
      alert('Error generating content. Please check your API key and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans">
      <header className="border-b border-neutral-800 bg-neutral-900/50 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="text-purple-500" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">RepurposeAI</h1>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hidden sm:flex text-sm text-neutral-400 hover:text-white items-center gap-1">
              <Github size={16} /> Open Source
            </a>
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="flex items-center gap-2 text-sm bg-neutral-800 hover:bg-neutral-700 px-3 py-1.5 rounded-lg transition-colors"
            >
              <Settings size={16} />
              <span className="hidden sm:inline">Settings</span>
            </button>
          </div>
        </div>
      </header>

      {showSettings && (
        <div className="bg-neutral-900 border-b border-neutral-800 p-4">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-md">
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Gemini API Key
              </label>
              <div className="flex gap-2">
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => saveApiKey(e.target.value)}
                  placeholder="AIzaSy..."
                  className="flex-1 bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-purple-500"
                />
              </div>
              <p className="text-xs text-neutral-500 mt-2">
                Your key is stored locally in your browser and never sent to our servers. Get it free from Google AI Studio.
              </p>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-6xl mx-auto p-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            1. Paste your content
          </h2>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Paste your YouTube transcript, article, or raw thoughts here..."
            className="w-full h-[500px] bg-neutral-900 border border-neutral-800 rounded-xl p-4 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 resize-none"
          />
          <button
            onClick={generateContent}
            disabled={isLoading}
            className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl py-3 px-6 font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-purple-900/20"
          >
            {isLoading ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
            {isLoading ? 'Generating Magic...' : 'Magic Repurpose'}
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">2. Get your formats</h2>

          <div className="flex bg-neutral-900 rounded-lg p-1 gap-1">
            {(['twitter', 'linkedin', 'blog'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm font-medium transition-colors ${activeTab === tab
                  ? 'bg-neutral-800 text-white shadow'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                  }`}
              >
                {tab === 'twitter' && <Twitter size={16} />}
                {tab === 'linkedin' && <Linkedin size={16} />}
                {tab === 'blog' && <FileText size={16} />}
                <span className="capitalize">{tab}</span>
              </button>
            ))}
          </div>

          <div className="relative bg-neutral-900 border border-neutral-800 rounded-xl p-4 h-[500px] overflow-auto group">
            <div className="absolute top-4 right-4">
              <button
                onClick={() => handleCopy(activeTab, results[activeTab])}
                disabled={!results[activeTab]}
                className="bg-neutral-800 hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed p-2 rounded-md transition-colors"
                title="Copy to clipboard"
              >
                {copiedTab === activeTab ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
              </button>
            </div>

            {results[activeTab] ? (
              <div className="whitespace-pre-wrap text-sm text-neutral-300 leading-relaxed pr-12">
                {results[activeTab]}
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-neutral-600">
                <Sparkles size={48} className="mb-4 opacity-50" />
                <p>Results will appear here</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
