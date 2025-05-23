document.getElementById('settingsForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Settings saved! (Demo only)');
});

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
  // Load dark mode state from localStorage
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    darkModeToggle.checked = true;
  }
  darkModeToggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', darkModeToggle.checked);
    localStorage.setItem('darkMode', darkModeToggle.checked);
  });
}

// Email updates toggle
const emailUpdatesToggle = document.getElementById('emailUpdatesToggle');
if (emailUpdatesToggle) {
  emailUpdatesToggle.addEventListener('change', function() {
    if (emailUpdatesToggle.checked) {
      alert('You will now receive email updates!');
    } else {
      alert('You have unsubscribed from email updates.');
    }
  });
}

// Apply dark mode on page load if enabled in localStorage
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
}