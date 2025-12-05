
// Intersection Observer for reveal-on-scroll (continuous, smooth)
document.addEventListener('DOMContentLoaded', function(){
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  }, {threshold: 0.12});

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

// Simple contact form (no backend) - mimics sending + shows success with animation
function handleForm(e){
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Sending...';
  setTimeout(()=>{
    btn.textContent = 'Message sent ✓';
    btn.disabled = false;
    e.target.reset();
  }, 900);
  return false;
}
