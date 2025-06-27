function displayMemories() {
    const memoriesContainer = document.getElementById('memoriesContainer');
    memoriesContainer.innerHTML = ''; // 既存の内容をクリア

    let memories = JSON.parse(localStorage.getItem('memories') || '[]');

    if (memories.length === 0) {
        memoriesContainer.innerHTML = '<p>まだ思い出が投稿されていません。</p>';
        return;
    }

    memories.forEach(memory => {
        const memoryDiv = document.createElement('div');
        memoryDiv.classList.add('memory-item'); // CSSでスタイルを適用するため

        memoryDiv.innerHTML = `
            <h2>${memory.title}<h2>
            <h3>${memory.name}さんの思い出</h3>
            <p>${memory.memory}</p>
            <small>${memory.timestamp}</small>
        `;
        memoriesContainer.appendChild(memoryDiv);
    });
}

document.getElementById('memoryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userName = document.getElementById('userName').value;
    const userMemory = document.getElementById('userMemory').value;
    const title = document.getElementById('title').value;

    const newMemory = {
        name: userName,
        title: title,
        memory: userMemory,
        timestamp: new Date().toLocaleString()
    };

    let memories = JSON.parse(localStorage.getItem('memories') || '[]');
    memories.unshift(newMemory);

    localStorage.setItem('memories', JSON.stringify(memories));

    this.reset();
    displayMemories();
});

window.addEventListener('load', displayMemories);