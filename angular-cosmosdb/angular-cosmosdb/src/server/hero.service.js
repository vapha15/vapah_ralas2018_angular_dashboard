const Hero = require("./hero.model");
//require("./mongo").connect();
const mongo = require('./mongo')
mongo.connect().then(() => {
  console.log("Connected");
});

function getHeroes(req, res) {
  const docquery = Hero.find({});
  docquery
    .exec()
    .then(heroes => {
      res.status(200).json(heroes);
    })
    .catch(error => {
      res.status(500).send(error);
      return;
    });
}

function postHero(req, res) {
  const originalHero = {
    uid: req.body.uid,
    name: req.body.name,
    saying: req.body.saying
  };
  const hero = new Hero(originalHero);
  hero.save(error => {
    if (checkServerError(res, error)) return;
    res.status(201).json(hero);
    console.log("Hero created successfully!");
  });
}

function checkServerError(res, error) {
  if (error) {
    res.status(500).send(error);
    return error;
  }
}

function putHero(req, res) {
  const originalHero = {
    uid: parseInt(req.params.uid, 10),
    name: req.body.name,
    saying: req.body.saying
  };
  Hero.findOne({ uid: originalHero.uid }, (error, hero) => {
    if (checkServerError(res, error)) return;
    if (!checkFound(res, hero)) return;

    hero.name = originalHero.name;
    hero.saying = originalHero.saying;
    hero.save(error => {
      if (checkServerError(res, error)) return;
      res.status(200).json(hero);
      console.log("Hero updated successfully!");
    });
  });
}

function deleteHero(req, res) {
  const uid = parseInt(req.params.uid, 10);
  Hero.findOneAndRemove({ uid: uid })
    .then(hero => {
      if (!checkFound(res, hero)) return;
      res.status(200).json(hero);
      console.log("Hero deleted successfully!");
    })
    .catch(error => {
      if (checkServerError(res, error)) return;
    });
}

function checkFound(res, hero) {
  if (!hero) {
    res.status(404).send("Hero not found.");
    return;
  }
  return hero;
}

module.exports = {
  getHeroes,
  postHero,
  putHero,
  deleteHero
};
