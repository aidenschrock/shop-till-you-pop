import { productDb } from "../../lib/mockProductDb";

export default function handler(req, res) {
  const params = req.query;
  if (params["filter.category"]) {
    res
      .status(200)
      .json(
        productDb.filter((item) =>
          item.category.includes(params["filter.category"])
        )
      );
  } else {
    res.status(200).json(productDb);
  }
}
