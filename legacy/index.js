function sendmsg(){
    var settings = {
        "url": "https://api.kakaowork.com/v1/messages.send_by_email?email=jun@junlab.xyz&text=안녕하세요!",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json",
          "Authorization": "Bearer 7e269602.d8c9331e64eb46dea67a87d958771791"
        },
        "data": JSON.stringify({
          "text": "블록킷 메시지입니다.",
          "blocks": [
            {
              "type": "header",
              "text": "테스트 블록입니다",
              "style": "white"
            },
            {
              "type": "text",
              "text": "text sample",
              "inlines": [
                {
                  "type": "styled",
                  "text": "이곳에 텍스트를 입력합니다.\n필요에 따라 이런식으로 줄바꿈 처리를 할 수도 있습니다."
                }
              ]
            },
            {
              "type": "button",
              "text": "복사하기",
              "style": "default",
              "action": {
                "type": "open_system_browser",
                "name": "button1",
                "value": "https://page.junlab.xyz"
              }
            }
          ]
        }),
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}