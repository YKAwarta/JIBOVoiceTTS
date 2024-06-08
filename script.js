async function speakText() {
  const text = document.getElementById('text-input').value;
  
  const apiKey = '72dcc43a4793b85e294f28c75475caef';

  if (!text) {
    alert("Please enter some text.");
    return;
  }

  try {
    const response = await fetch('https://api.elevenlabs.io/tts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        text: text,
        language: 'ar'
      })
    });

    if (!response.ok) {
      alert("Error fetching audio. Please try again.");
      return;
    }
    
    const audioUrl = await response.text();
    
    const audio = new Audio(audioUrl);
    audio.play();
  } catch (error) {
    alert("An error occurred. Please try again.");
    console.error('Error:', error);
  }
}
