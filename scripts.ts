async () => {
    const script = document.createElement('script');
    script.src = 'https://example.com/some-script.js';
    script.async = true;
    document.head.appendChild(script);
    
    script.onload = () => {
        console.log('Script loaded successfully');
    };
    
    script.onerror = () => {
        console.error('Error loading script');
    };
}