import React from "react";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./App.css";

function App() {
  const [url, setUrl] = React.useState("");
  const [shortUrl, setShortUrl] = React.useState("");
  const [copied, setCopied] = React.useState(false);
  const handleSubmit = async (e) => {
    const response = await axios.post("https://str9.herokuapp.com/url", {
      url,
    });
    setShortUrl(response.data.short_url);
    console.log(shortUrl);
  };
  return (
    <div className="App">
      <div>
        <h1 style={{ marginBottom: "40px" }}>url shortner</h1>
        <input
          style={{ padding: "5px 10px", width: "100%" }}
          type="text"
          placeholder="Paste Url"
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="return_link">
        {shortUrl && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <a href={shortUrl} target="_blank" style={{ marginRight: "40px" }}>
              {" "}
              {shortUrl}
            </a>
            <CopyToClipboard text={shortUrl} onCopy={() => setCopied(true)}>
              <button>Copy</button>
            </CopyToClipboard>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
