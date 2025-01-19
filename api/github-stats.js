export default async function handler(req, res) {
  const headers = {
    'Authorization': `token ${process.env.GITHUB_TOKEN}`,
    'Accept': 'application/vnd.github.v3+json'
  };

  const response = await fetch('https://api.github.com/search/repositories?q=ryton+in:name', { headers });
  const data = await response.json();
  
  res.status(200).json(data);
}
