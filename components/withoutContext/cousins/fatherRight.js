import 'antd/dist/antd.css';
import { Card } from 'antd';
import ChildRight from './childRight';

export default function fatherRight(grandFatherProps) {
  return (
    <Card 
      type="inner" 
      title="Right Father" 
      
      style={{width: "100%" }}
    >
      <div>
        <ChildRight data={grandFatherProps.data} changeStateFunction={grandFatherProps?.changeStateFunction} />
      </div>
    </Card>
  )
};