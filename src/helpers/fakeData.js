import faker from "faker";

export const fakeList = (dates) => {
  const res = [];
  const count = 1000;
  for (let i = 0; i < count; i += 1) {
    res.push({
      id: i,
      title: `JET ${faker.random.word()}`,
      dates: dates,
      image: faker.image.image(),
    });
  }
  return res;
};
