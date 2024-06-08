document.getElementById("speakBtn").addEventListener("click", async function() {
    const text = document.getElementById("textInput").value;
    const apiKey = "72dcc43a4793b85e294f28c75475caef";
    const voiceId = "mRdG9GYEjJmIzqbYTidv";
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
                stability: 0.8,
                similarity_boost: 0.9
            }
        })
    });

    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);
    audio.play();
});
