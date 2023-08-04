import { getAllBooks } from "@/services/books";
import { type NextApiRequest, type NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const books = await getAllBooks();

  if (!books) {
    const errorMessage = "Something went wrong, please try again :(";
    return res.status(500).json({ errorMessage });
  }

  return res.status(200).json({ books });
}

export default handler;
