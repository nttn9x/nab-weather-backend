import fetch from "node-fetch";

const getLocation = async (req: any, res: any, next: any) => {
  try {
    const { weoid } = req.params;
    const { cityName } = req.query;

    let url = `${process.env.WEATHER_API}/location/${weoid}`;

    if ("cityName" in req.query) {
      const { cityName } = req.query;
      if (!cityName || cityName.length < 1) {
        res.send([]);
        return;
      }

      url = `${url}?query=${cityName}`;
    }

    const data = await fetch(url).then((res: any) => res.json());

    res.send(data);
  } catch (error) {
    next(error);
  }
};

export { getLocation };
