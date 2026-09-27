const host = "bgxpaints.be";
const origin = `https://${host}`;
const key = "3d3e8abaa5e06a8f876a3767059ef92b";
const keyLocation = `${origin}/${key}.txt`;

const keyResponse = await fetch(keyLocation);
const keyBody = (await keyResponse.text()).trim();
if (!keyResponse.ok || keyBody !== key) {
  throw new Error(`IndexNow key file not live at ${keyLocation} (${keyResponse.status})`);
}

const sitemapResponse = await fetch(`${origin}/sitemap.xml`);
if (!sitemapResponse.ok) {
  throw new Error(`Sitemap request failed (${sitemapResponse.status})`);
}
const urlList = [...(await sitemapResponse.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) =>
  match[1].trim(),
);
if (urlList.length === 0) {
  throw new Error("Sitemap has no URLs");
}

const submitResponse = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation, urlList }),
});
const submitBody = await submitResponse.text();
console.log(`IndexNow ${submitResponse.status} for ${urlList.length} URLs`);
if (submitBody) console.log(submitBody);
if (submitResponse.status !== 200 && submitResponse.status !== 202) {
  process.exitCode = 1;
}
