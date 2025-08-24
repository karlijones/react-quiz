function Options({ options, onOptionSelect }) {
  return (
    <div className="options">
      {options.map((option, index) => (
        <button key={index} onClick={() => onOptionSelect(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}