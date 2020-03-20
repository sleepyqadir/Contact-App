import PropTypes from "prop-types";
import React, { Component } from "react";
import { Button, Card, Col, Descriptions, Input, PageHeader, Row } from "antd";
import { Link } from "react-router-dom";

import { Typography } from "antd";
const { Meta } = Card;
const { Search } = Input;
const { Text } = Typography;

class ListContacts extends Component {
  state = {
    query: ""
  };

  updateQuery = query => {
    this.setState(() => ({
      query: query.trim()
    }));
  };
  render() {
    const { contacts, onDeleteContact } = this.props;
    const { query } = this.state;
    const filterContactList =
      query === ""
        ? contacts
        : contacts.filter(val => {
            return val.name.toLowerCase().includes(query.toLowerCase());
          });
    console.log(filterContactList);
    const contactList = filterContactList.map(contact => {
      return (
        <Col span={6} key={contact.id}>
          <Card
            hoverable
            style={{ width: 250 }}
            cover={<img alt="example" src={contact.avatarURL} />}
            actions={[
              <Button type="primary">Edit</Button>,
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
            <Meta title={contact.name} description={contact.email} />
          </Card>
        </Col>
      );
    });
    return (
      <div>
        <div className="header">
          <PageHeader
            className="site-page-header"
            onBack={() => window.history.back()}
            title="Contacts"
            subTitle="This is a subtitle"
            extra={[
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                enterButton
                value={query}
                onChange={event => {
                  this.updateQuery(event.target.value);
                }}
              />
            ]}
          >
            <Descriptions size="small" column={3}>
              <Descriptions.Item label="Created">Ayin Qoph</Descriptions.Item>
              <Descriptions.Item label="Association">421421</Descriptions.Item>
              <Descriptions.Item label="Current Time">{""}</Descriptions.Item>
              <Descriptions.Item label="Effective Time">
                2017-10-10
              </Descriptions.Item>
              <Descriptions.Item label="Now Showing">
                {contacts.length} of{" "}
                <Text mark>{filterContactList.length}</Text>
              </Descriptions.Item>
              <Descriptions.Item>
                <Button key="1" type="primary" block>
                  <Link to="/create">Add Contact</Link>
                </Button>
              </Descriptions.Item>
            </Descriptions>
          </PageHeader>
        </div>
        <div className="site-card-wrapper">
          <Row gutter={[8, 24]}>{contactList}</Row>
        </div>
      </div>
    );
  }
}

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
};

export default ListContacts;
