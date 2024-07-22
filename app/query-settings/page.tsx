"use client";

import { useQuery } from "@tanstack/react-query";

type Setting = {
  id: string;
  name: string;
  description: string;
};

const QuerySettingsPage = () => {
  const {
    data: settings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: async () => {
      const response = await fetch(
        "https://669ce8bf15704bb0e30496c1.mockapi.io/api/v1/settings"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading settings</div>;

  return (
    <div>
      {settings?.map((setting: Setting) => (
        <div key={setting.id}>
          <h1>{setting.name}</h1>
          <p>{setting.description}</p>
        </div>
      ))}
    </div>
  );
};

export default QuerySettingsPage;
