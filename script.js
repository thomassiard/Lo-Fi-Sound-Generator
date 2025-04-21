document.getElementById('playBtn').addEventListener('click', () => {
    const audio = document.getElementById('lofiAudio');
    
    const tracks = [
      'altitude-chill-lofi-248756.mp3',
      'fiverrbeats-chillout-147415.mp3',
      'morning-coffee-237485.mp3'
    ];
    
    const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
    
    audio.src = randomTrack;
    
    audio.load();
    audio.currentTime = 0; 
    audio.play();
  });