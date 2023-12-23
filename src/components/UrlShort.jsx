import { useState } from "react";
import axios from "axios";

const UrlShort = () => {
  const [inputURL, setInputURL] = useState("");
  const [shortURL, setShortURL] = useState("");
  const [copied, setCopied] = useState(false);
  const [isValidURL, setIsValidURL] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check if the inputURL is a valid URL
      if (!isValidURLFormat(inputURL)) {
        setIsValidURL(false);
        return;
      }

      const response = await axios.post("https://urlbackend-v8sp.onrender.com/homepage/urlshortner", {
        original_url: inputURL,
      });

      setShortURL(response.data.short_url);
      setIsValidURL(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortURL);
    setCopied(true);
  };

  const redirectToOriginal = async () => {
    try {
        // Make an API request to get the original URL based on the short URL
        const response = await axios.get(`http://localhost:8000/homepage/${shortURL}`);
        const originalURL = response.data.original_url;
console.log(response);
        // Redirect to the original URL
        window.location.href = originalURL;
    } catch (error) {
        console.error(error);
    }
};

  const isValidURLFormat = (url) => {
    // Use a regular expression to check if the URL is in a valid format
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  };

  return (
    <div className="max-w-2xl w-lg mx-auto p-6 bg-gradient-to-b from-teal-900 to-cyan-600 rounded shadow-2xl">
      <form className="" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div className="flex items-center space-x-2">
          <input
            className={`w-full p-2 border ${isValidURL ? 'border-gray-300' : 'border-red-500'} rounded`}
            required
            type="url"
            onChange={(e) => setInputURL(e.target.value)}
            value={inputURL}
            placeholder="Enter a URL"
          />
          <button className="bg-blue-500 text-white p-2 rounded" type="submit">
            Generate
          </button>
        </div>
        {!isValidURL && (
          <p className="text-red-500 text-xs mt-1">Please enter a valid URL format.</p>
        )}
      </form>

      {shortURL && (
        <div className="mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-full p-2 border border-gray-300 rounded">
              <strong>Original URL:</strong> {inputURL}
            </div>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              value={shortURL}
              readOnly
            />
           
            <button to="#" onClick={redirectToOriginal} className="w-1/2 p-2 border border-gray-300 rounded">
    {shortURL}
</button>
<button
              className="bg-green-500 text-white p-2 rounded"
              onClick={handleCopy}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrlShort;
