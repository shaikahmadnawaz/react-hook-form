"use client";

import { useEffect, useState } from "react";

type Setting = {
  _id: string;
  name: string;
  description: string;
};

const GetSettingsPage = () => {
  const [settings, setSettings] = useState([]);
  const fetchSettings = async () => {
    const response = await fetch(
      "https://669ce8bf15704bb0e30496c1.mockapi.io/api/v1/settings"
    );
    const settings = await response.json();
    setSettings(settings);
    console.log(settings);
  };

  useEffect(() => {
    fetchSettings();
  }, []);
  return (
    <div>
      {settings.map((setting: Setting) => {
        return (
          <div key={setting._id}>
            <h1>{setting.name}</h1>
            <p>{setting.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default GetSettingsPage;
