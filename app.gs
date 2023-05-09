function main() {
    const tokenArr = [
        'Cookie1',
        'Cookie2',
    ]

  // 原神
  const autoGs = true;
  // 崩壞：星穹鐵道
  const autoHsr = true;
  // 崩壞3
  const autoHi3 = true;

  const gsUrl =
    "https://sg-hk4e-api.hoyolab.com/event/sol/sign?lang=zh-tw&act_id=e202102251931481";
  const hsrUrl =
    "https://sg-public-api.hoyolab.com/event/luna/os/sign?lang=zh-tw&act_id=e202303301540311";
  const hi3Url =
    "https://sg-public-api.hoyolab.com/event/mani/sign?lang=zh-tw&act_id=e202110291205111";

  if (autoGs) {
    tokenArr.forEach(function (element) {
      let headers = {
        Cookie: element,
      };
      let options = {
        method: "POST",
        headers: headers,
      };
      var response = UrlFetchApp.fetch(gsUrl, options);
      Logger.log(response.getContentText());
    });
  }

  if (autoHsr) {
    tokenArr.forEach(function (element) {
      let headers = {
        Cookie: element,
      };
      let options = {
        method: "POST",
        headers: headers,
      };
      var response = UrlFetchApp.fetch(hsrUrl, options);
      Logger.log(response.getContentText());
    });
  }

  if (autoHi3) {
    tokenArr.forEach(function (element) {
      let headers = {
        Cookie: element,
      };
      let options = {
        method: "POST",
        headers: headers,
      };
      var response = UrlFetchApp.fetch(hi3Url, options);
      Logger.log(response.getContentText());
    });
  }
}
