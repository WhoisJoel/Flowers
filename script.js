document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    let isOpen = false;
    
    envelope.addEventListener('click', function() {
        isOpen = !isOpen;
        
        if(isOpen) {
            envelope.classList.add('open');
            createConfetti();
        } else {
            envelope.classList.remove('open');
        }
    });
    
    function createConfetti() {
        const colors = ['#ff4d6d', '#ff8fab', '#ffb3c6', '#ffccd5', '#f8d7da'];
        
        for(let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = -10 + 'px';
            confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = Math.random() * 10 + 5 + 'px';
            confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
            
            document.body.appendChild(confetti);
            
            // Eliminar el confeti después de la animación
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }
});