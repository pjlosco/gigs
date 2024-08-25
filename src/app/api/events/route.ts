import data from "../../../data/sample.json";

export async function GET() {
  return Response.json(data);
}
