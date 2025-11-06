import { Pesel } from "./Pesel";

describe("Pesel component", () => {
  //Incorrect length (less/more than 11 )
  it("returns false for invalid lenfth (not 11 digits"),
    () => {
      expect(Pesel("123")).toBe(false);
    };
  //Non-digit characters (letters, spaces, hypens)
  //Non-existent date
  //Invalid month/century encoding
  //correct format and date but wrong checksum digit
  //valid pesel
});
