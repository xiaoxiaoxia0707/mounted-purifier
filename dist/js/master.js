$(document).on('click','.button-danger', function () {
      $.confirm('解绑设备', function () {
          $.alert('解绑后无法控制设备');
      });
  });
