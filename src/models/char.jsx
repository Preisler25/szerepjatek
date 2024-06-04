class Char {
  constructor(id, name, role, strength, health, img) {
    if (strength + health > 100) {
      throw new Error("Total points (strength + health) cannot exceed 100.");
    }

    if (strength < 0 || health < 0) {
      throw new Error("Strength and health cannot be negative.");
    }

    if (strength > 100 || health > 100) {
      throw new Error("Strength and health cannot exceed 100.");
    }

    this.id = id;
    this.name = name;
    this.role = role;
    this.strength = strength;
    this.health = health;
    this.img = img;
  }

  isValidUrl(url) {
    try {
      new URL(url);
    } catch (e) {
      return false;
    }
    return true;
  }
}

export default Char;
