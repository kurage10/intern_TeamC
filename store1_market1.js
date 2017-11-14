(function() {
  // ここから
  /*
  function something() {

  }
  */
  // ここまでの領域は好きに編集できます。
  /*

  */
  function check_penalty(obentoPrice, purchaseNum, storeInfo){
    if(purchaseNum < 10){
      return false;
    }
    else if(obentPrice * purchaseNum <= storeInfo.capitalStock){
      return false;
    }else {
      return true;
    }
  }

  var myStore = ObentoMarket.Store.entry('1113 期待値偏重 Ver 1.0',
    function(day) {

      // something();
      var storeInfo = ObentoMarket.Store.getById(myStore.id);
      var histories = ObentoMarket.getHistory();
      var yesterday = histories[day-2];
      var obentoId = "ONIGIRI";
      var purchaseNum = 10;
      var basicprice = {"MATSU": 4000,"TAKE": 2500, "UME": 1600, "ONIGIRI": 444};
      if (yesterday === undefined) {
        obentoId = 'ONIGIRI';
      }else if (yesterday.weather == 0){
        obentoId = 'MATSU';
      //  purchaseNum = 200;
      }
      else if (yesterday.weather == 1){
        obentoId = 'UME';
      //  purchaseNum = 200;
      }
      else if (yesterday.weather == 2){
        obentoId = 'TAKE';
      //  purchaseNum = 200;
      }
      else if (yesterday.weather == 3){
        obentoId = 'TAKE';
      //  purchaseNum = 200;
      }else{
        obentoId = 'ONIGIRI';
      //  purchaseNum = 200;
      }
      purchaseNum = Math.floor(storeInfo.capitalStock/basicprice[obentoId]);
      //purchaseNum = 10;
      return {
        obentoId : obentoId,
        purchaseNum : purchaseNum
      }

    }
  );

})();
