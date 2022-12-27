let $switch = document.querySelector("#check");

function encender ()
{
  let $foco = document.querySelector("#light");
  if ($switch.checked)
  {
    $foco.classList.add("on")
  }
  else
  {
    $foco.classList.remove("on")
  }

}

$switch.addEventListener("click", encender);