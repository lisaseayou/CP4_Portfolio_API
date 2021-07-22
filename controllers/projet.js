const getAds = async (req, res) => {
    const [ads] = await findMany(req.query);
    res.status(200).json(ads);
  };
  
  const createAd = async (req, res) => {
    try {
      await create(req.body);
      res.status(201).send("Ad has been created");
    } catch (err) {
      res.status(500).send("Error creating ad");
    }
  };
  
  const deleteAd = async (req, res) => {
    try {
      await delete_(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(500).send("Error deleting ad");
    }
  };
  
  module.exports = {
    getAds,
    createAd,
    getAd,
    deleteAd,
  };
  