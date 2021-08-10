import React from 'react';
import { Link } from "react-router-dom"
import { Card, Avatar } from 'antd';

const { Meta } = Card;
export default function DashboardContent() {
  return (
    <Link to="/dashboard/student">
      <div>
        <Card style={{ width: 300, marginTop: 16 }} >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card>
      </div>
    </Link>
  )
}
