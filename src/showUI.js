const refresh = async () => {
    const endpoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/i56nonxat3GFCLYuw31T/scores';
  
    const response = await fetch(endpoint);
    const data = await response.json();
  
    const scoreList = document.querySelector('.list-item');
    scoreList.innerHTML = '';
  
    data.result.forEach((score) => {
      const listItem = document.createElement('li');
      listItem.textContent = `Name: ${score.user}, Score: ${score.score}`;
      scoreList.appendChild(listItem);
    });
  };

  export default refresh;