import { Warrior } from "../katas/theGreatestWarrior";
// jest.mock("../katas/theGreatestWarrior");
describe('testing bruce_lee warrior', () => {

  const bruce_lee = new Warrior();

  test('initial level at 1', () => {

    expect(bruce_lee.level()).toBe(1);
  })
  test('initial experience at 100', () => {

    expect(bruce_lee.experience()).toBe(100);
  })
  test('initial rank Pushover', () => {

    expect(bruce_lee.rank()).toBe('Pushover');
  })
  test('initial achievements empty', () => {

    expect(bruce_lee.achievements()).toEqual([]);
  })

  test('training result', () => {
    expect(bruce_lee.training(["Defeated Chuck Norris", 9000, 1])).toBe("Defeated Chuck Norris");
  });

  test('experience after training', () => {
    expect(bruce_lee.experience()).toBe(9100);
  });

  test('level after training', () => {
    expect(bruce_lee.level()).toBe(91);
  })
  test('rank after training', () => {

    expect(bruce_lee.rank()).toBe('Master');
  })

  test('battle result', () => {
    expect(bruce_lee.battle(90)).toBe("A good fight");
  });

  test('experience after battle', () => {
    expect(bruce_lee.experience()).toBe(9105);
  });
  test('achievements after battle', () => {

    expect(bruce_lee.achievements()).toEqual(["Defeated Chuck Norris"]);
  })
})

describe('Goku warrior path', () => {

  const Goku = new Warrior();

  test('Warriors start at lvl 1', () => {

    expect(Goku.level()).toBe(1);
  });

  test('Warriors start at Pushover Rank', () => {

    expect(Goku.rank()).toBe('Pushover');
  });

  test('Warriors start without achievements', () => {

    expect(Goku.achievements()).toEqual([]);
  });

  test('Training pushups', () => {

    expect(Goku.training(["Do ten push-ups", 95, 1])).toBe("Do ten push-ups");
  });

  test('Goku is still lvl 1', () => {

    expect(Goku.level()).toBe(1);
  });

  test('Invalid battle lvl', () => {

    expect(Goku.battle(0)).toBe('Invalid level');
  });

  test('First Goku battle', () => {

    expect(Goku.battle(1)).toBe('A good fight');
  });

  test('Goku is lvl 2', () => {

    expect(Goku.level()).toBe(2);
  });

  test('Goku first achievements', () => {

    expect(Goku.achievements()).toEqual(["Do ten push-ups"]);
  });

  test('Goku is still a Pushover', () => {

    expect(Goku.rank()).toBe('Pushover');
  });

  test('Intense Goku battle', () => {

    expect(Goku.battle(3)).toBe('An intense fight');
  });

  test('Goku is lvl 2', () => {

    expect(Goku.level()).toBe(2);
  });

  test('Training in the dark forest', () => {

    expect(Goku.training(["Survive one night at the Forest of Death", 170, 2])).toBe("Survive one night at the Forest of Death");
  });

  test('Not strong enough for training', () => {

    expect(Goku.training(["Mastered the Spirit Bomb", 1580, 10])).toBe("Not strong enough");
  });

  test('Goku achievements', () => {

    expect(Goku.achievements()).toEqual(["Do ten push-ups", "Survive one night at the Forest of Death"]);
  });

  test('Goku good battle', () => {

    expect(Goku.battle(2)).toBe('A good fight');
  });

  test('Goku is lvl 4', () => {

    expect(Goku.level()).toBe(4);
  });

  test('Goku experience is 400', () => {

    expect(Goku.experience()).toBe(400);
  });

  test('Goku intense battle', () => {

    expect(Goku.battle(9)).toBe('An intense fight');
  });

  test('Goku defeated', () => {

    expect(Goku.battle(14)).toBe("You've been defeated");
  });

  test('Goku is lvl 9', () => {

    expect(Goku.level()).toBe(9);
  });

  test('Goku intense battle', () => {

    expect(Goku.battle(12)).toBe('An intense fight');
  });

  test('Goku easy battle', () => {

    expect(Goku.battle(8)).toBe('Easy fight');
  });

  test('Goku Novice rank', () => {

    expect(Goku.rank()).toBe('Novice');
  });

  test('Goku experience is 1080', () => {

    expect(Goku.experience()).toBe(1080);
  });

  test('Invalid battle', () => {

    expect(Goku.battle(140)).toBe('Invalid level');
  });

  test('Training spirit bomb', () => {

    expect(Goku.training(["Mastered the Spirit Bomb", 1580, 10])).toBe("Mastered the Spirit Bomb");
  });

  test('Goku is lvl 26', () => {

    expect(Goku.level()).toBe(26);
  });

  test('Goku Fighter rank', () => {

    expect(Goku.rank()).toBe('Fighter');
  });

  test('Goku intense battle', () => {

    expect(Goku.battle(30)).toBe('An intense fight');
  });

  test('Goku Fighter rank', () => {

    expect(Goku.rank()).toBe('Fighter');
  });

  test('Goku is lvl 29', () => {

    expect(Goku.level()).toBe(29);
  });

  test('Goku experience is 2980', () => {

    expect(Goku.experience()).toBe(2980);
  });

  test('Training shadow clone', () => {

    expect(Goku.training(["Mastered the Shadow Clone Jutsu", 19, 6])).toBe("Mastered the Shadow Clone Jutsu");
  });

  test('Goku experience is 2999', () => {

    expect(Goku.experience()).toBe(2999);
  });

  test('Goku is lvl 29', () => {

    expect(Goku.level()).toBe(29);
  });

  test('Goku intense battle', () => {

    expect(Goku.battle(32)).toBe('An intense fight');
  });

  test('Goku Warrior rank', () => {

    expect(Goku.rank()).toBe('Warrior');
  });

  test('Goku experience is 3179', () => {

    expect(Goku.experience()).toBe(3179);
  });

  test('Goku intense battle', () => {

    expect(Goku.battle(39)).toBe('An intense fight');
  });

  test('Goku Veteran rank', () => {

    expect(Goku.rank()).toBe('Veteran');
  });

  test('Goku experience is 4459', () => {

    expect(Goku.experience()).toBe(4459);
  });

  test('Goku is lvl 44', () => {

    expect(Goku.level()).toBe(44);
  });

  test('Training too strong', () => {

    expect(Goku.training(["Defeat Superman", 10000, 100])).toBe("Not strong enough");
  });

  test('Training spirit gun', () => {

    expect(Goku.training(["Mastered the Spirit Gun", 1340, 43])).toBe("Mastered the Spirit Gun");
  });

  test('Goku Sage rank', () => {

    expect(Goku.rank()).toBe('Sage');
  });

  test('Goku experience is 5799', () => {

    expect(Goku.experience()).toBe(5799);
  });

  test('Goku is lvl 57', () => {

    expect(Goku.level()).toBe(57);
  });

  test('Goku intense battle', () => {

    expect(Goku.battle(61)).toBe('An intense fight');
  });

  test('Goku Elite rank', () => {

    expect(Goku.rank()).toBe('Elite');
  });

  test('Goku experience is 6119', () => {

    expect(Goku.experience()).toBe(6119);
  });

  test('Training roundhouse kick', () => {

    expect(Goku.training(["Mastered the Perfect Roundhouse Kick", 1781, 60])).toBe("Mastered the Perfect Roundhouse Kick");
  });

  test('Goku Conqueror rank', () => {

    expect(Goku.rank()).toBe('Conqueror');
  });

  test('Goku experience is 7900', () => {

    expect(Goku.experience()).toBe(7900);
  });

  test('Goku intense battle', () => {

    expect(Goku.battle(83)).toBe('An intense fight');
  });

  test('Goku is lvl 82', () => {

    expect(Goku.level()).toBe(82);
  });

  test('Goku Champion rank', () => {

    expect(Goku.rank()).toBe('Champion');
  });

  test('Goku experience is 8220', () => {

    expect(Goku.experience()).toBe(8220);
  });

  test('Training four horsemen', () => {

    expect(Goku.training(["Defeat The Four Horsemen", 1100, 82])).toBe("Defeat The Four Horsemen");
  });

  test('Goku defeated', () => {

    expect(Goku.battle(100)).toBe("You've been defeated");
  });

  test('Goku Master rank', () => {

    expect(Goku.rank()).toBe('Master');
  });

  test('Goku is lvl 93', () => {

    expect(Goku.level()).toBe(93);
  });

  test('Goku experience is 9320', () => {

    expect(Goku.experience()).toBe(9320);
  });

  test('Training intergalactic tournament', () => {

    expect(Goku.training(["Win the Intergalactic Tournament", 679, 91])).toBe("Win the Intergalactic Tournament");
  });

  test('Goku experience is 9999', () => {

    expect(Goku.experience()).toBe(9999);
  });

  test('Training with superman', () => {

    expect(Goku.training(["Fight Superman to a draw", 11000, 99])).toBe("Fight Superman to a draw");
  });

  test('Goku is lvl 100', () => {

    expect(Goku.level()).toBe(100);
  });

  test('Goku experience is 10000', () => {

    expect(Goku.experience()).toBe(10000);
  });

  test('Goku Greatest rank', () => {

    expect(Goku.rank()).toBe('Greatest');
  });

  test('Training with superman', () => {

    expect(Goku.training(["Defeat Superman", 10000, 100])).toBe("Defeat Superman");
  });

  test('Goku achievements', () => {

    expect(Goku.achievements()).toEqual(['Do ten push-ups', 'Survive one night at the Forest of Death', 'Mastered the Spirit Bomb', 'Mastered the Shadow Clone Jutsu', 'Mastered the Spirit Gun', 'Mastered the Perfect Roundhouse Kick', 'Defeat The Four Horsemen', 'Win the Intergalactic Tournament', 'Fight Superman to a draw', 'Defeat Superman']);
  });
})