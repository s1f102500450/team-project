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
            <h3>${memory.name}さんの思い出</h3>
            <p>${memory.memory}</p>
            <small>${memory.timestamp}</small>
        `;
        memoriesContainer.appendChild(memoryDiv);
    });
}

// 他のコード（addEventListener など）はそのまま
document.getElementById('memoryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userName = document.getElementById('userName').value;
    const userMemory = document.getElementById('userMemory').value;

    const newMemory = {
        name: userName,
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