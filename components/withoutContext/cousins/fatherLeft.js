import 'antd/dist/antd.css';
import { Card } from 'antd';
import ChildLeft from './childLeft';

export default function fatherLeft(grandFatherProps) {

  return (
    <Card 
      type="inner" 
      title="Left Father" 
     
      style={{width: "100%" }}
    >
      <div>
        <ChildLeft data={grandFatherProps.data} changeStateFunction={grandFatherProps?.changeStateFunction} />  
      </div>
    </Card>
  )
};