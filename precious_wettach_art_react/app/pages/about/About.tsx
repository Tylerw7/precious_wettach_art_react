import { Button } from "@/components/ui/button"
import { useLazyGet400ErrorQuery, useLazyGet401ErrorQuery, useLazyGet404ErrorQuery, useLazyGet500ErrorQuery, useLazyGetValidationErrorQuery } from "./errorApi"


const About = () => {
  const [trigger400Error] = useLazyGet400ErrorQuery();
  const [trigger401Error] = useLazyGet401ErrorQuery();
  const [trigger404Error] = useLazyGet404ErrorQuery();
  const [trigger500Error] = useLazyGet500ErrorQuery();
  const [triggerValidationError] = useLazyGetValidationErrorQuery();


  return (
    <div className='mt-[150px] flex justify-center items-center'>
        <div className="flex gap-4">

            <Button className="w-[200px] h-[50px]" 
            onClick={() => trigger400Error().catch(err => console.log(err))}>Test 400</Button>

            <Button className="w-[200px] h-[50px]" 
                        onClick={() => trigger401Error().catch(err => console.log(err))}>Test 401</Button>

            <Button className="w-[200px] h-[50px]" 
                        onClick={() => trigger404Error().catch(err => console.log(err))}>Test 404</Button>

            <Button className="w-[200px] h-[50px]" 
                        onClick={() => trigger500Error().catch(err => console.log(err))}>Test 500</Button>

            <Button className="w-[200px] h-[50px]" 
                        onClick={() => triggerValidationError().catch(err => console.log(err))}>Test Validation</Button>

            
        </div>
    </div>
  )
}

export default About