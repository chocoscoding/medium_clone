
import sanityClient from '@sanity/client';
import type { NextApiRequest, NextApiResponse } from 'next'


export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === 'production',
    token: process.env.SANITY_API_TOKEN,
}

 const client =  sanityClient(config);



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse 
) {
    const {_id, name, email, comment} = JSON.parse(req.body);
    console.log(req.body);
    
    try {
        await client.create({
            _type: "comment",
            post: {
                _type:'reference',
                _ref: _id
            },
            name,
            email,
            comment,
            approved: true
        })
    } catch (error) {
        return res.status(500).json({message: "couldn't submit comment", error})
    }
    console.log("comment submitted");
    
    return res.status(200).json({ message: "Comment Submited" })
}
