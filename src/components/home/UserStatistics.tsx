type UserStatisticsProps = {
  userPoints: number;
};

function UserStatistics({ userPoints }: UserStatisticsProps) {
  return <div>Total points: {userPoints}</div>;
}

export default UserStatistics;
