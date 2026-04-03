window.shorten = async function () {
  const url = document.getElementById("urlInput").value;

  const res = await fetch(
    "https://ceoolgnpv7.execute-api.us-east-1.amazonaws.com/shorten",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    },
  );

  const data = await res.json();

  const shortUrl = `https://ceoolgnpv7.execute-api.us-east-1.amazonaws.com/${data.shortUrl}`;
  document.getElementById("result").innerHTML =
    `Short URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
}
