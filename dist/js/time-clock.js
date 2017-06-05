 //重复的按钮的方法
 function queryRepeat() {
     var popupHTML = '<div class="popup repeatPopup"><div class="list-block media-list">' +
         '<ul><li><a href="#" ><button class="close-popup cancelBtn">取消</button></a><button class="close-popup ensureBtn">确定</button></li><li><label class="label-checkbox item-content"><div class="item-inner"><div class="item-title-row">' +
         '<div class="item-title">星期一</div></div></div><input type="radio" name="my-radio"><div class="item-media"><i class="icon icon-form-checkbox"></i></div></label></li><li><label class="label-checkbox item-content"><div class="item-inner"><div class="item-title-row"><div class="item-title">星期二</div></div></div><input type="radio" name="my-radio"><div class="item-media"><i class="icon icon-form-checkbox"></i></div></label></li>' +
         '<li><label class="label-checkbox item-content"><div class="item-inner"><div class="item-title-row"><div class="item-title">星期三</div></div></div><input type="radio" name="my-radio"><div class="item-media"><i class="icon icon-form-checkbox"></i></div></label></li>' +
         '<li><label class="label-checkbox item-content"><div class="item-inner"><div class="item-title-row"><div class="item-title">星期四</div></div></div><input type="radio" name="my-radio"><div class="item-media"><i class="icon icon-form-checkbox"></i></div></label></li>' +
         '<li><label class="label-checkbox item-content"><div class="item-inner"><div class="item-title-row"><div class="item-title">星期五</div></div></div><input type="radio" name="my-radio"><div class="item-media"><i class="icon icon-form-checkbox"></i></div></label></li>' +
         '<li><label class="label-checkbox item-content"><div class="item-inner"><div class="item-title-row"><div class="item-title">星期六</div></div> </div><input type="radio" name="my-radio"><div class="item-media"><i class="icon icon-form-checkbox"></i></div></label></li>' +
         '<li><label class="label-checkbox item-content"><div class="item-inner"><div class="item-title-row"><div class="item-title">星期日</div></div></div><input type="radio" name="my-radio"><div class="item-media"><i class="icon icon-form-checkbox"></i></div></label></li>' +
         '<li><label class="label-checkbox item-content"><div class="item-inner"><div class="item-title-row"><div class="item-title">星期日</div></div></div><input type="radio" name="my-radio"><div class="item-media"><i class="icon icon-form-checkbox"></i></div></label></li></ul></div>'

     $.popup(popupHTML);
 };
 //重复按钮弹出星期框
 $("#open-time").click(function() {
     queryRepeat()
 });


 //时间编辑器
 /**第一个按钮的时间**/

 $("#picker-time1").click(function() {
     // showOverlay();
     $("#picker-time1").picker({
         cols: [{
             textAlign: 'center',
             values: ['01:', '02:', '03:', '04:', '05:', '06:', '07:', '08:', '09:', '10:', '11:', '12:', '13:', '14:', '15:', '16:', '18:', '19:', '20:', '21:', '22:', '23:', '24:']
                 //如果你希望显示文案和实际值不同，可以在这里加一个displayValues: [.....]
         }, {
             textAlign: 'center',
             values: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60']
         }],
         toolbarTemplate: '<header class="bar bar-nav">\
  <button class="button button-link pull-right close-picker" id="open-time1">确定</button>\
   <button class="button button-link pull-left close-picker">取消</button>\
  </header>',
         // onOpen: function() {
         //     $("#open-time1").click(function() { queryRepeat();});
         // }
     });

     $.init();
 });
 /**第二个按钮的时间**/
 $("#picker-time2").click(function() {
     // showOverlay();
     $("#picker-time2").picker({
         cols: [{
             textAlign: 'center',
             values: ['01:', '02:', '03:', '04:', '05:', '06:', '07:', '08:', '09:', '10:', '11:', '12:', '13:', '14:', '15:', '16:', '18:', '19:', '20:', '21:', '22:', '23:', '24:']
                 //如果你希望显示文案和实际值不同，可以在这里加一个displayValues: [.....]
         }, {
             textAlign: 'center',
             values: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60'],
         }],
         toolbarTemplate: '<header class="bar bar-nav">\
  <button class="button button-link pull-right close-picker" id="open-time2">确定</button>\
  <button class="button button-link pull-left close-picker">取消</button>\
  </header>',
         // onOpen: function() {
         //     $("#open-time2").click(function() { queryRepeat();hideOverlay(); });
         // }
     });
     $.init();
 });

 /**清空任务弹出框以及跳转到清空页面**/

 $("#emptyBtn").click(function() {
     $.confirm('确定清空定时任务？', function() {
        location.href='empty-task.html';
     });
 });




 //  //显示遮罩层方法
 //  function showOverlay(){
 //     $(".page.page-current").css("opacity","0.1");
 //  }
 // //隐藏遮罩层方法
 // function hideOverlay(){
 //     $(".page.page-current").css("opacity","1");
 //  }
