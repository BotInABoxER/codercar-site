// Initialize all plyr.io instances

const playerInstances = $('.plyr-embed');
const players = playerInstances.map((i,p) => new Plyr(p, {
  debug: true,
  volume: 0,
  controls: false,
  muted: true,
  fullscreen: { enabled: false },
  loop: { active: true }
})).get();