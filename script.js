document.getElementById("speakBtn").addEventListener("click", async function() {
    const text = document.getElementById("textInput").value;
    const apiKey = "your_api_key_here";
    const voiceId = "A9ATTqUUQ6GHu0coCz8t";
    const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "xi-api-key": apiKey
        },
        body: JSON.stringify({
            text: text,
            voice_settings: {
                stability: 1,
                similarity_boost: 0.4
            }
        })
    });

    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);
    audio.play();
});
