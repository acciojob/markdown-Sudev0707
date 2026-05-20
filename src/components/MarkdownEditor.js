import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('# Hello, Markdown!\n\nThis is a **live** preview editor.\n\n- Write something\n- See it render instantly');
  const [isLoading, setIsLoading] = useState(false);

  // Simulate loading effect for smooth transitions
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, [markdown]);

  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="markdown-editor-container">
      <div className="editor-layout">
        {/* Input Section */}
        <div className="input-section">
          <div className="section-header">
            <span className="section-title">Markdown Input</span>
          </div>
          <textarea
            className="textarea"
            value={markdown}
            onChange={handleMarkdownChange}
            placeholder="Write your Markdown here..."
            aria-label="Markdown input area"
          />
        </div>

        {/* Preview Section */}
        <div className="preview-section">
          <div className="section-header">
            <span className="section-title">Live Preview</span>
          </div>
          <div className="preview-content">
            {isLoading && <div className="loading">Rendering preview...</div>}
            <div className={`preview ${isLoading ? 'preview-loading' : ''}`}>
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;