async function getAIResponse() {
  const prompt = document.getElementById("prompt").value;
  const responseElement = document.getElementById("response");

  const res = await fetch("http://localhost:3000/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
  });

  const data = await res.json();
  responseElement.innerText = data.text || "Error fetching response";
}