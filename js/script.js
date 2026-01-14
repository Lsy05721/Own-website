document.addEventListener('DOMContentLoaded', () => {
  const hoverModal = document.getElementById('hoverModal');
  const hoverCar = document.getElementById('hoverCar');
  const hoverTeamName = document.getElementById('hoverTeamName');
  const hoverColorBox = document.getElementById('hoverColorBox');

  document.querySelectorAll('.team-logo').forEach(logo => {
    // 鼠标进入显示弹窗
    logo.addEventListener('mouseenter', () => {
      hoverTeamName.textContent = logo.dataset.team;             
      hoverCar.src = logo.dataset.car;                           
      hoverColorBox.style.backgroundColor = logo.dataset.color; 
      hoverModal.style.display = 'block';                        
    });

    // 鼠标移动更新弹窗位置
    logo.addEventListener('mousemove', (e) => {
      const modalWidth = hoverModal.offsetWidth;   // 弹窗宽度
      const modalHeight = hoverModal.offsetHeight; // 弹窗高度
      const pageWidth = window.innerWidth;         // 页面可视宽度
      const pageHeight = window.innerHeight;       // 页面可视高度
      let left = e.pageX + 20;                     // 默认向右偏移
      let top = e.pageY + 20;                      // 默认向下偏移

      // 如果弹窗超出右边界，则向左显示
      if (left + modalWidth > pageWidth) {
        left = e.pageX - modalWidth - 20;
      }
      // 如果弹窗超出下边界，则向上显示
      if (top + modalHeight > pageHeight) {
        top = e.pageY - modalHeight - 20;
      }

      hoverModal.style.left = left + 'px';
      hoverModal.style.top = top + 'px';
    });

    // 鼠标移开隐藏弹窗
    logo.addEventListener('mouseleave', () => {
      hoverModal.style.display = 'none';                         
    });
  });

  // 页面滚动背景视差效果
  window.addEventListener("scroll", () => {
    document.body.style.backgroundPositionY = window.scrollY * 0.4 + "px";
  });
});

