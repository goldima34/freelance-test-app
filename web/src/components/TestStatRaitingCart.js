import React, { useEffect, useState } from "react";
import { getUserById } from "../services/userApi";

export const TestStatRaitingCart = ({ stat, index }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    getUserById(stat.UserId).then((data) => setUser(data));
  }, [stat, user]);

  if (!user) {
    return <>loading</>;
  }

  return (
    <li>
      {index + 1}. {user.name} - {" "}
      <i>
        {stat.CorrectAnswerCount} / {stat.QuestionsCount}{" "}
      </i>
    </li>
  );
};
