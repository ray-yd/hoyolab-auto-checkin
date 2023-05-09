1. 開啟 [App Script](https://script.google.com/)

2. 點選左側新專案，刪除 App Script 的預設的程式碼

3. 開啟 GitHUB 中的 app.gs 複製全部程式碼，並到 GAS 貼上

4. 修改 Cookie 陣列，支持多帳號簽到，如果只有一個帳號只需要將下方範例中的 Cookie1 替換掉，Cookie2 可以刪除，如果有更多就照著新增
```
    const tokenArr = [
        'Cookie1',
        'Cookie2',
        ...
    ]
```

5. 設定需要簽到的遊戲，將需要簽到的遊戲變數改為 true，如果不需要就保持 false
```
  // 原神
  const autoGs = false;
  // 崩壞：星穹鐵道
  const autoHsr = false;
  // 崩壞3
  const autoHi3 = false;
  ```

6. 測試程式碼是否可以運作，上方選擇 main 函式，點擊執行，如果三個遊戲都自動簽到，下方會出現下列訊息
```
上午11:24:49	通知	開始執行
上午11:24:50	資訊	{"data":null,"message":"旅行者，你已經簽到過了~","retcode":-5003}
上午11:24:51	資訊	{"data":null,"message":"開拓者，你已經簽到過了～","retcode":-5003}
上午11:24:53	資訊	{"data":null,"message":"艦長，你已經簽到過了~","retcode":-5003}
上午11:24:53	通知	執行完畢
```

7. 設定自動執行，網頁最左側點擊「觸發條件」，新增觸發條件
    * 選擇您要執行的功能 > main
    * 選擇應執行的部署作業 > 上端
    * 選取活動來源 > 時間驅動
    * 選取時間型觸發條件類型 > 日計時器
    * 選取時段 > 自行選擇

8. 完成