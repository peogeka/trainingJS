const object = {
  name: "John",
  age: 30,
  city: ["New York"],
  profession: "Engineer",
  hobby: "Photography",
  changeName(newName) {
    this.name = newName;
  },
  addCity(newCity) {
    this.city.push(newCity);
  },
  updateProfession(newProfession) {
    this.profession = newProfession;
  },
};

object.changeName("Yevhenii");
object.addCity("Kyiv");
object.updateProfession("Frontend Developer");

console.log(object);
