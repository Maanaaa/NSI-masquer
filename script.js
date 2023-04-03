function cliqueSurImage() {
  if (document.getElementById('DivImage').style.display === 'block') {
    document.getElementById('DivImage').style.display = 'none';
    document.getElementById('BoutonImage').value = 'Afficher Image';
  } 
  else 
  {
    document.getElementById('DivImage').style.display = 'block';
    document.getElementById('BoutonImage').value = 'Masquer Image';
  }
}