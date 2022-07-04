window.setTheme = (t = '') => {
  if (t === 'dark' || t === 'light') {
    localStorage.theme = t
  }

  if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

window.setTheme()