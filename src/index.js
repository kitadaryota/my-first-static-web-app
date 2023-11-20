import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


<html>
<meta http-equiv="refresh" id="chat" content="" />;
<script>

    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://webchat.botframework.com/api/tokens", true);
    xhr.setRequestHeader('Authorization', 'BotConnector ' + '9btLS8G3L9w.poDHGSZtpzG9d1aYEtc5wZvXXAGnLhjRqB-L4sYhcgc');
    xhr.send();
    xhr.onreadystatechange = processRequest;

    var response = JSON.parse(xhr.responseText);
    document.getElementById("chat").content="0;URL=https://webchat.botframework.com/embed/gr5-Inquiry-ls-bot?t="+response

</script>
</html>

