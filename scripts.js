document.addEventListener('DOMContentLoaded', function() {
  const burgerIcon = document.getElementById('burgerIcon');
  burgerIcon.addEventListener('click', function() {
    toggleMobileMenu();
  });

  const closeButton = document.querySelector('.close-button');
  closeButton.addEventListener('click', function() {
    toggleMobileMenu();
  });

  const isLoggedIn = /* Your logic to check if the user is logged in */ false;
  updateProfileLinksVisibility(isLoggedIn);

  document.querySelectorAll('.like-button').forEach(function(button) {
    button.addEventListener('click', function() {
      likePost(this);
    });
  });
});

function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'block';
  }
}

function updateProfileLinksVisibility(isLoggedIn) {
  const profileLinks = document.querySelectorAll('.profile-link');

  profileLinks.forEach(function(link) {
    if (isLoggedIn) {
      link.style.display = 'block';
    } else {
      link.style.display = 'none';
    }
  });
}

function likePost(button) {
  const likeCount = button.nextElementSibling;
  let currentLikes = parseInt(likeCount.innerText);

  // Simulate liking/unliking by toggling the like count
  currentLikes = currentLikes === 3 ? 2 : 3;

  likeCount.innerText = currentLikes;
}
