import React, { Component } from "react";
import { Input, Button, Card } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ImageInput from "../utils/ImageInput";
import serialize from "form-serialize";
class CreateContact extends Component {
  onFinish = e => {
    e.preventDefault();
    const obj = serialize(e.target, { hash: true });
    console.log(obj);
    if (this.props.onCreateContact) {
      console.log(obj);
      this.props.onCreateContact(obj);
    }
  };
  render() {
    return (
      <div>
        <div>
          <Button key="1" type="primary" block>
            <Link to="/">Go back</Link>
          </Button>
          <Card style={{ width: 1000 }}>
            <form onSubmit={this.onFinish}>
              <ImageInput name="avatarUrl" size={64} />
              <Input
                name="name"
                size="large"
                placeholder="large size"
                prefix={<UserOutlined />}
              />
              <Input
                name="email"
                size="large"
                placeholder="large size"
                prefix={<MailOutlined />}
              />
              <Button htmlType="submit">Submit</Button>
            </form>
          </Card>
        </div>
      </div>
    );
  }
}

export default CreateContact;
