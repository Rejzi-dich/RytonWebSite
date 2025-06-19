import './info.css';

const descriptionEN = `Ryton is a modern general-purpose programming language designed to create reliable and efficient software. The language combines ease of use with powerful features.`
const descriptionRU = `Ryton - это современный язык программирования общего назначения, предназначенный для создания надежного и эффективного программного обеспечения. Язык объединяет простоту использования с мощными возможностями.`;

const preferredLocales = navigator.languages; 
const description = preferredLocales.includes('ru') ? descriptionRU : descriptionEN;

const LanguageInfo = () => {
  return (
    <div className="language-info">
      <div className="language-icon">
        <img src={require('../../assets/logos/logo-ryton.png')} alt="Ryton" />
      </div>
      <div className="language-description">
        <h2>RytonLang</h2>
        {description.split('\n').map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default LanguageInfo;
