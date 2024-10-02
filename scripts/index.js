
<script>
var select = document.getElementById("selectNumber"); 
var options = [
	["Select a state", "", ""],
  ["Alabama", "Wellcare By Allwell", "https://wellcarecomplete.com/"],
  
  ["Arizona", "Wellcare By Allwell", "https://wellcare.azcompletehealth.com/"],
  
  ["Arkansas", "Wellcare By Allwell", "https://wellcare.arhealthwellness.com/"],
  
  ["California", "Wellcare By Health Net", "https://wellcare.healthnetcalifornia.com/"],
  
  ["Deleware", "Wellcare", "https://www.wellcare.com/de"],
  
  ["Florida", "Wellcare by Allwell", "https://wellcarecomplete.com/"],
  
  ["Illinois", "Wellcare By Allwell?", "https://wellcarecomplete.com/"],

  ["Indiana", "Wellcare By Allwell", "https://wellcare.mhsindiana.com/"],
  
  ["Kansas", "Wellcare By Allwell", "https://wellcare.sunflowerhealthplan.com/"],
  
  ["Michigan", "Wellcare By Allwell", "https://www.wellcarecomplete.com/"],
  
  ["Missouri", "Wellcare By Allwell", "https://wellcare.homestatehealth.com/"],

  ["Nebraska", "Wellcare", "https://www.wellcarene.com/"],
  
  ["Nevada", "Wellcare By Allwell", "https://wellcare.silversummithealthplan.com/"],
  
  ["New Mexico", "Wellcare By Allwell", "https://wellcare.westernskycommunitycare.com/"],
  
  ["Ohio", "Wellcare By Allwell", "https://wellcare.buckeyehealthplan.com/"],
  
  ["Oklahoma", "Wellcare", "https://www.wellcareok.com/"], 
  
  ["Oregon", "Wellcare By Health Net", "https://wellcare.healthnetoregon.com/"],
  
  ["Pennsylvania", "Wellcare By Allwell", "https://wellcare.pahealthwellness.com/"],
  
  ["Texas", "Wellcare by Allwell", "https://wellcare.superiorhealthplan.com/"],
  
   ["Washington", "Wellcare By Health Net", "https://wellcare.healthnetoregon.com/"],
  
  ["Wisconsin", "Wellcare By Allwell", "https://wellcare.mhswi.com/"] 
]; 

for(var i = 0; i < options.length; i++) {
    var opt = options[i][0];

    var el = document.createElement("option");
    el.text = opt;
    el.value = opt;

    select.add(el);
}
</script>
