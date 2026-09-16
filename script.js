const channels = document.querySelectorAll('.channel-item');
  const panels = document.querySelectorAll('.panel');
  const topName = document.getElementById('topChannelName');
  const topTopic = document.getElementById('topChannelTopic');
  const mobileName = document.getElementById('mobileChannelName');
  const composerPlaceholder = document.getElementById('composerPlaceholder');
 
  const topics = {
    home: "the front page of my personal server",
    about: "who I am, in short",
    vision: "where this is all headed",
    projects: "things I've built",
    connect: "how to find me"
  };
 
  function selectChannel(target) {
    channels.forEach(c => c.setAttribute('aria-current', c.dataset.target === target ? 'true' : 'false'));
    panels.forEach(p => p.classList.toggle('active', p.id === 'panel-' + target));
    topName.textContent = target === 'about' ? 'about-me' : target;
    topTopic.textContent = topics[target] || '';
    mobileName.textContent = target === 'about' ? 'about-me' : target;
    composerPlaceholder.textContent = 'Message #' + (target === 'about' ? 'about-me' : target);
    closeSidebar();
  }
 
  channels.forEach(c => c.addEventListener('click', () => selectChannel(c.dataset.target)));
 
  document.querySelectorAll('[data-jump]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      selectChannel(link.dataset.jump);
    });
  });
 
  // mobile sidebar toggle
  const sidebar = document.getElementById('channelSidebar');
  const overlay = document.getElementById('overlay');
  document.getElementById('openSidebar').addEventListener('click', () => {
    sidebar.classList.add('open');
    overlay.classList.add('open');
  });
  overlay.addEventListener('click', closeSidebar);
  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  }