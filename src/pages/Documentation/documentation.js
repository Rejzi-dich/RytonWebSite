import { useState, useEffect } from 'react';
import './documentation.css';
import ReactMarkdown from 'react-markdown';

const Documentation = () => {
  const [currentSection, setCurrentSection] = useState('Welcome');
  const [content, setContent] = useState('');

  useEffect(() => {
    const loadContent = async () => {
      const response = await fetch(`/docs/ru/FullRytonDocumentation/Base/${currentSection}.md`);
      const text = await response.text();
      setContent(text);
    };
    loadContent();
  }, [currentSection]);

  return (
    <main className="documentation">
      <nav className="doc-nav">
        <button 
          className={currentSection === 'Welcome' ? 'active' : ''} 
          onClick={() => setCurrentSection('Welcome')}
        >
          Введение
        </button>
        <button 
          className={currentSection === 'DataTypes' ? 'active' : ''} 
          onClick={() => setCurrentSection('DataTypes')}
        >
          Типы данных
        </button>
        <button 
          className={currentSection === 'Vars' ? 'active' : ''} 
          onClick={() => setCurrentSection('Vars')}
        >
          Переменные
        </button>
        <button 
          className={currentSection === 'Functions' ? 'active' : ''} 
          onClick={() => setCurrentSection('Functions')}
        >
          Функции
        </button>
        <button 
          className={currentSection === 'Packs' ? 'active' : ''} 
          onClick={() => setCurrentSection('Packs')}
        >
          Пакеты
        </button>
      </nav>

      <div className="doc-content">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </main>
  );
};

export default Documentation;
