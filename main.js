function scrollToId(x) {
  const targetElement = document.getElementById(x);
  const navbarHeight = 30;
  
  if (targetElement) {
    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  } else {
    console.warn(`Element with ID "${x}" was not found.`);
  }
}

