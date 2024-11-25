type Params = {
    id: number,
}
   
export async function GET(request: Request, context: { params: Params }) {
    const userId = context.params.id;
};