export default {
  app: {
    scan() {
      document.getElementById('ding').style.display = 'block'
      document.getElementById('ding_selected').style.display = 'none'
      let _this = this
      return new Promise(function(resolve) {
        let load = {
          initialize: function() {
            document.addEventListener(
              'deviceready',
              this.onDeviceReady.bind(this),
              false
            )
          },
          onDeviceReady: function() {
            window.QRScanner.prepare(onDone) // show the prompt
            function onDone(err, status) {
              if (err) {
                // here we can handle errors and clean up any loose ends.
                console.error(err)
                //alert(JSON.stringify(err));
              }
              if (status.authorized) {
                var callback = function(err, contents) {
                  //alert(JSON.stringify(contents));
                  if (err) {
                    console.error(err._message) //alert(JSON.stringify(err))
                  }
                  window.QRScanner.destroy(function(status) {
                    console.log(status) //alert(JSON.stringify(status))
                  })
                  document.getElementById('app').style.display = 'block'
                  document.getElementById('scan').style.display = 'none'
                  window.QRScanner.disableLight(function(err, status) {
                    err && console.error(err)
                    console.log(status)
                    //alert(JSON.stringify(err))
                  })
                  window.QRScanner.hide(function(status) {
                    console.log(status)
                    //alert(JSON.stringify(status))
                  })
                  resolve(_this.isJSON(contents))
                }

                window.QRScanner.scan(callback)
                window.QRScanner.show(function(status) {
                  console.log(status, 'status')
                  document.getElementById('ding').onclick = function() {
                    window.QRScanner.enableLight(function(err, status) {
                      err && console.error(err) && console.log(status)
                      document.getElementById('ding_selected').style.display =
                        'block'
                      document.getElementById('ding').style.display = 'none'
                    })
                  }
                  document.getElementById('scan_cancel').onclick = function() {
                    window.QRScanner.disableLight(function(err, status) {
                      err && console.error(err)
                      console.log(status)
                    })
                    window.QRScanner.hide(function(status) {
                      console.log('hide')
                      console.log(status)
                    })
                    window.QRScanner.destroy(function(status) {
                      console.log(status)
                    })
                    document.getElementById('app').style.display = 'block'
                    document.getElementById('scan').style.display = 'none'
                  }
                  document.getElementById(
                    'ding_selected'
                  ).onclick = function() {
                    window.QRScanner.disableLight(function(err, status) {
                      err && console.error(err)
                      console.log(status)
                    })
                    document.getElementById('ding').style.display = 'block'
                    document.getElementById('ding_selected').style.display =
                      'none'
                  }
                  document.getElementById('app').style.display = 'none'
                  document.getElementById('scan').style.display = 'block'
                })
              } else if (status.denied) {
                window.QRScanner.openSettings()
              } else {
                // we didn't get permission, but we didn't get permanently denied. (On
                // Android, a denial isn't permanent unless the user checks the "Don't
                // ask again" box.) We can ask again at the next relevant opportunity.
              }
            }
          }
        }
        load.initialize()
      })
    },
    isJSON(str) {
      if (typeof str == 'string') {
        try {
          return JSON.parse(str)
        } catch (e) {
          return str
        }
      }
    }
  }
}
