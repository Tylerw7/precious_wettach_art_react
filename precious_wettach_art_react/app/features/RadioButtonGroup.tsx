
import {Label} from '../../src/components/ui/label'
import { RadioGroup, RadioGroupItem} from '../../src/components/ui/radio-group'


type Props = {
    options: { value: string; label: string }[]
    onChange: (value: string) => void
    selectedValue: string
  }
  




const RadioButtonGroup = ({options, onChange, selectedValue}: Props) => {
  return (
    <form>
        <RadioGroup onValueChange={onChange} value={selectedValue}>
        {options.map(({value, label}) => (
         <div className='flex gap-2' key={`radio-${label}`}>
         <RadioGroupItem  className="" value={value}/> 
         <Label key={label} className="mb-2">{label}</Label>
         </div>
        ))}
        </RadioGroup>
    </form>
  )
}

export default RadioButtonGroup