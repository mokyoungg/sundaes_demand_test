// import { render, screen } from "@testing-library/react";
import { render, screen } from "../../../test-utils/testing-library-utils";
import Options from "../Options";
import { OrderDetailsProvider } from "../../../contexts/OrderDetails";

test("displays image for each scoop option from server", async () => {
  // render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });
  render(<Options optionType="scoops" />);

  // find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("Displays image for each toppings option from server", async () => {
  render(<Options optionType="toppings" />);

  // find images, expect 3 based on what msw returns
  const images = await screen.findAllByRole("img", { name: /topping$/i });
  expect(images).toHaveLength(3);

  // check the actual alt text for the images
  const imageTitles = images.map((img) => img.alt);
  expect(imageTitles).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
