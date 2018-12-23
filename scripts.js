$('.container-number').bind('input', function(e) {
  var v = e.target.value;
  if (isNaN(v)) {
    if (v.length > 1) {
      e.target.value = v[0];
    }
  } else {
    if (v > 9) e.target.value = 9;
    if (v < 0) e.target.value = 0;
  }
});

function checkValues() {
  var val0 = $('#input-0').val();
  var val1 = $('#input-1').val();
  var val2 = $('#input-2').val();
  var val3 = $('#input-3').val();
  var val4 = $('#input-4').val();
  var val5 = $('#input-5').val();
  var val6 = $('#input-6').val();
  var val7 = $('#input-7').val();
  var val8 = $('#input-8').val();
  var val9 = $('#input-9').val();
  var val10 = $('#input-10').val();
  var val11 = $('#input-11').val();
  var val12 = $('#input-12').val();
  var val13 = $('#input-13').val();
  var word = val0 + val1 + val2 + val3 + val4 + val5 + val6 + val7 + val8 +
      val9 + val10 + val11 + val12 + val13;
  if (word === 'HjyVQiWWCFX2Mj') {
    $('#container-puzzle').hide();
    $('#container-puzzle-2').show();
    setTimeout(function() {
      $('#input-x0').focus();
    }, 100);
  }
}

function checkValues2() {
  var val0 = $('#input-x0').val();
  var val1 = $('#input-x1').val();
  var val2 = $('#input-x2').val();
  var val3 = $('#input-x3').val();
  var val4 = $('#input-x4').val();
  var val5 = $('#input-x5').val();
  var val6 = $('#input-x6').val();
  var val7 = $('#input-x7').val();
  var val8 = $('#input-x8').val();
  var val9 = $('#input-x9').val();
  var val10 = $('#input-x10').val();
  var val11 = $('#input-x11').val();
  var val12 = $('#input-x12').val();
  var val13 = $('#input-x13').val();
  var val14 = $('#input-x14').val();
  var val15 = $('#input-x15').val();
  var val16 = $('#input-x16').val();
  var word = val0 + val1 + val2 + val3 + val4 + val5 + val6 + val7 + val8 +
      val9 + val10 + val11 + val12 + val13 + val14 + val15 + val16;
  if (word === '10010101000010101') {
    $('#container-puzzle-2').hide();
    var video = $('#container-video');
    video.show();
    setTimeout(function() {
      video.get(0).play();
    }, 100);
  }
}

$('#input-0').bind('input', function() {
  $('#input-1').focus();
  checkValues();
});
$('#input-1').bind('input', function() {
  $('#input-2').focus();
  checkValues();
});
$('#input-2').bind('input', function() {
  $('#input-3').focus();
  checkValues();
});
$('#input-3').bind('input', function() {
  $('#input-4').focus();
  checkValues();
});
$('#input-4').bind('input', function() {
  $('#input-5').focus();
  checkValues();
});
$('#input-5').bind('input', function() {
  $('#input-6').focus();
  checkValues();
});
$('#input-6').bind('input', function() {
  $('#input-7').focus();
  checkValues();
});
$('#input-7').bind('input', function() {
  $('#input-8').focus();
  checkValues();
});
$('#input-8').bind('input', function() {
  $('#input-9').focus();
  checkValues();
});
$('#input-9').bind('input', function() {
  $('#input-10').focus();
  checkValues();
});
$('#input-10').bind('input', function() {
  $('#input-11').focus();
  checkValues();
});
$('#input-11').bind('input', function() {
  $('#input-12').focus();
  checkValues();
});
$('#input-12').bind('input', function() {
  $('#input-13').focus();
  checkValues();
});
$('#input-13').bind('input', function() {
  checkValues();
});

$('#input-x0').bind('input', function() {
  $('#input-x1').focus();
  checkValues2();
});
$('#input-x1').bind('input', function() {
  $('#input-x2').focus();
  checkValues2();
});
$('#input-x2').bind('input', function() {
  $('#input-x3').focus();
  checkValues2();
});
$('#input-x3').bind('input', function() {
  $('#input-x4').focus();
  checkValues2();
});
$('#input-x4').bind('input', function() {
  $('#input-x5').focus();
  checkValues2();
});
$('#input-x5').bind('input', function() {
  $('#input-x6').focus();
  checkValues2();
});
$('#input-x6').bind('input', function() {
  $('#input-x7').focus();
  checkValues2();
});
$('#input-x7').bind('input', function() {
  $('#input-x8').focus();
  checkValues2();
});
$('#input-x8').bind('input', function() {
  $('#input-x9').focus();
  checkValues2();
});
$('#input-x9').bind('input', function() {
  $('#input-x10').focus();
  checkValues2();
});
$('#input-x10').bind('input', function() {
  $('#input-x11').focus();
  checkValues2();
});
$('#input-x11').bind('input', function() {
  $('#input-x12').focus();
  checkValues2();
});
$('#input-x12').bind('input', function() {
  $('#input-x13').focus();
  checkValues2();
});
$('#input-x13').bind('input', function() {
  $('#input-x14').focus();
  checkValues2();
});
$('#input-x14').bind('input', function() {
  $('#input-x15').focus();
  checkValues2();
});
$('#input-x15').bind('input', function() {
  $('#input-x16').focus();
  checkValues2();
});
$('#input-x16').bind('input', function() {
  checkValues2();
});