// Mobile Menu Toggle (no animation)
const mobileMenuToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    mobileMenuToggle.classList.toggle("active")
    document.body.classList.toggle('nav-open')
  })
}

// Close mobile menu when clicking nav links
const navLinks = document.querySelectorAll(".nav-menu a")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    if (mobileMenuToggle) mobileMenuToggle.classList.remove("active")
    document.body.classList.remove('nav-open')
  })
})

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const navEl = document.querySelector('.nav')
      const headerOffset = navEl ? navEl.offsetHeight : 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({ top: offsetPosition })
    }
  })
})

// Form Submission Handler
const quoteForm = document.getElementById("quoteForm")
if (quoteForm) {
  quoteForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(quoteForm)
    const data = Object.fromEntries(formData)

    // Log data (in real app, this would send to server)
    console.log("Quote Request:", data)

    // Show success message
    const submitButton = quoteForm.querySelector('button[type="submit"]')
    const originalText = submitButton.textContent
    submitButton.textContent = "✓ Quote Request Submitted!"
    submitButton.style.backgroundColor = "var(--color-success)"

    // Reset form
    setTimeout(() => {
      quoteForm.reset()
      submitButton.textContent = originalText
      submitButton.style.backgroundColor = ""
    }, 3000)
  })
}

// Removed scroll-triggered JS animations (kept static styles only)

// Header scroll effect (no animation)
let lastScroll = 0
const header = document.querySelector(".nav")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.05)"
  } else {
    header.style.boxShadow = "none"
  }

  lastScroll = currentScroll
})

// Removed numeric animation scripts to keep values static

// Additional updates can be inserted here if needed
