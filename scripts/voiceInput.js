var started = false;

var startRecordReason = document.getElementById('recordReason');
var startRecordAction = document.getElementById('recordAction');
var startRecordResolution = document.getElementById('recordResolution');

var finalOutput = null;
var interimOutput = null;

var lastRecordID = "3256";

function startVoiceInput(root, fout, iout, button)
{
    button.textContent = "Stop Voice Input";

    started = true;
  
    finalOutput = document.getElementById(fout);
    

    if(finalOutput == null)
    {
        var x = document.getElementById(root);
        x.replaceChildren();
        finalOutput = document.createElement("span");
        finalOutput.id = fout;
        x.appendChild(finalOutput);
    }
    interimOutput = document.getElementById(iout);

    if(interimOutput == null)
    {
        var x = document.getElementById(root);
        interimOutput = document.createElement("span");
        interimOutput.id = iout;
        x.appendChild(interimOutput);
    }
    var el = finalOutput.parentElement;
    var children = el.getElementsByTagName('div');

    for(var i = 0; i< children.length;i++)
    {
        if (children[i].getAttribute('id') == el.getAttribute('id')) 
        {
            finalOutput.textContent = children[i].textContent.slice();
            finalOutput.textContent += " ";
            finalTranscript = finalOutput.textContent;
            children[i].remove();
        }
    }

    recognition.start();
}

startRecordReason.addEventListener('click', () => {
    
    if(started == false)
    {
        var root = startRecordReason.getAttribute('data-root')
        var final = startRecordReason.getAttribute('data-finalSpan');
        var int = startRecordReason.getAttribute('data-interimSpan');

        startVoiceInput(root, final, int, startRecordReason);
    }
    else
    {
        startRecordReason.textContent = 'Start Voice Input';
        recognition.stop();
    }
});    

startRecordAction.addEventListener('click', () => {
    
    if(started == false)
    {
        var root = startRecordAction.getAttribute('data-root')
        var final = startRecordAction.getAttribute('data-finalSpan');
        var int = startRecordAction.getAttribute('data-interimSpan');

        startVoiceInput(root, final, int, startRecordAction);
    }
    else
    {
        startRecordAction.textContent = 'Start Voice Input';
        recognition.stop();
    }
}); 


startRecordResolution.addEventListener('click', () => {
    
    if(started == false)
    {
        var root = startRecordResolution.getAttribute('data-root')
        var final = startRecordResolution.getAttribute('data-finalSpan');
        var int = startRecordResolution.getAttribute('data-interimSpan');

        startVoiceInput(root, final, int, startRecordResolution);
    }
    else
    {
        startRecordResolution.textContent = 'Start Voice Input';
        recognition.stop();
    }
}); 




var finalTranscript = "";
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = 'en-US';
recognition.continuous = true;
recognition.interimResults = true;
recognition.gra
recognition.onresult = (event) => {




    var interim_transcript = ' ';

    for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript + " ";
        } else {
            interim_transcript += event.results[i][0].transcript;
        }
    }


    

    finalOutput.textContent = finalTranscript;
    interimOutput.textContent = interim_transcript;
};
  


recognition.onend = () => {
    if(finalOutput.textContent.length > 0)
    {
        var element = finalOutput.parentElement;
        var n = element.cloneNode(false);
        n.textContent = finalOutput.textContent.slice();
        n.textContent += " ";
        element.prepend(n);
    }
    finalOutput.textContent = "";
    finalTranscript = "";
    started = false;
};


