import {MyContext} from './grandFather';
import 'antd/dist/antd.css';
import {useContext} from 'react';
import {Row, Card} from 'antd';
export default function child() {
    const context = useContext(MyContext);
    return (
        <div>
            <Row>
                <Card type="inner" title="Child" style={{width: "100%"}}>
                        With Grandfathers Value: {context}
                </Card>
            </Row>
        </div>
    )
}