document.addEventListener('DOMContentLoaded', () => {
    async function fetchGitHubStats() {
        const headers = {
            'Authorization': `token ${process.env.GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json'
        };
        
        try {
            const response = await fetch('https://api.github.com/search/repositories?q=ryton+in:name', { headers });
            const data = await response.json();
            console.log('Received data:', data);
            updateStats(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }
    
    // Call it immediately after DOM loads
    fetchGitHubStats();
});

document.addEventListener('DOMContentLoaded', () => {
    const logos = document.querySelectorAll('.main-logo img, .team-logo img');
    logos.forEach(img => {
        console.log('Loading image:', img.src);
        img.onload = () => console.log('Loaded:', img.src);
        img.onerror = () => console.log('Error loading:', img.src);
    });
});

document.querySelectorAll('.code-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.add('highlight');
        setTimeout(() => card.classList.remove('highlight'), 1000);
    });
});

async function fetchDetailedStats() {
    console.log('Script loaded and running!');

    const headers = {
        'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
    };

    // Получаем релизы
    const releases = await fetch('https://api.github.com/repos/CodeLibraty/RytonLang/releases', { headers });
    const releasesData = await releases.json();
    document.getElementById('latest-version').textContent = releasesData[0]?.tag_name || '0.0.0';
    document.getElementById('total-releases').textContent = releasesData.length;
    
    // Получаем коммиты
    const commits = await fetch('https://api.github.com/repos/CodeLibraty/RytonLang/stats/commit_activity', { headers });
    const commitsData = await commits.json();
    const totalCommits = commitsData.reduce((acc, week) => acc + week.total, 0);
    document.getElementById('total-commits').textContent = totalCommits;
    document.getElementById('weekly-commits').textContent = commitsData[commitsData.length - 1].total;

    // Получаем топ разработчиков
    const contributors = await fetch('https://api.github.com/repos/CodeLibraty/RytonLang/contributors', { headers });
    const contributorsData = await contributors.json();
    
    // Обновляем карточки разработчиков
    updateDevCard('top-pr', contributorsData[0]);
    updateDevCard('top-dev', contributorsData[1]);
}

function updateDevCard(cardId, devData) {
    const card = document.getElementById(cardId);
    card.querySelector('.dev-avatar').src = devData.avatar_url;
    card.querySelector('.dev-name').textContent = devData.login;
    card.querySelector('.dev-stats').textContent = `Contributions: ${devData.contributions}`;
}

function updateStats(data) {
    // Принудительно очищаем старые значения
    document.getElementById('projects').innerHTML = '';
    document.getElementById('stars').innerHTML = '';
    document.getElementById('contributors').innerHTML = '';
    
    // Затем записываем новые
    document.getElementById('projects').textContent = data.total_count;
    
    const totalStars = data.items.reduce((acc, repo) => acc + repo.stargazers_count, 0);
    document.getElementById('stars').textContent = totalStars;
    
    const contributors = new Set(data.items.map(repo => repo.owner.login));
    document.getElementById('contributors').textContent = contributors.size;
}


async function fetchGitHubStats() {
    try {
        const response = await fetch('/api/github-stats');
        const data = await response.json();
        console.log('Received data:', data);
        updateStats(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
