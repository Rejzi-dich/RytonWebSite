import { useState, useEffect } from 'react';
import './carousel.css';

const codeExamples = [
  {
    ryton: `pack User {
    init {
        def name = "John"
        def age = 25
    }

    func greet {
        print(f"Hello, {name}!")
    }
}`,
    java: `public class User {
    private String name;
    private int age;

    public User() {
        this.name = "John";
        this.age = 25;
    }

    public void greet() {
        System.out.println("Hello, " + name + "!");
    }
}`
  },
  {
    ryton: `event onDataChange {
    updateUI()
    saveToDatabase()
}`,
    javascript: `class EventEmitter {
    constructor() {
        this.listeners = {};
    }
    
    on(event, callback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(callback);
    }

    emit(event) {
        if (this.listeners[event]) {
            this.listeners[event].forEach(callback => callback());
        }
    }
}

const emitter = new EventEmitter();
emitter.on('dataChange', () => {
    updateUI();
    saveToDatabase();
});`
  },
  {
    ryton: `func processData(items: Array) {
    for item in items {
        if item > 10 {
            output item
        }
    }
}`,
    csharp: `public IEnumerable<int> ProcessData(IEnumerable<int> items)
{
    foreach (var item in items)
    {
        if (item > 10)
        {
            yield return item;
        }
    }
}`
  }
];

const CodeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % codeExamples.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="code-comparison">
      <div className="code-panels">
        <div className="code-panel ryton">
          <div className="panel-header">Ryton</div>
          <pre className="code-block">
            <code>{codeExamples[currentIndex].ryton}</code>
          </pre>
        </div>
        
        <div className="code-panel other">
          <div className="panel-header">Traditional</div>
          <pre className="code-block">
            <code>{codeExamples[currentIndex].java || codeExamples[currentIndex].javascript || codeExamples[currentIndex].csharp}</code>
          </pre>
        </div>
      </div>

      <div className="carousel-dots">
        {codeExamples.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default CodeCarousel;
