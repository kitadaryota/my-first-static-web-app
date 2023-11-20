import React from 'react';

function App() {
  return (


<html>
<script>

    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://webchat.botframework.com/api/tokens", true);
    xhr.setRequestHeader('Authorization', 'BotConnector ' + '9btLS8G3L9w.poDHGSZtpzG9d1aYEtc5wZvXXAGnLhjRqB-L4sYhcgc');
    xhr.send();
    xhr.onreadystatechange = processRequest;

    var response = JSON.parse(xhr.responseText);
    wondow.location.href("https://webchat.botframework.com/embed/gr5-Inquiry-ls-bot?t="+response)

</script>
</html>
);
}

export default App;
