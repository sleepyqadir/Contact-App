import React, { Component } from "react";
// import avatar from "../avatar1.png";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import { Button } from "antd";
const { Meta } = Card;
class ListContacts extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;
    const contactList = contacts.map(contact => {
      return (
        <Col span={6} key={contact.id}>
          <Card
            hoverable
            style={{ width: 250 }}
            cover={
              <Avatar
                shape="square"
                style={{ backgroundColor: "#87d068" }}
                size={200}
                icon={<UserOutlined />}
              />
            }
            actions={[
              <Button
                danger
                onClick={() => {
                  onDeleteContact(contact);
                }}
              >
                Delete
              </Button>
            ]}
          >
            <Meta title={contact.name} description={contact.handle} />
          </Card>
        </Col>
      );
    });

    return (
      <div className="site-card-wrapper">
        <Row gutter={[8, 24]}>{contactList}</Row>
      </div>
    );
  }
}

export default ListContacts;
