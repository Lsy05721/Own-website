const hoverModal = document.getElementById('hoverModal');
const hoverCar = document.getElementById('hoverCar');
const hoverTeamName = document.getElementById('hoverTeamName');
const hoverColorBox = document.getElementById('hoverColorBox');

document.querySelectorAll('.team-logo').forEach(logo => {
  logo.addEventListener('mouseenter', () => {
    hoverTeamName.textContent = logo.dataset.team;   
    hoverCar.src = logo.dataset.car;                 
    hoverColorBox.style.backgroundColor = logo.dataset.color; 
    hoverModal.style.display = 'block';              
  });

  logo.addEventListener('mousemove', (e) => {
    hoverModal.style.left = e.pageX + 20 + 'px';
    hoverModal.style.top = e.pageY + 20 + 'px';
  });

  logo.addEventListener('mouseleave', () => {
    hoverModal.style.display = 'none';              
  });
});
