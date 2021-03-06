import 'antd/dist/antd.css';
import {Button, Form, Input,Card,Descriptions} from 'antd';
import FormItem from 'antd/lib/form/FormItem';

export default function childSiblings(fatherProps) {
  const changeSomonesState = fatherProps
    ?.changeStateFunction

  function onFinish(values) {
    changeSomonesState(values.name)
  }

  return (
    <Card type="inner" title="Child" extra={<h3>My Value From Brother is:{fatherProps.data}</h3>} style={{width: "100%" }}>
      <div>
        <h1>Give Value</h1>
        <Form onFinish={onFinish}>
          <FormItem name="name">
            <Input></Input>
          </FormItem>
          <FormItem>
            <Button htmlType="submit">
              ok!
            </Button>
          </FormItem>
        </Form>
      </div>
      <Descriptions title="Info About Childs">
              <Descriptions.Item >
              The child receives its brothers setter function and when the button is clicked we call it with arguments the user input. 
              </Descriptions.Item>
            </Descriptions>
    </Card>
  )
};