import React,{useState} from "react";
import {useParams} from "react-router-dom";
import { Layout,Input, Form,Button, Icon ,Row,Col} from 'antd';
import higherOrderComponent from "./HOC";
const styles={
  heightStyle:{height:"100%"},
  headerStyle:{  padding: 0,position: "fixed",
  top:"0",
  width: "100%",
  zIndex: "1000" ,backgroundColor:"#ffd565"},
  title:{fontSize: "large",
  position: "relative",fontFamily: "sans-serif"
  },
  logo:{width:"40px",height:"40px",margin:"13px"},
  contentHeight:{    height: "100%",
      display: "flex",position:"relative",top:"100px"
  
  },
  flex:{display:"flex"},
  formItems:{ color: 'rgba(0,0,0,.25)' },
  knowUpi:{position: "relative",
  left: "calc(100% - 130px)"},
  formStyle:{display:"flex",justifyContent:"center",alignItems:"center",height:"calc(100% - 80px)",flexDirection: "column"}

}
const Transaction=(props)=>{
  const { id,amountValue } = useParams();
    const { Header, Content } = Layout;
    const [upiId,setUpiId]=useState(id?id:"")
    const [amount,setAmount]=useState(amountValue?amountValue:"")

    function onChangeValues(event){
      switch(event.target.id){
        case "upiId":
          if(event.target.value && /^[0-9A-Za-z@]*$/g.test(event.target.value)){
            setUpiId(event.target.value.toLowerCase())
          }else{
            setUpiId("")
          }
           break;
          case "amount":
            if(event.target.value && /^[0-9]*$/g.test(event.target.value) && event.target.value.length <=6){
              setAmount(event.target.value);
            }else{
              setAmount("");
            }
            break;
        default:
        break;
      }
    }

    return(
        <div style={styles.heightStyle}>
        <Header style={styles.headerStyle} >
      <Row type="flex" >
        <Col xs={19} md={17} lg={19} xl={20} >
        <div className="logo" style={styles.flex} ><img  alt="payease-logo" style={styles.logo} src={`${process.env.PUBLIC_URL}/payicon.jpg`}/>
        <span style={styles.title}>Pay Ease</span>
      
      </div>
        </Col>
        <Col xs={5} md={7} lg={5} xl={4}>
        </Col>
      </Row>
      </Header>
      <div style={styles.contentHeight}>
        <Content>
          <div style={styles.formStyle}>
  <div>
    Transact
  </div>
  <div style={{padding: "20px",
      border: "2px solid lightgrey"}}>
  
          
        <Form className="login-form">
          <Form.Item>
            
              <Input
                prefix={<Icon type="user"  style={styles.formItems} />}
                placeholder="UPI ID" id="upiId" value={upiId} onChange={(event)=>onChangeValues(event)}
              />
             
             <Button type="link" style={styles.knowUpi}> Know your upi id?</Button>
             
           
          </Form.Item>
        
          <Form.Item>
            
              <Input
                prefix={<Icon type="lock" style={styles.formItems} />}
                value={amount} id="amount" onChange={(event)=>onChangeValues(event)}
                placeholder="Amount"
              />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button"
            >
              <a href={`upi://pay?pa=${upiId}&&pn=nivi%20balu&&tr=kdahskjahRRRRRs27595fsdfasdas&am=${amount}&mam=null&cu=INR`}
              >

              Pay
              </a>
            </Button>
           
          </Form.Item>
        </Form>
          
  </div>
        </div>
        </Content>
      </div>
    </div>
    
    )
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Transaction)
export default higherOrderComponent(WrappedNormalLoginForm);
