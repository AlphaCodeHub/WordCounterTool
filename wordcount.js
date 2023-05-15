const text = document.getElementById('text');
const result = document.getElementById('result');
const counts = document.getElementById('counts');

text.addEventListener('input', () => {
  const textValue = text.value;
  const wordCount = textValue.split(/\s+/).filter(word => word !== '').length;
  const charCount = textValue.length;
  
  result.textContent = `You have entered ${wordCount} words and ${charCount} characters.`;
  counts.textContent = `Word count: ${wordCount} | Character count: ${charCount}`;
});
