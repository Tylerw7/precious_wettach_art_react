import { useEffect, useState } from "react";
import {Label} from '../../src/components/ui/label'



type Props = {
    items: string[];
    checked: string[];
    onChange: (item: string[]) => void;
}




const CheckBoxButtons = ({items, checked, onChange}: Props) => {
    const [checkedItems, setCheckedItems] = useState(checked);

    useEffect(() => {
        setCheckedItems(checked);
    },[checked])

    const handleToggle = (value: string) => {
        const updatedChecked = checkedItems?.includes(value)
            ? checkedItems.filter(item => item !== value)
            : [...checkedItems, value];

        setCheckedItems(updatedChecked);
        onChange(updatedChecked);    
    }




  return (
    <form>
        {items.map((item, i )=> (
        <Label className="mb-2" key={i}>
        <input 
            type="checkbox" 
            value={item}
            checked={checkedItems.includes(item)}
            onClick={() => handleToggle(item)}
            />
        {item}
        </Label>
        ))}
    </form>
  )
}

export default CheckBoxButtons