module.exports = async (req, res) => {
    const token = process.env.GITHUB_TOKEN;
    const response = await fetch('https://api.github.com/search/repositories?q=ryton+in:name', {
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    const data = await response.json();
    res.json(data);
  }
  