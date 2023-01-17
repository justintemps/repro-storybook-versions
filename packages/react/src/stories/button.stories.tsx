import { Button } from "../components/button";
import { Meta, StoryObj } from "@storybook/react";

const argTypes = {
  color: {
    options: ["red", "yellow", "black"],
    control: { type: "select" },
  },
};

const ButtonMeta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes,
};

export default ButtonMeta;

export const PrimaryBtn: StoryObj<typeof Button> = {
  args: { color: "red", label: "Sample button" },
  name: "Default",
};
