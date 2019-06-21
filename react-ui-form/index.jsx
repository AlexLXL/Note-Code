import React,{Component} from 'react';
import { Form, Icon, Input, Button } from 'antd';

class Login extends Component{
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((errors, value) => { // === 4��this.props.form.validateFields �ñ�������ռ������� ===
      if(!errors) {
        const { username, password } = value;
        console.log(username, password)
      }else {
        console.log(errors)
      }
    })
  };

  validator = (rule, value, callback) => {             // === rule�Ǹ�����{ fullField��username }��input��value��callback()--��д
    if(!value){
      callback('�����������')
    }else if(!/^\w+$/.test(value)) {
      callback('����ֻ�ܰ�����ĸ�����֡��»���')
    }else if(value.length < 4) {
      callback('������С����4λ')
    }else if(value.length > 15) {
      callback('������󳤶�15λ')
    }else {
      callback()
    }
  };
  
  render() {
    const { getFieldDecorator } = this.props.form;    // === 2������getFieldDecorator ������У��form�� ===

    return <div className="login">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {
              getFieldDecorator('username',{          // === 3��ʹ�ã����ַ�ʽ ===
                rules: [
                  { validator: this.validator }

                  // {required: true, message: '�û�����������'},
                  // {min: 4,message: '�û�����С����4λ'},
                  // {max: 15,message: '�û�����󳤶�15λ'},
                  // {pattern: /^\w+$/, message: '�û���ֻ�ܰ�����ĸ�����֡��»���'}
                ]
              })(<Input prefix={<Icon type="user" />} placeholder="�û���" className="login-input"/>)
            }
          </Form.Item>
          <Form.Item>
            {
              getFieldDecorator('password',
                {
                  rules: [
                    { validator: this.validator }
                    ]
                })(<Input prefix={<Icon type="lock" />} type="password" placeholder="����" className="login-input"/>)
            }
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary" className="login-button">��¼</Button>
          </Item>
        </Form.Item>
    </div>
  }
}

// ����ֵ��һ�������   <Form(Login)><Login></Form(Login)>
export default Form.create()(Login)                   // === 1������props����form�����Ǹ߽����(��Login���) ===
