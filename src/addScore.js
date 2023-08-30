
const addScore = async (name, score) => {
    const endpoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/i56nonxat3GFCLYuw31T/scores';
    const requestBody = JSON.stringify({ user: name, score });
  
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: requestBody,
      });
  
      const data = await response.json();
      return data.result;
    } catch (error) {
      return error;
    }
  };


  export default addScore;


  //i56nonxat3GFCLYuw31T