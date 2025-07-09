import { headerState } from "../headerState";
import { secrets } from "../secrets";
import { textAreaInputCorrectly } from "./textAreaInputCorrectly";

export function hiddenNextLocation ()

{
    const state = Number(localStorage.getItem('answerPass'));
    const textarea = document.getElementById('form');
    const textAreaPass = document.getElementById('form-pass');
if (state === 1){
    text.innerHTML = secrets[localStorage.getItem('currentStep')].nextLocation;
    header.textContent = headerState.questionPass;
   
    textarea.classList.add('hidden');
    textAreaPass.classList.remove('hidden');
   
 }

}