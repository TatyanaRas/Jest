const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
  it("Without sorting", () => {
    expect(
      sorting.sortByName([
        "Властелин Колец",
        "Гарри Поттер",
        "Гарри Поттер",
      ])
    ).toEqual([
      "Властелин Колец",
      "Гарри Поттер",
      "Гарри Поттер",
    ]);
  });
});
