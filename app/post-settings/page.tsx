"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, FormEvent } from "react";

const PostSettingsPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(
      "https://669ce8bf15704bb0e30496c1.mockapi.io/api/v1/settings",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description }),
      }
    );
    const data = await response.json();
    console.log(data);
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
