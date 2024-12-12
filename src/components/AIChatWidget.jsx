import { useEffect } from 'react';

const AIChatWidget = () => {
  useEffect(() => {
    // Initialize PICKAXE object
    window.PICKAXE = window.PICKAXE || {
      pickaxes: [],
      style: "kHsjoCQGgI0GWASmgIdIA2CHA0wGQyCwBQBUiEBzQQC+EgGQwgMA3gLICDMAoAnQgvFSCsUIPQYgIHqAEw4NXUgIz6DFQ4OkwghP2AGnoMFJgKAFA8gEA4QAI9gVPBABGqBU3gAggTMBAUQ6ApYkAAgIFMxwLcKgRvlAhyyAIG8DFAoAF1QOTugMODACreB2osAqaIBABQAAGgaINAr0OASwUCiIQGBARk6AUOiAo9GAq6qAZUKAAkOAhKAAoIBDz4AAB4CkT4AR8YCSIYBygIASwoDgAoCTBoCTQIDT04B01oBj1IBDAYD1o4AWNYCmoIC29oBCM4CXl4CBgIDEU4DDN4Cyc4CnsoDReIATdoCiWYCXaoAZlIAVBYAYGoAaYoAntoD68YA3OIAb1ICIBIDZpIDEQIDBQIC3NIAgDIAIToBLxIAkBYDAAoCAFoAPLoC+L4D4GICOR4ACwIAKPIC0TICBUoBBwoAAGUAClKAQDJAIABgEi6QAYBQAoQC6JoAAykAAVGAL0BADEPgF5EQDokYBRYUAwpCACcRAFglgFxiQDPEYBIY8ATSOAAc9AONggAE2wAnioAQGcAxEqAOaFAEaCgBxHQB6RYA8kEAEPIATUAQJWADAZAAOIgDRZwCLxYA2pEABHaASmTANOAgFFPGSAGXTAIuhgEJEwDoBYAl7MACKaAURdAAYygBgmuSAELpAAAZgF8RwDnfYAy00At6CAQUFAC4JgHoSQDr9YAiYMATRqACn9AO3YgHXZQBiMIAy3sAGEiAQKhABk3AEzAADNgAA4QCBEIAyy0AcxmAPUpACi5gBcrwAYCIAE2UADzSAPBLAE2egAy9wApv4AtJMAGL2AHC5ADNZgByKwCEZIBwbEABIGAVarAJIqgE92wDEkIADwsAgkCAdIRACwGgFhMQB0YYAMxUAoX+ALIDAHYygEuBQDnM4BAQsAW86ABUFAABqgFTWQCzSIBB+0ARz+AT3PACVTgHNEwC3kIAWCkAABVAGe4wA/VMAZsfACHzQBfFEAUgRACN5QA1TEAZMZAAuTQAjN0AAAigA"
    };
    window.PICKAXE.pickaxes.push({
      id: "AI_Assistant_T2OCW",
      type: "fab"
    });

    // Load the Pickaxe script
    const { id: _fid } = window.PICKAXE.pickaxes[0];
    const loadScript = async () => {
      try {
        const response = await fetch(`https://embed.pickaxeproject.com/axe/api/script/${_fid}`);
        const data = await response.json();
        const t = `https://cdn.jsdelivr.net/gh/pickaxeproject/cdn@${data.v}/dist`;
        
        if (!document.querySelector(`script[src="${t}/bundle.js"]`)) {
          const script = document.createElement("script");
          script.src = t + "/bundle.js";
          script.defer = true;
          document.head.appendChild(script);
        }
      } catch (error) {
        console.error('Error loading Pickaxe script:', error);
      }
    };

    loadScript();

    // Cleanup function
    return () => {
      const scripts = document.querySelectorAll('script[src*="pickaxeproject"]');
      scripts.forEach(script => script.remove());
    };
  }, []); // Empty dependency array means this runs once on mount

  return null;
};

export default AIChatWidget; 