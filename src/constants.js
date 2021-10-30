export const CONTRACT_ADDRESS = "0xD9C83303a4938728B7bd2e323638F7b1F6ea8A94";

export const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
    defence: characterData.defence.toNumber(),
  };
};
