import { Card, Avatar, Statistic } from "antd";
import { UserOutlined } from "@ant-design/icons";

const ActiveUser = ({
  activeUsers,
  userLists,
}: {
  activeUsers: number;
  userLists: string[];
}) => {
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
        <div className="">
          <div className="flex items-center">
            <div className="mr-2">
              <Statistic title="Top User" value="John Doe" />
            </div>
            <Avatar.Group maxCount={3}>
              {userLists.map((user) => {
                return (
                  <>
                    <Avatar key={user} style={{ backgroundColor: "#f56a00" }}>
                      {user}
                    </Avatar>
                  </>
                );
              })}
            </Avatar.Group>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ActiveUser;
