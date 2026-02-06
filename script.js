function toggleCard(element) {
  const card = element.parentElement;
  card.classList.toggle("active");

  element.innerText = card.classList.contains("active")
    ? "Show Less"
    : "Learn More";
}
