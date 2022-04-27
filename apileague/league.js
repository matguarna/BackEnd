const { RiotAPI } = require("@fightmegg/riot-api");
const { pickBy } = require("lodash");
const fs = require("fs-extra");

const init = async () => {
  try {
    const rAPI = new RiotAPI("RGAPI-6bd4096f-4f95-40f4-8bef-781f419ce259");
    const championRotation = await rAPI.champion.getRotations({ region: "LA2" });
    const champions = await rAPI.ddragon.champion.all();

    const freeWeeklyChamps = []

    championRotation.freeChampionIds.forEach((championKey) => {
      const freeChamp = pickBy(champions.data, (champion) => +champion.key === championKey);
      freeWeeklyChamps.push(freeChamp)
    });

    fs.writeJSONSync('freeWeeklyChamps.json', freeWeeklyChamps)
  } catch (error) {
    console.log(error);
  }
};

function getChampImage (name){
  return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg`
}

init();
