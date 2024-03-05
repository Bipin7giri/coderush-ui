import { Card, Avatar, Statistic } from "antd";
import { UserOutlined } from "@ant-design/icons";

const ActiveUser = ({
  activeUsers,
  currentUser,
  userLists,
}: {
  activeUsers: number;
  currentUser: string;
  userLists: string[];
}) => {
  return (
    <Card>
      <div className="flex items-center justify-between gap-2">
        <div>
          <Statistic
            title="Number Active Users"
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
              <Statistic title="Lists Active Users" value={currentUser} />
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
