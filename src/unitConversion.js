import SwitchToggle from "./switchToggle"

const ToggleUnit = () => {
    console.log(SwitchToggle)
        if(SwitchToggle === checked){
            return ('metric')
        }
        else{
            return ('imperial')
        }
}

export default ToggleUnit;

//am trying to create a toggle that if its turned on it adds the metric to the url but if not toggles then its imperial and sends toggle