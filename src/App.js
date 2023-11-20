import React from 'react';

function App() {
  return (


<html>
<body>
  <iframe id="chat" width="70%" title="chatbot" src=""></iframe>
</body>
<script>


    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://webchat.botframework.com/api/tokens", true);
    xhr.setRequestHeader("Authorization", "BotConnector " + "9btLS8G3L9w.poDHGSZtpzG9d1aYEtc5wZvXXAGnLhjRqB-L4sYhcgc");
    xhr.send();
    xhr.onreadystatechange = processRequest;

    var response = undefined;
    function processRequest(e){
        response = JSON.parse(xhr.responseText);
        document.getElementById("chat").src="https://webchat.botframework.com/embed/gr5-Inquiry-ls-bot?t="+response;
    }

</script>
</html>
);
}

export default App;
