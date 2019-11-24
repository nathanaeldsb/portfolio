// JAVASCRIPT AUDIO START

var audiowater = $("#waveaudio")[0];
$("#wavesound").mouseenter(function() {
  audiowater.play();
});

var audiowatersplash = $("#watersplashaudio")[0];
$("#watersplash").mouseenter(function() {
  audiowatersplash.play();
});

var audiobranches = $("#leavesaudio")[0];
$("#branchesleaves").mouseenter(function() {
  audiobranches.play();
});

var hooting = $("#hootingaudio")[0];
$("#owlhoot").mouseenter(function() {
  hooting.play();
});

var audiowaterfall = $("#waterfallaudio")[0];
$("#waterfall").click(function() {
  audiowaterfall.play();
});

var audiofootsteps = $("#footstepsaudio")[0];
$("#footsteps").mouseenter(function() {
  audiofootsteps.play();
});

var shimmering = $("#shimmeraudio")[0];
$("#mushroomid, #mistletoe, #greengems").mouseenter(function() {
  shimmering.play();
});

var openscroll = $("#openscrollaudio")[0];
$("#openscroll").click(function() {
  openscroll.play();
});

var closescroll = $("#closeScrollaudio")[0];
$("#closescroll").click(function() {
  closescroll.play();
});

// JAVASCRIPT AUDIO END
