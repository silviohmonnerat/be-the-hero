const connection = require("../../database/connection");

module.exports = {
  async index(request, response) {
    const ong_id = request.headers.authorization;
    const incindents = await connection("incindents").select("*");

    return response.json(incindents);
  },

  async store(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await connection("incindents").insert({
      title,
      description,
      value,
      ong_id
    });

    return response.json({ id });
  },

  async destroy(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const incindents = await connection("incindents")
      .where("id", id)
      .select("ong_id")
      .first();

    if (incindents.ong_id !== ong_id) {
      return response.status(401).json({ error: "Operation not permitted." });
    }

    await connection("incindents")
      .where("id", id)
      .delete();

    return response.status(204).send();
  }
};
