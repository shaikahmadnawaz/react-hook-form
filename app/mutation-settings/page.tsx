"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useState, FormEvent } from "react";

type Setting = {
  name: string;
  description: string;
};

const PostSettingsPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const settingsMutation = useMutation({
    mutationFn: async (data: Setting) => {
      const response = await fetch(
        "https://669ce8bf15704bb0e30496c1.mockapi.io/api/v1/settings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to create setting");
      }
      return response.json();
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    settingsMutation.mutate({ name, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default PostSettingsPage;
