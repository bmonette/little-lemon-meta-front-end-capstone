function fetchAPI(date) {
    const result = [];
    const random = Math.random();
  
    for (let i = 17; i <= 22; i++) {
      if (random < 0.5 || i % 2 === 0) {
        result.push(`${i}:00`);
      }
    }
  
    return result;
}
  
  function submitAPI(formData) {
    return true;
}

window.fetchAPI = fetchAPI;
window.submitAPI = submitAPI;
