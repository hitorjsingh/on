function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

function goBack() {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.querySelector('.home.page').classList.add('active');
}
