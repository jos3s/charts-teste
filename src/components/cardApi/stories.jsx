import { CardApi } from ".";

export default {
  title: "CardApi",
  component: CardApi,
};

export const Template = (args) => {
  return (
    <div>
      <CardApi {...args} />
    </div>
  );
};
