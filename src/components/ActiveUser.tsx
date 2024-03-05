import { Card, Avatar, Statistic } from "antd";
import { UserOutlined } from "@ant-design/icons";

const ActiveUser = ({ activeUsers }: { activeUsers: number }) => {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <Statistic
            title="Active Users"
            className="text-green-500"
            value={activeUsers}
            style={{
              color: "green",
            }}
            prefix={<Avatar icon={<UserOutlined />} />}
          />
        </div>
      </div>
    </Card>
  );
};

export default ActiveUser;
