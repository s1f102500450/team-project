document.getElementById('memoryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ページの再読み込みを防ぐ

    const userName = document.getElementById('userName').value;
    const userMemory = document.getElementById('userMemory').value;

    const newMemory = {
        name: userName,
        memory: userMemory,
        timestamp: new Date().toLocaleString() // 投稿日時も記録
    };

    // 既存の思い出を読み込む
    let memories = JSON.parse(localStorage.getItem('memories') || '[]');
    memories.unshift(newMemory); // 新しい思い出を先頭に追加

    // 更新された思い出を保存
    localStorage.setItem('memories', JSON.stringify(memories));

    // フォームをクリアして、表示を更新
    this.reset();
    displayMemories();
});

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
            <h3><span class="math-inline">\{memory\.name\}さんの思い出</h3\>
<p>{memory.memory}</p>
<small>${memory.timestamp}</small>
`;
memoriesContainer.appendChild(memoryDiv);
});
}

window.addEventListener('load', displayMemories);