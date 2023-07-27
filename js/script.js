function scrollToContent(tabNumber) {
    const content = document.getElementById(`content${tabNumber}`);
    const contentOffset = content.getBoundingClientRect().top;
    const navbarHeight = 100; // Adjust this to your navbar height if applicable
    const scrollOptions = {
      behavior: "smooth",
      block: "start"
    };
    window.scrollBy({
      top: contentOffset - navbarHeight,
      left: 0,
      behavior: "smooth"
    });
  }
  
  
   